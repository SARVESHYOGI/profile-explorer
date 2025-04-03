import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import { Header } from "@/components/header";
import { MapProvider } from "@/components/map-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile Explorer",
  description: "Browse through profiles and explore their locations on the map",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <MapProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
          </MapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
