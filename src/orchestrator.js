import { classifyEmail } from "./agents/classifier.js";
import { analyzeRisk } from "./agents/riskAnalyzer.js";
import { planAction } from "./agents/planner.js";
import { verifyAction } from "./agents/verifier.js";
import { executeAction } from "./agents/action.js";
import { esClient } from "./elastic/client.js";

export async function processEmail(raw_text) {

  const classified = await classifyEmail(raw_text);

  await esClient.index({
    index: "events-index",
    document: {
      "@timestamp": new Date().toISOString(),
      ...classified,
      source: "email"
    }
  });

  const risk = await analyzeRisk(classified);
  const planned = await planAction({ ...risk, event: classified });

  const verified = await verifyAction({
    ...risk,
    planned_action: planned,
    user_override: false,
    existing_actions: []
  });

  if (verified.status !== "approved") {
    return verified;
  }

  const execution = await executeAction({
    status: "approved",
    planned_action: planned
  });

  await esClient.index({
    index: "action-history-index",
    document: {
      "@timestamp": new Date().toISOString(),
      action: planned.action,
      execution_type: execution.execution_type,
      status: "executed"
    }
  });

  return execution;
}