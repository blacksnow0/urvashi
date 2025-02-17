"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/icons/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // List of links
  const links = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Amenities", path: "/amenities" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsScrolled(true); // Change background when scrolled 50% down
      } else {
        setIsScrolled(false); // Revert background when near the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-50 
      transition-all duration-300 ease-in-out
      ${
        isScrolled
          ? "bg-secondary shadow-lg md:bg-transparent"
          : "bg-transparent"
      }`}
    >
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-10 py-4">
        <Image src={logo} alt="Hotel Logo" width={50} height={50} />

        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block mt-4 relative rounded-full bg-white px-8 py-4 shadow-lg border border-gray-200">
        <ul className="flex justify-center gap-14 text-lg font-semibold">
          {links.map((link) => (
            <li key={link.path} className="relative">
              <Link
                href={link.path}
                className={`relative z-10 px-10 py-2 text-sm font-mono flex items-center gap-x-2 
                  transition-all duration-300 ${
                    pathname === link.path ? "text-blue-600" : "text-secondary"
                  }`}
              >
                {link.name}
                {pathname === link.path && (
                  <FaCheckCircle className="text-blue-600 text-sm" />
                )}
              </Link>

              {pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-[-4px] bg-accent rounded-full shadow-lg shadow-accent/30"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-0 top-20 w-full bg-gray-100 p-6  shadow-lg space-y-4 text-lg font-medium"
          >
            {links.map((link) => (
              <Link key={link.path} href={link.path} passHref>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-center cursor-pointer hover:text-blue-600 transition-all"
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
