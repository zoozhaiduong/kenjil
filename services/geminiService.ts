import { GoogleGenAI } from "@google/genai";

// Initialize AI only if Key is present
let ai: GoogleGenAI | null = null;
if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

const KENJIL_SYSTEM_PROMPT = `
You are the AI Assistant for "Kenjil", a professional 3D Artist and Motion Designer.
Your goal is to impress potential clients and partners who visit this portfolio website.

Here is Kenjil's profile data:
- Name: Kenjil
- Location: Vietnam (available for remote work worldwide).
- Expertise: 3D Modeling, Texturing, Lighting, Animation, and Motion Graphics.
- Software Stack: Blender (Main), Maya, ZBrush, Substance Painter, Cinema 4D, Unreal Engine 5.
- Experience: 6 years in the industry. Worked on commercials, game assets, and architectural visualization.
- Style: Minimalist, Hyper-realistic, Sci-fi, and Abstract.
- Availability: Currently open for freelance commissions and long-term contracts.
- Contact: kenjil.art@email.com

Guidelines:
1. Tone: Professional, artistic, concise, and slightly mysterious/cool.
2. Keep responses short (under 3-4 sentences).
`;

// Fallback responses for static/downloaded version (No API Key)
const FALLBACK_RESPONSES = [
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'liên hệ', 'thuê', 'mail'],
    text: "You can reach Kenjil directly at kenjil.art@email.com for commissions and inquiries."
  },
  {
    keywords: ['software', 'tool', 'stack', 'program', 'app', 'phần mềm', 'dùng gì'],
    text: "Kenjil's primary stack includes Blender, Maya, ZBrush, Substance Painter, and Unreal Engine 5."
  },
  {
    keywords: ['price', 'rate', 'cost', 'quote', 'giá', 'chi phí'],
    text: "Rates depend on the project scope and complexity. Please email your project details for a custom quote."
  },
  {
    keywords: ['experience', 'year', 'work', 'background', 'kinh nghiệm'],
    text: "Kenjil has over 6 years of experience in CGI, specializing in commercials, game assets, and architectural visualization."
  }
];

const getFallbackResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  const match = FALLBACK_RESPONSES.find(r => r.keywords.some(k => lowerMsg.includes(k)));
  
  if (match) return match.text;
  return "I am currently in static portfolio mode. Please email kenjil.art@email.com to discuss your project directly.";
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  // 1. If no API Key is provided (Downloadable/Static mode), use fallback logic
  if (!ai) {
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getFallbackResponse(message);
  }

  // 2. If API Key exists, use Gemini
  try {
    const model = "gemini-2.5-flash";
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: KENJIL_SYSTEM_PROMPT,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm currently rendering a complex scene. Please try asking again in a moment.";
  } catch (error) {
    console.warn("Gemini API unavailable, switching to fallback.", error);
    return getFallbackResponse(message);
  }
};