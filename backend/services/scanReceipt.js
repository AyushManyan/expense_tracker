const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


exports.scanReceipt = async function (fileBuffer, mimeType) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const base64String = fileBuffer.toString("base64");

    const prompt = `
You are an AI extracting expense data for a finance app.

Extract ONLY this JSON:
{
  "category": "housing | transportation | groceries | utilities | entertainment | food | shopping | healthcare | education | personal | travel | insurance | gifts | bills | other-expense",
  "amount": number,
  "date": "YYYY-MM-DD"
}

Rules:
- amount must be numeric only (no currency symbol)
- category must be from the allowed list
- if date not found, return null
- if not a receipt, return {}
- return ONLY JSON (no text, no markdown)
`;

    const result = await model.generateContent([
      {
        inlineData: {
          data: base64String,
          mimeType,
        },
      },
      prompt,
    ]);

    const text = result.response.text();
    const cleanedText = text.replace(/```json|```/g, "").trim();

    let data = {};
    try {
      data = JSON.parse(cleanedText);
    } catch {

      console.error("Invalid Gemini JSON:", cleanedText);
      return {};
    }

    return {
      category: data.category || "other-expense",
      amount: parseFloat(data.amount) || 0,
      date: data.date ? new Date(data.date) : null,
    };
  } catch (err) {
    console.error("Gemini Error:", err);
    throw new Error("Failed to scan receipt");
  }
}