import { Spline_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "StudyHub - Your Academic Marketplace",
  description: "One-Stop Academic Marketplace for Projects & Notes under ₹500",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${splineSans.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}