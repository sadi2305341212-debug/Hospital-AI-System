import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        AI Hospital Dashboard
      </h1>

      <div className="flex items-center gap-5">
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
          />
        </div>

        <FaBell size={22} className="cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={35} className="text-blue-600" />
          <span className="font-semibold">Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;