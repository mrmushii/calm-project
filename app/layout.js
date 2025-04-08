import { Inter,Roboto_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interMono = Roboto_Mono({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calm-clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${interMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
