import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function callAgent(endpoint, payload) {
  const response = await axios.post(
    endpoint,
    { messages: [{ role: "user", content: JSON.stringify(payload) }] },
    {
      headers: {
        Authorization: `ApiKey ${process.env.ELASTIC_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return JSON.parse(response.data.choices[0].message.content);
}