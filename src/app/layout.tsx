import "./globals.css";

export const metadata = {
  title: "Best News",
  description: "Powered by NewsAPI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}