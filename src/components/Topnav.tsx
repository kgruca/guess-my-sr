import Link from "next/link";
import Image from "next/image";

const TopNavigation = () => (
  <header>
    <Link href="/" className="float-left">
      <Image src="/../../public/bronze.png" width={40} height={40} />
    </Link>
  </header>
);

export default TopNavigation;
