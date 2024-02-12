import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mon Portfolio",
  description: "Fabricate in Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-500 to bg-red-300">
          <div className="h-24">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh - 6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
