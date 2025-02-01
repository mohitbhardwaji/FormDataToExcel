import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white p-2 fixed w-full top-0 left-0 z-50 shadow-md flex justify-between items-center">
        <div className="logo">
          <a href="#">
            <img src="./src/assets/rklogo.png" alt="Logo" className="w-18" />
          </a>
        </div>
        {/* Hamburger Icon */}
        <div
          className="menu-toggle text-3xl cursor-pointer text-black"
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>
      </nav>

      {/* Sidebar Navigation */}
      {/* <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out md:hidden`}
      > */}
        {/* <div className="flex justify-between items-center p-4">
          <div className="logo">
            <a href="#">
              <img src="./src/assets/rklogo.png" alt="Logo" className="w-28" />
            </a>
          </div>
          <button
            className="text-3xl"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div> */}

        {/* Sidebar Links */}
        {/* <ul className="px-4">
          <li>
            <a href="../../index.html" className="block py-2">Home</a>
          </li>
          <li className="relative group">
            <a href="#service" className="block py-2">Services</a>
            <ul className="absolute left-full top-0 bg-gray-700 hidden group-hover:block w-56">
              <li><a href="./src/html/it.html" className="block px-4 py-2">IT Services</a></li>
              <li><a href="./src/html/electrical.html" className="block px-4 py-2">Electrical Services</a></li>
              <li><a href="./src/html/cctv.html" className="block px-4 py-2">CCTV Camera</a></li>
              <li><a href="./src/html/fiber.html" className="block px-4 py-2">Fiber Services</a></li>
              <li><a href="./src/html/network.html" className="block px-4 py-2">Network Services</a></li>
              <li><a href="./src/html/project.html" className="block px-4 py-2">Project Management</a></li>
              <li><a href="./src/html/telecom.html" className="block px-4 py-2">Telecom Services</a></li>
              <li><a href="./src/html/consultancy.html" className="block px-4 py-2">Consultancy Services</a></li>
            </ul>
          </li>
          <li>
            <a href="#about" className="block py-2">About</a>
          </li>
          <li>
            <a href="#contact" className="block py-2">Contact</a>
          </li>
        </ul>*/}
      {/* </div>  */}

      {/* Overlay */}
      <div
        className={`${
          isSidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ease-in-out md:hidden`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Navbar;
