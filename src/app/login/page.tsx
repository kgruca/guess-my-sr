import Link from "next/link";

const Login = () => (
  // <h1 className="text-5xl">Login</h1>
  <div className="text-center w-full max-w-md">
    <h2 className="text-4xl">Log into your account</h2>
    <form className="mt-8 space-y-6">
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <input
            type="email"
            autoComplete="none"
            required
            placeholder="Email address"
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
            placeholder="Password"
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
      Don&apos;t have an account?{" "}
      <Link
        href="/signup"
        className="font-medium text-indigo-500 hover:text-indigo-400"
      >
        Sign Up!
      </Link>
    </p>
  </div>
);

export default Login;
