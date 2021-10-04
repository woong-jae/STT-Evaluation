import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const kakaoSTT = async (wav) => {
    const rq = axios.create({
        baseURL: "https://kakaoi-newtone-openapi.kakao.com/",
        headers: {
            'Transfer-Encoding': 'chunked', 
            'Content-Type': 'application/octet-stream', 
            'Authorization': `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`
        }
    });
    const res = await rq.post('v1/recognize', wav);
    return res;
}