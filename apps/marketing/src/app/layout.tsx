import "./globals.css";

export const metadata = {
  title: "YourPals — Smart little helpers",
  description: "AI assistants that actually do work for your everyday life.",
  icons: {
    icon: '/yourpalsRobot.png',
    shortcut: '/yourpalsRobot.png',
    apple: '/yourpalsRobot.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white bg-hero-grad min-h-screen">
        <div className="mx-auto max-w-7xl px-6">{children}</div>
      </body>
    </html>
  );
}
