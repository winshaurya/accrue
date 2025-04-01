import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "accrue", // Unique app ID
  name: "Accrue",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, 
    
    // Exponential backoff delay
    
    maxAttempts: 2,
  }),
});
