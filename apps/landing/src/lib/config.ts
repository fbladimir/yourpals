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
  moneypalUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://moneypal.yourpals.app',
  
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}
