import Image from "next/image";
import TopNavigation from "@/components/Topnav";

export default function Home() {
  return (
    <div
      className="bg-gradient-to-b from-cyan-800 via-blue-950 
      to-indigo-950 items-center"
    >
      <TopNavigation />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl pb-20">Guess My SR</h1>
        <Image
          src="/../public/kings.jpg"
          width={960}
          height={600}
          alt="placeholder image"
        />
        <div className="flex flex-row justify-center items-center pt-20">
          <p className="mr-3">Sign up for the immersive experience</p> |
          <p className="ml-3"> Already have an account? Log in</p>
        </div>
      </div>
    </div>
  );
}
