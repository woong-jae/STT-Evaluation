import SpeechToTextV1 from 'ibm-watson/speech-to-text/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import dotenv from 'dotenv';

dotenv.config();

export const ibmWatsonSTT = async (wav) => {
    const speechToText = new SpeechToTextV1({
        authenticator: new IamAuthenticator({
          apikey: process.env.REACT_APP_IBM_KEY,
        }),
        serviceUrl: 'https://api.kr-seo.speech-to-text.watson.cloud.ibm.com/instances/1ff2f1d2-a980-411c-8102-2a67b2ddffc9',
    });

    speechToText.methodName(
        headers: {
          'Content-Type': 'audio/wav'
        }).then(result => {
          console.log(response);
        }).catch(err => {
          console.log('error:', err);
        });
}