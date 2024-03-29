import { Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const merienda = Merienda({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Catalog",
  description: "Website  Anime Catalog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merienda.className} bg-zinc-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
