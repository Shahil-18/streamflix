import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl bg-zinc-900 p-8"
      >
        <h1 className="mb-6 text-4xl font-black text-red-600">StreamFlix</h1>
        <h2 className="mb-6 text-2xl font-bold">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded bg-zinc-800 p-3 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded bg-zinc-800 p-3 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full rounded bg-red-600 py-3 font-bold hover:bg-red-700">
          Login
        </button>

        <p className="mt-5 text-gray-400">
          New here?{" "}
          <Link to="/signup" className="text-white hover:underline">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;