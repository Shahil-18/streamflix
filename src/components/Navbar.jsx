import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
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
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-black/70 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-black tracking-wide text-red-600">
          StreamFlix
        </Link>

        <ul className="hidden gap-6 text-sm text-gray-200 md:flex">
          <li><Link to="/">Home</Link></li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li><Link to="/my-list">My List</Link></li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded bg-zinc-900 px-3 py-2">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm || ""}
            onChange={(e) => setSearchTerm?.(e.target.value)}
            className="w-28 bg-transparent text-sm outline-none sm:w-44"
          />
        </div>

        <FaBell className="hidden text-xl sm:block" />
        <FaUserCircle className="text-2xl" />

        {user ? (
          <button
            onClick={handleLogout}
            className="rounded bg-red-600 px-4 py-2 text-sm font-bold hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="rounded bg-white px-4 py-2 text-sm font-bold text-black hover:bg-gray-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;