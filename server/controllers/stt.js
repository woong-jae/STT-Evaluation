import axios from "axios";
import dotenv from "dotenv";
import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1.js';
import { IamAuthenticator } from 'ibm-watson/auth/index.js';
import { auth } from "google-auth-library";
import { AudioConfig, ResultReason, SpeechConfig, SpeechRecognizer, ServicePropertyChannel } from 'microsoft-cognitiveservices-speech-sdk';
import Cookie from 'universal-cookie';

dotenv.config();

export const kakao = async (req, res) => {
  console.log("Requesting Kakao STT API...");
  const rq = axios.create({
      baseURL: "https://kakaoi-newtone-openapi.kakao.com/",
      headers: {
          'Transfer-Encoding': 'chunked', 
          'Content-Type': 'application/octet-stream', 
          'Authorization': `KakaoAK ${process.env.KAKAO_KEY}`
      }
  });

  try {
      var nStart = new Date().getTime();
      const result = await rq.post('v1/recognize', req.file.buffer);
      var nEnd =  new Date().getTime();
      const filtered_res = JSON.parse(result.data.slice(result.data.indexOf("finalResult") - 9, result.data.lastIndexOf("}") + 1));
      const duration = nEnd - nStart + "ms";
      res.status(200).json({ result: filtered_res.value, duration });
  } catch (error) {
      console.log(error);
      res.status(404).json({ message: error });
  }
}

export const ibmWatson = (req, res) => {
  console.log("Requesting IBM Watson STT API...");
  const speechToText = new SpeechToTextV1({
      authenticator: new IamAuthenticator({
        apikey: process.env.IBM_KEY,
      }),
      serviceUrl: 'https://api.kr-seo.speech-to-text.watson.cloud.ibm.com/instances/1ff2f1d2-a980-411c-8102-2a67b2ddffc9',
  });

  const recognizeParams = {
      audio: req.file.buffer,
      contentType: 'audio/wav',
      model: 'ko-KR_Multimedia',
  };

  var nStart = new Date().getTime();
  speechToText.recognize(recognizeParams)
      .then(speechRecognitionResults => {
        var nEnd =  new Date().getTime();
        const duration = nEnd - nStart + "ms";
        res.status(200).json({ result: speechRecognitionResults.result.results[0].alternatives[0].transcript, duration });
      })
      .catch(err => {
        console.log('error:', err);
        res.status(404).json({ message: err });
      });
}

export const clova = async (req, res) => {
  console.log("Requesting Naver Clova STT API...");
  const rq = axios.create({
    baseURL: "https://naveropenapi.apigw.ntruss.com/recog",
    headers: {
      "Content-Type": "application/octet-stream",
      "X-NCP-APIGW-API-KEY-ID": process.env.CLOVA_KEY_ID,
      "X-NCP-APIGW-API-KEY": process.env.CLOVA_KEY,
    },
  });

  try {
    var nStart = new Date().getTime();
    const result = await rq.post('/v1/stt?lang=Kor', req.file.buffer);
    var nEnd =  new Date().getTime();
    const duration = nEnd - nStart + "ms";
    res.status(200).json({ result: result.data.text, duration });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const google = async (req, res) => {
  console.log("Requesting Google STT API...");
  const API_KEY = process.env.GOOGLE_KEY;
  const client = auth.fromAPIKey(API_KEY);
  const url = "https://speech.googleapis.com/v1/speech:recognize";
  const fileBase64 = req.file.buffer.toString("base64");
  const request = {
    audio: {
      content: fileBase64
    },
    config: {
      encoding: "LINEAR16",
      // sampleRateHertz: 16000,
      languageCode: "ko-KR"
    }
  }
  
  var nStart = new Date().getTime();
  await client.request({
    url,
    method: "POST",
    data: request,
  }).then((response) => {
      const transcription = response.data.results
        .map((result) => result.alternatives[0].transcript)
        .join("\n");
      var nEnd =  new Date().getTime();
      const duration =  nEnd - nStart + "ms";
      res.status(200).json({ result: transcription, duration });
  }).catch((err) => {
      console.log("error :", err);
      res.status(404).json({ message: err });
  });
}

export const azure = async(req, res) => {
  const getTokenOrRefresh = async() => {
      const cookie = new Cookie();
      const speechToken = cookie.get('speech-token');
      const speechKey = process.env.AZURE_KEY;
      const speechRegion = process.env.AZURE_REGION;
  
      const headers = {
          headers: {
              'Ocp-Apim-Subscription-Key': speechKey,
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      };
      const tokenResponse = await axios.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);

      if (speechToken === undefined) {
          try {
              const token = tokenResponse.data;
              const region = speechRegion;
              cookie.set('speech-token', region + ':' + token, {maxAge: 540, path: '/'});
              return { authToken: token, region: region };
          } catch (err) {
              console.log(err.response.data);
              return { authToken: null, error: err.response.data };
          }
      } else {
          const idx = speechToken.indexOf(':');
          return { authToken: speechToken.slice(idx + 1), region: speechToken.slice(0, idx) };
      }
  }
  const audioFile = req.file.buffer;
  const tokenObj = await getTokenOrRefresh();
  const speechConfig = SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
  speechConfig.setServiceProperty('punctuation', 'explicit', ServicePropertyChannel.UriQueryParameter);
  speechConfig.speechRecognitionLanguage = 'ko-KR';
  const audioConfig = AudioConfig.fromWavFileInput(audioFile);
  var nStart = new Date().getTime();
  const recognizer = new SpeechRecognizer(speechConfig, audioConfig);
  recognizer.recognizeOnceAsync(result => {
      var nEnd =  new Date().getTime();
      if (result.reason === ResultReason.RecognizedSpeech) {
          const duration =  nEnd - nStart + "ms";
          res.status(200).json({ result : result.text, duration });
      } else {
          res.status(404).json({ message: 'ERROR: Speech was cancelled or could not be recognized.' });
      }
  });
}