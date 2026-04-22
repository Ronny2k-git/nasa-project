// Function created to calculate percentage and avoid repeating logic
export function calculatePercentage(value: number, total: number) {
  if (total <= 0) return 0;

  const percentage = (value / total) * 100;

  return Math.min(100, Math.max(0, Math.round(percentage)));
}
