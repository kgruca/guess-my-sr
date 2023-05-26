import Link from "next/link";
import { useState } from "react";
import { PasswordField } from "../../components/PasswordField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="text-center w-full max-w-md">
      <h2 className="text-4xl">Log into your account</h2>
      <form className="mt-8 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              type="text"
              autoComplete="none"
              required
              placeholder="username"
              className="block w-full appearance-none rounded-none rounded-tl-md border mb-2
              border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500
                focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              autoComplete="none"
              required
              placeholder="password"
              className="block w-full appearance-none rounded-none rounded-br-md border mb-2
              border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500
                focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="ml-2 flex items-center gap-1 text-sm text-slate-800">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
            />
            Remember me
          </label>
          <div className="text-sm">
            <Link
              href="/"
              className="font-medium text-indigo-500 hover:text-indigo-400"
            >
              Forgot your username or password?
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="text-md group relative flex w-full justify-center rounded-md border 
            border-transparent bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-400
            focus:outline-none focus:ring-indigo-400 focus:ring-offset-2"
        >
          Log In
        </button>
      </form>
      <p className="pt-4">
        Ready to compete?{" "}
        <Link
          href="/signup"
          className="font-medium text-indigo-500 hover:text-indigo-400"
        >
          Create an account!
        </Link>
      </p>
    </div>
  );
};

export default Login;
