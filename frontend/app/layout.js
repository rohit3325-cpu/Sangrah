
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Sangrah - AI Career coach",
  description: "Your AI-powered career companion",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} `}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header className="bg-muted/50 py-12">

            </Header>
           <main  className="min-h-screen">{children}</main>
            <footer className=" bg-muted/50 py-12 ">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>© 2025 Made by Rohit raj with ❤️</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
