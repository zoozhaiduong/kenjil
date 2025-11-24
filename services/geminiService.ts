import { GoogleGenAI } from "@google/genai";

// Safe way to get API Key if injected by build tools, otherwise undefined.
// This prevents "ReferenceError: process is not defined" in browser environments (GitHub Pages, etc.)
const getApiKey = (): string | undefined => {
  try {
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      // @ts-ignore
      return process.env.API_KEY;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
};

const API_KEY = getApiKey();
let ai: GoogleGenAI | null = null;

// Only initialize Gemini if a key is securely present
if (API_KEY) {
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } catch (error) {
    console.warn("Gemini API initialization failed, switching to offline mode.");
  }
}

const KENJIL_SYSTEM_PROMPT = `
You are the AI Assistant for "Kenjil", a professional 3D Artist and Motion Designer.
Your goal is to impress potential clients and partners who visit this portfolio website.
Keep responses short, professional, and artistic.
`;

// --- OFFLINE / FALLBACK LOGIC ---
// This ensures the site works perfectly on GitHub Pages without any backend.

interface FallbackRule {
  keywords: string[];
  text: string;
}

const FALLBACK_RESPONSES: FallbackRule[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'chào', 'xin chào', 'start'],
    text: "Greetings. I am Kenjil's automated assistant. Feel free to ask about my work, software stack, or how to get in touch."
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'liên hệ', 'thuê', 'mail', 'booking', 'book'],
    text: "You can reach Kenjil directly via email at kenjil.art@email.com for commissions and inquiries."
  },
  {
    keywords: ['software', 'tool', 'stack', 'program', 'app', 'phần mềm', 'dùng gì', 'blender'],
    text: "My primary arsenal includes Blender (Main), Maya, ZBrush, Substance Painter, and Unreal Engine 5 for real-time rendering."
  },
  {
    keywords: ['price', 'rate', 'cost', 'quote', 'giá', 'chi phí', 'money', 'budget'],
    text: "Rates depend on project scope, complexity, and timeline. Please email your project brief for a custom quote."
  },
  {
    keywords: ['experience', 'year', 'work', 'background', 'kinh nghiệm', 'làm lâu chưa'],
    text: "I have over 6 years of experience in the CGI industry, specializing in commercials, game assets, and architectural visualization."
  },
  {
    keywords: ['location', 'where', 'country', 'ở đâu', 'nước nào'],
    text: "I am based in Vietnam but available for remote work with clients worldwide."
  },
  {
    keywords: ['service', 'do', 'offer', 'làm gì', 'dịch vụ'],
    text: "I specialize in 3D Modeling, Texturing, Lighting, Animation, and Motion Graphics."
  }
];

const getFallbackResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  
  // Find the first rule where at least one keyword matches the message
  const match = FALLBACK_RESPONSES.find(rule => 
    rule.keywords.some(keyword => lowerMsg.includes(keyword))
  );
  
  if (match) return match.text;
  
  // Default catch-all response
  return "I am currently operating in offline mode. Please contact me at kenjil.art@email.com for specific inquiries, or ask about my software stack and experience.";
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  // Simulate a small "thinking" delay for realism
  await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 800));

  // 1. If no AI instance (Offline / GitHub Pages mode), use fallback
  if (!ai) {
    return getFallbackResponse(message);
  }

  // 2. Try using Gemini API
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
    return result.text || getFallbackResponse(message);
  } catch (error) {
    console.warn("Gemini API error, using fallback.", error);
    return getFallbackResponse(message);
  }
};