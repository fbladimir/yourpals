// Configuration for different environments
export const config = {
  // MoneyPal app URL
  moneypalUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001/dashboard' 
    : 'https://moneypal.yourpals.app/dashboard',
  
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}
