import { callAgent } from "./agentClient.js";
export async function planEmail(raw_text) {
  return await callAgent(process.env.AGENT_PLANNER, raw_text);
}