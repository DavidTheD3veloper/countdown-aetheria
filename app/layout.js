import "./globals.css";

export const metadata = {
  title: "Aetheria",
  description: "No description."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

