import "@assets/styles/globals.css";
import Container from "@components/organisms/Container";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Home | Batch 8",
    template: "%s | Batch 8",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main
          className={`dark:text-white dark:bg-slate-900 ${inter.className}`}
        >
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
