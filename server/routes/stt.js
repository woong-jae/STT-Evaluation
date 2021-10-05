import express from 'express';
import { kakao, ibmWatson } from "../controllers/stt.js";

const router = express.Router();

router.post('/kakao', kakao);
router.post('/ibm', ibmWatson);

export default router;