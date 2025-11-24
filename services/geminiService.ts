
// --- OFFLINE MODE SERVICE ---
// No external APIs, no process.env, no crashes.
// This runs 100% in the browser.

interface FallbackRule {
  keywords: string[];
  text: string;
}

const FALLBACK_RESPONSES: FallbackRule[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'chào', 'xin chào', 'start', 'bắt đầu'],
    text: "Hello! I am Kenjil's automated portfolio assistant. I'm currently running in offline mode. How can I help you?"
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
  return "Thanks for your message. Since I am an automated responder, I didn't quite catch that. Please ask about my 'Services', 'Software', or 'Contact' info.";
};

// Simplified function signature compatible with the UI
export const sendMessageToGemini = async (
  message: string,
  history: any[] 
): Promise<string> => {
  // Simulate a small "typing" delay for better UX
  await new Promise(resolve => setTimeout(resolve, 800));

  // Purely offline logic
  return getFallbackResponse(message);
};
