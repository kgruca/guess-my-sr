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
      <div
        className="bg-gradient-to-b from-cyan-800 via-blue-950 
      to-indigo-950 items-center"
      >
        <nav
          className="flex w-full flex-row sticky top-0 flex-nowrap items-center justify-between 
            h-14"
        >
          <Link href="/" className="w-full ml-2">
            <Image src={Logo} width={50} height={50} alt="logo" />
          </Link>
          <div className="flex flex-row w-full justify-end gap-4 mr-4">
            <Link href="/rankings">🏆 Rankings</Link>
            <Link href="/about">📖 About</Link>
            <Link href="/login">🎮 Log In</Link>
          </div>
        </nav>
        <div className="flex flex-col pt-10 items-center h-screen">
          {children}
        </div>
      </div>
    </body>
  </html>
);

export default Layout;
