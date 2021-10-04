import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const kakaoSTT = async (req, res) => {
    const wav = req.body;
    
    const rq = axios.create({
        baseURL: "https://kakaoi-newtone-openapi.kakao.com/",
        headers: {
            'Transfer-Encoding': 'chunked', 
            'Content-Type': 'application/octet-stream', 
            'Authorization': `KakaoAK ${process.env.KAKAO_KEY}`
        }
    });

    try {
        const result = await rq.post('v1/recognize', wav);
        console.log(result.data);
        res.status(200).send(result.data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
}
