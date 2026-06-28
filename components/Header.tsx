"use client";

import { Phone, Mail, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Brand", href: "/brand" },
    { label: "Categories", href: "#" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/our-services" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0b3c6b] text-white py-2 px-4 sm:px-8 text-sm flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6">
        <div className="flex items-center space-x-2">
          <Phone size={16} />
          <span>+91 9825183207</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} />
          <span>+91 9624243854</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} />
          <span>+91 9925016868</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail size={16} />
          <span>info@alqaswamarine.com</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 sm:px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Images/Logo.jpeg"
              alt="Al Qaswa Marine"
              width={540}
              height={372}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Social / Top Right */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation & Search */}
        <div className={`md:flex items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="hover:text-blue-600 transition text-[#0b3c6b]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-4 md:mt-0 relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
