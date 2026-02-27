import express from "express";
import dotenv from "dotenv";
import { processEmail } from "./orchestrator.js";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/process-email", async (req, res) => {
  try {
    const { raw_text } = req.body;
    const result = await processEmail(raw_text);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Processing failed" });
  }
});

app.listen(3000, () =>
  console.log("LifeOps running on http://localhost:3000")
);