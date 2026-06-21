import { Yomogi } from "next/font/google";
import "./globals.css";

const yomogi = Yomogi({
  weight: "400",
  preload: false,
  variable: "--font-yomogi",
  display: "swap",
});

export const metadata = {
  title: "KAWABIT | 学びとITの相談ナビ",
  description:
    "カワビットは、豊橋・豊川・田原エリアの家庭教師、学習相談、パソコン修理、データ復旧へつながる案内サイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={yomogi.variable}>{children}</body>
    </html>
  );
}
