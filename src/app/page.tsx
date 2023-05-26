import Image from "next/image";
import Link from "next/link";

const Home = () => (
  <>
    <h1 className="text-5xl pb-20">Guess My SR</h1>
    <Image
      src="/../public/kings.jpg"
      width={960}
      height={600}
      alt="placeholder image"
    />
    <div className="flex flex-row justify-center items-center pt-20">
      <p className="mr-3">Sign up for the immersive experience</p> |
      <p className="ml-3">
        {" "}
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-600 hover:text-indigo-400">
          Log in
        </Link>
      </p>
    </div>
  </>
);

export default Home;
