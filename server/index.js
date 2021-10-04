import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sttRoutes from "./routes/stt.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/stt", sttRoutes);

app.use("/", (req, res) => {
    res.send("Server running...");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running or port: ${PORT}`));