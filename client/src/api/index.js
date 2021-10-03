import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const kakaoSTT = async (mp3) => {
    const rq = axios.create({
        baseURL: "https://kakaoi-newtone-openapi.kakao.com/",
        headers: {
            'Transfer-Encoding': 'chunked', 
            'Content-Type': 'application/octet-stream', 
            'Authorization': `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`
        }
    });
    const res = await rq.post('v1/recognize', mp3);
    return res;
}

import fs from "fs";
export const ClovaSTT = async (filePath) => {
    // 현재는 로컬에 저장된 파일 경로를 받고, 열어서 stt 수행
    const url = `https://naveropenapi.apigw.ntruss.com/recog`;
    const req = axios.create({
        baseURL : url,
        headers : {
            'Content-Type': 'application/octet-stream',
            'X-NCP-APIGW-API-KEY-ID': process.env.CLOVA_ID,
            'X-NCP-APIGW-API-KEY': process.env.CLOVA_SECRET
        }
    })
    // 입력받은 경로로 파일 read
    const data = fs.createReadStream(filePath);
    const res = await req.post('/v1/stt?lang=Kor', data); // binary 파일 전달
    console.log(res.data.text);
    return res.data.text;
}