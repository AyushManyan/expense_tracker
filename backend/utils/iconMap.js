export const iconMap = {
  food: "🍔",
  shopping: "🛍️",
  transportation: "🚕",
  utilities: "💡",
  housing: "🏠",
  travel: "✈️",
  healthcare: "🏥",
  education: "📚",
  entertainment: "🎮",
  groceries: "🛒",
  insurance: "🧾",
  gifts: "🎁",
  bills: "💳",
  personal: "👤",
  "other-expense": "📦",
};

export function getIcon(category) {
  return iconMap[category] || "📦";
}