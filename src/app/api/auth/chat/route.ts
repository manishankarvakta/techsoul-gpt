// pages/api/chat.js
import { Ollama } from 'ollama';

const ollama = new Ollama({ host: "https://ollama.tcm-bd.com" });

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { message } = req.body; // Assuming you're sending { message: "your message" }
      const response = await ollama.chat({
        model: "llama3.2:1b",
        messages: [{ role: "user", content: message }],
      });

      if (response.done) {
        return res.status(200).json({ message: response.message.content });
      } else {
        return res.status(400).json({ error: "Incomplete response" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}