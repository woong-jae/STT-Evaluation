import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import sttRoutes from "./routes/stt.js";

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

dotenv.config();

app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.single('file'));
app.use(cors());

app.use("/stt", sttRoutes);

app.use("/", (req, res) => {
    res.send("Server running...");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running or port: ${PORT}`));