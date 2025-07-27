import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

export const metadata = {
  title: "Nextly - Free Nextjs & TailwindCSS Landing Page Template",
  description:
    "Nextly is a free landing page template built with next.js & Tailwind CSS",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme="dark">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
