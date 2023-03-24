import { Header } from "@/components/Header";
import CountryProvider from "@/components/CountrySelect/CountryProvider/CountryProvider";
import SearchProvider from "@/components/SearchBar/SearchProvider/SearchProvider";
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
      <body className="max-w-7xl mx-auto">
        <CountryProvider>
          <SearchProvider>
            <Header />
            {children}
          </SearchProvider>
        </CountryProvider>
      </body>
    </html>
  );
}
