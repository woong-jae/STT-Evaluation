import axios from "axios";

const API = axios.create(
    { 
        baseURL: 'http://localhost:4000/', 
        headers: {
            // 'Content-Type': 'application/octet-stream'
        }
    }
);

export const kakaoSTT = (wav) => API.post('stt/kakao', wav);
export const ibmWatsonSTT = (wav) => API.post('stt/ibm', wav);
export const clovaSTT = (wav) => API.post('stt/clova', wav);

export const googleSTT = (file) => {
  const { auth } = require("google-auth-library");
  const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileBase64 = reader.result.slice(22);
      const audio = {
        content: fileBase64,
      };
      const config = {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        languageCode: "ko-KR",
      };
      const request = {
        audio: audio,
        config: config,
      };

      const client = auth.fromAPIKey(API_KEY);
      const url = "https://speech.googleapis.com/v1/speech:recognize";

      client
        .request({
          url,
          method: "POST",
          data: request,
        })
        .then((response) => {
          const transcription = response.data.results
            .map((result) => result.alternatives[0].transcript)
            .join("\n");
          console.log(`Transcription: ${transcription}`);
          return transcription;
        })
        .catch((err) => {
          console.log("error :", err);
        });
    };
    reader.onerror = () => {
      console.log("Base64 encoding failed");
    };
  }
};
