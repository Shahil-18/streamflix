import { Link } from "react-router-dom";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-black/70 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-black tracking-wide text-red-600">StreamFlix</h1>

        <ul className="hidden gap-6 text-sm text-gray-200 md:flex">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>
  <Link to="/my-list" className="hover:text-white">
    My List
  </Link>
</li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded bg-zinc-900 px-3 py-2">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-28 bg-transparent text-sm outline-none sm:w-44"
          />
        </div>

        <FaBell className="hidden text-xl sm:block" />
        <FaUserCircle className="text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;