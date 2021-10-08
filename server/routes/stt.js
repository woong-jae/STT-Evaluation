import express from 'express';
import { kakao, ibmWatson, clova, google, azure } from "../controllers/stt.js";

const router = express.Router();

router.post('/kakao', kakao);
router.post('/ibm', ibmWatson);
router.post('/clova', clova);
router.post('/google', google);
router.post('/azure', azure);

export default router;