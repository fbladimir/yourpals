// Configuration for different environments
const config = {
  // Marketing site URL (where users land first)
  marketingUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://yourpals.app',
  
  // Auth domain (where all authentication happens)
  authUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://yourpals.app',
  
  // App URL (where users end up after auth)
  appUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : 'https://moneypal.yourpals.app',
}

export { config }
