import { callAgent } from "./agentClient.js";
export async function analyzeRisk(raw_text) {
  return await callAgent(process.env.AGENT_RISK, raw_text);
}