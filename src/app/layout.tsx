import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200"
});

export const metadata: Metadata = {
  title: "Ninja Recipes",
  description: "Recipes for Ninjas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
