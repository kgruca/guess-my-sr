import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/bronze.png";

const TopNavigation = () => (
  <nav
    className="flex w-full flex-row sticky top-0 flex-nowrap items-center justify-between 
    h-14"
  >
    <Link href="/" className="w-full ml-2">
      <Image src={Logo} width={50} height={50} alt="logo" />
    </Link>
    <div className="flex flex-row w-full justify-end gap-4 mr-4">
      <Link href="/about">About</Link>
      <Link href="/login">Log In</Link>
    </div>
  </nav>
);

export default TopNavigation;
