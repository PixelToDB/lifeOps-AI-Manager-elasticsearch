export function calculateChaosScore(metrics) {
  const score =
    metrics.overdueBills * 20 +
    metrics.spendingSpikes * 15 +
    metrics.calendarConflicts * 10 +
    metrics.overdueTasks * 5;

  return Math.min(score, 100);
}
