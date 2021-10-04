import express from 'express';

import { kakaoSTT } from "../controllers/stt.js";

const router = express.Router();

router.post('/kakao', kakaoSTT);

export default router;