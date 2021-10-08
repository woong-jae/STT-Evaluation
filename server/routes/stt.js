import express from 'express';
import { kakao, ibmWatson, clova, google } from "../controllers/stt.js";

const router = express.Router();

router.post('/kakao', kakao);
router.post('/ibm', ibmWatson);
router.post('/clova', clova);
router.post('/google', google);

export default router;