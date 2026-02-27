import { callAgent } from "./agentClient.js";
export async function verifyEmail(raw_text) {
  return await callAgent(process.env.AGENT_VERIFIER, raw_text);
}