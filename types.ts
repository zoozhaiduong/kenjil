export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string; // Optional video preview
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum PortfolioCategory {
  ALL = 'All',
  CHARACTER = 'Character',
  ENVIRONMENT = 'Environment',
  MOTION = 'Motion',
  PRODUCT = 'Product'
}