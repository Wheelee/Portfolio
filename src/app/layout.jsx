import { Inter } from "next/font/google";
import "./globals.css";
import BreadCrumbs from "@/Components/breadcrumbs";
import TransitionProvider from "@/Components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Fabricate in Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className+" bg-gradient-to-b from-blue-50 to bg-red-100 bg-no-repeat"}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
