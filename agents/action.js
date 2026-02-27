import { callAgent } from "./agentClient.js";
export async function takeAction(raw_text) {
  return await callAgent(process.env.AGENT_ACTION, raw_text);
}