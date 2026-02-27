import { callAgent } from "./agentClient.js";
export async function classifyEmail(raw_text) {
  return await callAgent(process.env.AGENT_CLASSIFIER, raw_text);
}