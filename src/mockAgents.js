export async function mockClassifier(raw) {
  return {
    category: "bill",
    amount: 2450,
    due_date: "2026-02-27",
    merchant: "Electricity Board",
    urgency_score: 0.9
  };
}

export async function mockRisk(data) {
  return {
    risk_type: "bill_overdue",
    severity: "high",
    confidence: 0.9
  };
}

export async function mockPlanner() {
  return {
    action: "create_reminder",
    recommended_time: "2026-02-26T18:00:00Z",
    message: "Pay Electricity Board bill."
  };
}

export async function mockVerifier() {
  return {
    status: "approved",
    reason: "All checks passed."
  };
}

export async function mockAction() {
  return {
    execution_type: "calendar",
    payload: {
      title: "Bill Reminder",
      time: "2026-02-26T18:00:00Z",
      description: "Pay Electricity Board bill."
    },
    log_required: true
  };
}