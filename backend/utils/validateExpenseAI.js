export const allowedCategories = [
  "housing", "transportation", "groceries", "utilities", "entertainment",
  "food", "shopping", "healthcare", "education", "personal", "travel",
  "insurance", "gifts", "bills", "other-expense"
];

export function validateAIExpense(data) {
  if (!data) return { valid: false, message: "AI returned empty data" };

  // amount validation
  if (!data.amount || isNaN(data.amount) || data.amount <= 0) {
    return { valid: false, message: "Invalid or missing amount" };
  }

  // date validation
  if (!data.date || isNaN(new Date(data.date).getTime())) {
    return { valid: false, message: "Invalid or missing date" };
  }

  // category validation
  if (!data.category || !allowedCategories.includes(data.category)) {
    return { valid: false, message: "Invalid or missing category" };
  }

  return { valid: true };
}