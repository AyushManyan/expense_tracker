export const iconMap = {
  food: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f354.png", // 🍔
  shopping: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f6cd.png", // 🛍️
  transportation: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f695.png", // 🚕
  utilities: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4a1.png", // 💡
  housing: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3e0.png", // 🏠
  travel: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2708.png", // ✈️
  healthcare: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3e5.png", // 🏥
  education: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4da.png", // 📚
  entertainment: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3ae.png", // 🎮
  groceries: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f6d2.png", // 🛒
  insurance: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f9fe.png", // 🧾
  gifts: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f381.png", // 🎁
  bills: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4b3.png", // 💳
  personal: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f464.png", // 👤
  "other-expense": "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e6.png", // 📦
};

export function getIcon(category) {
  return iconMap[category] || iconMap["other-expense"];
}
