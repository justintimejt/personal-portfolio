import type { Metadata } from "next";
import { EB_Garamond, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });
const lora = Lora({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lora"
});

// In some dev environments Node starts with a stubbed global localStorage (no getItem).
// Provide a minimal in-memory implementation to avoid runtime crashes during SSR.
if (
  typeof globalThis.localStorage === "object" &&
  typeof globalThis.localStorage.getItem !== "function"
) {
  const store = new Map<string, string>();
  globalThis.localStorage = {
    getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
    setItem: (key: string, value: string) => {
      store.set(key, String(value));
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => {
      store.clear();
    },
    key: (index: number) => Array.from(store.keys())[index] ?? null,
    get length() {
      return store.size;
    },
  } as Storage;
}

export const metadata: Metadata = {
  title: "Justin Chow",
  description: "Personal website of Justin Chow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.className} ${lora.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
