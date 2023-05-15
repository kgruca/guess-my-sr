import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/bronze.png";

const TopNavigation = () => (
  <nav
    className="flex flex-row sticky top-0 flex-nowrap items-center justify-between 
    bg-slate-600 h-14"
  >
    <div className="flex w-full">
      <Link href="/" className="flex flex-row float-left ml-2">
        <Image src={Logo} width={50} height={50} alt="logo" />
      </Link>
    </div>
  </nav>
);

export default TopNavigation;
