
export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface GoalItem {
  title: string;
  details: string;
}

export interface Partner {
  name: string;
}

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
    GEMINI_API_KEY?: string;
  }
}
