import axios from "axios";

const API = axios.create(
    { 
        baseURL: 'http://localhost:4000/', 
    }
);

export const kakaoSTT = (wav) => API.post('stt/kakao', wav);
export const ibmWatsonSTT = (wav) => API.post('stt/ibm', wav);
export const clovaSTT = (wav) => API.post('stt/clova', wav);
export const googleSTT = (wav) => API.post('stt/google', wav);