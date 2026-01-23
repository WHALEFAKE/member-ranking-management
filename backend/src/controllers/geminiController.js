import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const getChatHistory = async (req, res) => {
  // Stateless: No history stored in DB.
  return res.json({ messages: [] });
};

export const getGeminiResponse = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }
    const text = message.trim();

    if (text.length > 1000) {
      return res.json({ error: "Message too long" });
    }

    // Prepare contents: History (from frontend) + New Message
    // Frontend sends history in Gemini format: { role, parts: [{ text }] }
    const contents = Array.isArray(history) ? [...history] : [];

    // Add the new user message
    contents.push({ role: "user", parts: [{ text }] });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents,
      config: {
        systemInstruction: `You are a helpful assistant for "GDG on Campus FPT University" Club. Provide concise and relevant answers about the club's activities, membership, events, and other related information. When you answer, only use text and not markdowns. If you don't know the answer, respond with "I'm sorry, I don't have that information at the moment."`,
        temperature: 0.6,
        thinkingConfig: {
          includeThoughts: false,
        },
      },
    });

    const replyText =
      response?.text.trim() || "I'm sorry, I don't have information...";

    return res.json({ reply: replyText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch response from Gemini AI" });
  }
};
