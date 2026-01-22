import "./globals.css";
import { Outfit, Sora } from "next/font/google";

// Outfit - Modern geometric sans-serif for headings
// Clean, distinctive, and professional
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Sora - Contemporary, refined sans-serif for body text
// Excellent readability with a modern feel
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Thanh Dat Tran | Backend Engineer",
  description:
    "Passionate backend developer crafting scalable systems, with expertise in full-stack and mobile development. Building the future, one line at a time.",
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Node.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Thanh Dat Tran" }],
  openGraph: {
    title: "Thanh Dat Tran | Backend Engineer",
    description:
      "Passionate backend developer crafting scalable systems, with expertise in full-stack and mobile development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${sora.variable}`}>
      <body
        className="font-sora antialiased"
        style={{ fontFamily: "var(--font-sora), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
