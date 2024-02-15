import { Inter } from "next/font/google";
import "./globals.css";
import BreadCrumbs from "@/Components/breadcrumbs";
import TransitionProvider from "@/Components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mon Portfolio",
  description: "Fabricate in Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
