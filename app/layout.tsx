import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "My Financial",
  description:
    "Projeto SaaS criado com a finalidade de controle pessoal das finanças.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <body className={`${mulish.className} dark antialiased`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
