import "./globals.css";

export const metadata = {
  title: "Aetheria",
  description: "Countdown to Aetheria release."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

