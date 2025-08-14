// Configuration for different environments
export const config = {
  // Marketing site URL
  marketingUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://yourpals.app',
  
  // App base URL
  appUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://moneypal.yourpals.app',
  
  // MoneyPal URL (separate app)
  moneypalUrl: process.env.NODE_ENV === 'production' 
    ? 'https://moneypal.yourpals.app' 
    : 'http://localhost:4001',
  aiPlatformUrl: process.env.NODE_ENV === 'production' 
    ? 'https://ai.yourpals.app' 
    : 'http://localhost:4000',
  
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}
