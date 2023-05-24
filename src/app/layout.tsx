import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/bronze.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guess My SR",
  description: "Gues my SR!",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <nav
        className="flex w-full flex-row sticky top-0 flex-nowrap items-center justify-between 
            h-14 bg-gradient-to-b from-cyan-700 to-cyan-800"
      >
        <Link href="/" className="w-full ml-2">
          <Image src={Logo} width={50} height={50} alt="logo" />
        </Link>
        <div className="flex flex-row w-full justify-end gap-4 mr-4">
          <Link href="/leaderboard">🏆 Leaderboard</Link>
          <Link href="/about">📖 About</Link>
          <Link href="/login">🎮 Log In</Link>
        </div>
      </nav>
      {children}
    </body>
  </html>
);

export default Layout;
