import axios from "axios";
import dotenv from "dotenv";
import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1.js';
import { IamAuthenticator } from 'ibm-watson/auth/index.js';

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
