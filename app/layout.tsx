import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/themeProvider";
import { Navbar } from "@/components/sections/navbar";

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

export const metadata: Metadata = {
  title: "Codlio || Coding Portfolio",
  description: "Codlio is a coding portfolio platform where user can see their all coding profile and analyse their performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen">
            {/* Navbar (Fixed at the top) */}
            <div className="fixed w-full top-0 z-50">
              <Navbar />
            </div>

            {/* <div className="flex h-full pt-10">
              {/* Sidebar (Fixed on the left) */}
     

              {/* Main content area */}
              <div className="flex-1 overflow-auto">
                <main className="p-2">
                  {children} {/* Dynamic page content */}
                </main>
              </div>
            </div>
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
