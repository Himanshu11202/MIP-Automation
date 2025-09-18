import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SocialButtons from "@/components/SocialButtons";

// Load the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose your weights
  variable: "--font-poppins", // custom CSS variable
  display: "swap",
});

export const metadata = {
  title: "Mip Automation",
  description: "Mip automation provides you services into hardware",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} dark`}
    >
      <body data-theme="dark" className="scroll-smooth bg-neutral-900">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <SocialButtons />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
