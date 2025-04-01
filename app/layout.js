import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";



const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Accrue",
  description: "let flow accumulate",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
        <Header>Header</Header>
          <main className="min-h-screen">
           <Toaster richColors />

            {children}</main>




          <footer className="bg-blue-100 py-13">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>by Shaurya</p>
            </div >
          </footer>
          </body>
      </html>
    </ClerkProvider>

  );
}
