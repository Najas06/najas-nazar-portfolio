import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Najas Nazar Portfolio",
  description:
    "Najas Nazar Portfolio | A Frontend Developer with a passion for creating visually appealing and user-friendly web applications.",
  keywords: ["Najas Nazar", "Portfolio", "Frontend Developer", "Web Developer"],
  authors: [{ name: "Najas Nazar", url: "https://www.linkedin.com/in/najasnazar/" }],
  creator: "Najas Nazar",
  openGraph: {
    title: "Najas Nazar Portfolio",
    description:
      "Najas Nazar Portfolio | A Frontend Developer with a passion for creating visually appealing and user-friendly web applications.",
    url: "https://najasnazar.com",
    siteName: "Najas Nazar Portfolio",
    images: [
      {
        url: "https://najasnazar.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Najas Nazar Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najas Nazar Portfolio",
    description:
      "Najas Nazar Portfolio | A Frontend Developer with a passion for creating visually appealing and user-friendly web applications.",
    creator: "@najasnazar",
    images: [
      {
        url: "https://najasnazar.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Najas Nazar Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

