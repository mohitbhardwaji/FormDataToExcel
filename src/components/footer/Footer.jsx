import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   // Check if the user prefers dark mode from the system settings
  //   const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   setDarkMode(prefersDarkMode);

  //   // Apply dark mode class to the document element
  //   if (prefersDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">About Us</h4>
            <p>
              Delivering exceptional services with innovation and dedication.
              Stay connected with us for updates.
            </p>
            <div className="flex justify-center md:justify-start mt-3">
              <a
                href="https://www.linkedin.com/company/r-k-global-communication/"
                className="text-blue-500 hover:text-blue-700 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p>Email: <a href="mailto:admin@rkglobalcomm.com" className="hover:text-blue-500">admin@rkglobalcomm.com</a></p>
            <p>Phone: <a href="tel:+917000192627" className="hover:text-blue-500">+91-7000192627</a></p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 py-4 border-t border-gray-300 dark:border-gray-700">
        <p>&copy; 2024 RK Global Communication. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
