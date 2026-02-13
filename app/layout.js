import "./globals.css";

export const metadata = {
  title: "Countdown",
  description: "Server stored countdown"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
