import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaChair,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPlus,
  FaList,
  FaUser
} from "react-icons/fa";
import { MdOutlinePayments, MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProceedToApi from "../../../hooks/useAuth";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    users: false,

  });

  const navigate = useNavigate();
  const { logout } = ProceedToApi();

  const handleLogout = async () => {
    const message = await logout();
    console.log(message);
    navigate("/");
  };

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Mobile top bar */}
      <div className="md:hidden w-full flex items-center justify-between bg-white p-4 shadow-lg fixed top-0 z-50 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Admin Panel
        </h1>
        <button
          className="text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-200"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-2xl w-72 p-6 md:block fixed md:static z-40 top-0 left-0 lg:h-[120vh] h-screen transition-all duration-300 overflow-y-auto border-r border-gray-200 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="space-y-3">
          {/* Table Management Dropdown */}
          <div className="group">
            <button
              className={`flex items-center justify-between w-full px-5 py-4 text-left bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                dropdowns.users
                  ? "from-blue-600 to-blue-700 shadow-xl"
                  : ""
              }`}
              onClick={() => toggleDropdown("users")}
            >
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-lg mr-3">
                  <FaUser className="text-lg" />
                </div>
                <span className="font-semibold">Users</span>
              </div>
              <div
                className={`transition-transform duration-300 ${
                  dropdowns.users ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown className="text-sm" />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                dropdowns.users
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 ml-4 space-y-2 border-l-2 border-blue-200 pl-4">
             
                <Link to="viewallusers">
                  <button className="flex items-center w-full px-4 py-3 text-left bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-200 cursor-pointer text-sm group shadow-sm hover:shadow-md mt-2">
                    <div className="bg-blue-500 p-1.5 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                      <FaList className="text-white text-xs" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-700">
                      Show All Users
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

     

          {/* Logout Button */}
          <div className="p1-6">
            <button
              className="flex items-center w-full px-5 py-4 text-left bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
              onClick={handleLogout}
            >
              <div className="bg-white/20 p-2 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-200">
                <IoIosLogOut className="text-lg" />
              </div>
              <span className="font-semibold">Log Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content area changes based on route */}
      <main className="flex-1 p-6 md:mt-0 mt-16">
        <div className="bg-white rounded-2xl shadow-lg min-h-full p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
