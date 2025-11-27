import { ReactNode } from "react";
import { Russo_One } from "next/font/google";
import "./style.css";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo-one",
});

export const metadata = {
  title: "Tribes 2 Map Gallery",
  description: "Tribes 2 forever.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={russoOne.variable}>
      <body>{children}</body>
    </html>
  );
}
