"use client";
import { useState } from "react";
import Link from "next/link";
// import svg
import YosrICon from "../../public/yosr-icon.svg";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <nav className="bg-[#BAE6D1] shadow-lg content-center w-full px-[60px]  md:h-[80px]">
      <div className="flex flex-wrap items-center justify-between">
        {/* Left side: Home and About */}
        <div className="flex-1 flex justify-between items-center space-x-6 me-[60px]">
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium hidden md:block"
          >
            <Image src={YosrICon} alt="Yosr Icon" />
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-gray-700">
            English
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium hidden md:block"
          >
            Categories
          </Link>
        </div>

        {/* Center: Search input */}
        <div className="flex-1 mx-4 max-w-xl">
          <form
            onSubmit={handleSearch}
            className="bg-white border-2 relative flex"
          >
            <button
              type="submit"
              className="ml-2 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-black py-2 px-4 rounded-lg focus:outline-none "
            />
          </form>
        </div>

        {/* Right side: Category, Blog, and Notification */}
        <div className="flex-1  flex justify-between items-center space-x-6 ms-[60px]">
          <Link
            href="/category"
            className="text-gray-700 hover:text-blue-600 font-medium hidden md:flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            sing in
          </Link>
          <Link
            href="/blog"
            className="gap-2 text-gray-700 hover:text-blue-600 font-medium hidden md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Cart
          </Link>

          {/* Notification icon */}
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/about"
            className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            About
          </Link>
          <Link
            href="/category"
            className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            Category
          </Link>
          <Link
            href="/blog"
            className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
