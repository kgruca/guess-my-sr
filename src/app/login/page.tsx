import Link from "next/link";

const Login = () => (
  // <h1 className="text-5xl">Login</h1>
  <div className="text-center text-neutral-100 w-full max-w-md">
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
    </form>
  </div>
);

export default Login;
