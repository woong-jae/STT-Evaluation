import axios from "axios";
import dotenv from "dotenv";
import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1.js';
import { IamAuthenticator } from 'ibm-watson/auth/index.js';
import { auth } from "google-auth-library";

dotenv.config();

export const kakao = async (req, res) => {
    const rq = axios.create({
        baseURL: "https://kakaoi-newtone-openapi.kakao.com/",
        headers: {
            'Transfer-Encoding': 'chunked', 
            'Content-Type': 'application/octet-stream', 
            'Authorization': `KakaoAK ${process.env.KAKAO_KEY}`
        }
    });

    try {
        const result = await rq.post('v1/recognize', req.file.buffer);
        console.log(result.data);
        res.status(200).send(result.data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
}

export const ibmWatson = (req, res) => {
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

    speechToText.recognize(recognizeParams)
        .then(speechRecognitionResults => {
          console.log(JSON.stringify(speechRecognitionResults, null, 2));
          res.status(200).json(speechRecognitionResults);
        })
        .catch(err => {
          console.log('error:', err);
          res.status(404).json({ message: err });
        });
}

export const clova = async (req, res) => {
  const rq = axios.create({
    baseURL: "https://naveropenapi.apigw.ntruss.com/recog",
    headers: {
      "Content-Type": "application/octet-stream",
      "X-NCP-APIGW-API-KEY-ID": process.env.CLOVA_KEY_ID,
      "X-NCP-APIGW-API-KEY": process.env.CLOVA_KEY,
    },
  });

  try {
    const result = await rq.post('/v1/stt?lang=Kor', req.file.buffer);
    console.log(result.data);
    res.status(200).send(result.data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const google = async (req, res) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
  const client = auth.fromAPIKey(API_KEY);
  const url = "https://speech.googleapis.com/v1/speech:recognize";
  const request = {
    audio: {
      content: req.body.file
    },
    config: {
      encoding: "LINEAR16",
      sampleRateHertz: 16000,
      languageCode: "ko-KR"
    }
  }

  await client.request({
    url,
    method: "POST",
    data: request,
  }).then((response) => {
      const transcription = response.data.results
        .map((result) => result.alternatives[0].transcript)
        .join("\n");
      console.log(transcription);
      res.status(200).send(transcription);
  }).catch((err) => {
      console.log("error :", err);
      res.status(404).json({ message: err });
  });
}