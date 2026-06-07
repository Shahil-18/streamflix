import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full bg-black/85 px-3 py-3 text-white backdrop-blur-md md:px-8">
        <div className="flex items-center justify-between gap-2">
          <Link
            to="/"
            className="shrink-0 text-lg font-black tracking-wide text-red-600 sm:text-2xl"
          >
            StreamFlix
          </Link>

          <div className="hidden items-center gap-6 text-sm text-gray-200 md:flex">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/my-list" className="hover:text-white">My List</Link>
          </div>

          <div className="flex min-w-0 items-center gap-2">
            <div className="flex w-24 items-center gap-2 rounded bg-zinc-900 px-2 py-2 sm:w-40 md:w-56">
              <FaSearch className="shrink-0 text-sm text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm || ""}
                onChange={(e) => setSearchTerm?.(e.target.value)}
                className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-gray-400 sm:text-sm"
              />
            </div>

            <FaUserCircle className="hidden text-2xl sm:block" />

            {user ? (
              <button
                onClick={handleLogout}
                className="rounded bg-red-600 px-3 py-2 text-xs font-bold hover:bg-red-700 sm:px-4 md:text-sm"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="rounded bg-white px-3 py-2 text-xs font-bold text-black hover:bg-gray-300 sm:px-4 md:text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-zinc-800 bg-black py-3 text-sm font-semibold text-white md:hidden">
        <Link to="/">🏠 Home</Link>
        <Link to="/my-list">❤️ My List</Link>
        <Link to={user ? "/my-list" : "/login"}>👤 Account</Link>
      </div>
    </>
  );
}

export default Navbar;