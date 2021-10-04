import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
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
    const data = fs.createReadStream(wav);
    const res = await rq.post('v1/recognize', data);
    return res;
}

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