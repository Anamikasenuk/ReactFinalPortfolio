import React from 'react'
import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Anamika</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-600 hover:text-gray-900 text-xl" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-600 hover:text-gray-900 text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-600 hover:text-gray-900 text-xl" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-600 hover:text-gray-900 text-xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 hover:text-gray-900 text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-600 hover:text-gray-900 text-xl" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

