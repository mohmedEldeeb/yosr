"use client";
import Footer from "@/componant/footer";
import Navbar from "@/componant/nav-bar";
import SearchFilters from "@/componant/search-filters/search-filters";
import { useState } from "react";

import MPlaceholder from "./m.png"; // Placeholder image
import LPlaceholder from "./l.png"; // Placeholder image
import Image from "next/image";

// Sample product data
const products = [
  {
    id: 1,
    name: "Samsung TV 58 Inch 4k UHD Smaet LED TV",
    brand: "Samsung",
    price: 120,
    color: "Red",
    image: "/placeholder-shoes.jpg",
  },
  {
    id: 2,
    name: "Samsung TV 58 Inch 4k UHD Smart LED TV",
    brand: "Samsung",
    price: 1200,
    color: "Black",
    image: "/placeholder-tshirt.jpg",
  },
  {
    id: 3,
    name: "Samsung TV 58 Inch 4k UHD Smart LED",
    brand: "Samsung",
    price: 35,
    color: "Black",
    image: "/placeholder-shorts.jpg",
  },
  {
    id: 4,
    name: "Basketball Shoes",
    brand: "Nike",
    price: 150,
    color: "White",
    image: "/placeholder-shoes2.jpg",
  },
  {
    id: 5,
    name: "Samsung TV 58 Inch 4k UHD Smaet LED",
    brand: "Under ",
    price: 85,
    color: "Green",
    image: "/placeholder-jacket.jpg",
  },
  {
    id: 6,
    name: "Cap",
    brand: "Reebok",
    price: 25,
    color: "Red",
    image: "/placeholder-cap.jpg",
  },
];

const SearchPage = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="md:w-1/4">
            <SearchFilters />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">TV</span>
                {/* Sort Dropdown */}
                <div className="flex items-center">
                  <label
                    htmlFor="sort-by"
                    className="text-sm text-gray-600 mr-2"
                  >
                    Sort by:
                  </label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border text-gray-600 border-gray-300 rounded-md py-1 px-2 text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {/* View Mode Toggle */}
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${
                      viewMode === "grid" ? "bg-gray-200" : "bg-white"
                    }`}
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list" ? "bg-gray-200" : "bg-white"
                    }`}
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
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              } gap-6`}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden  border-1 border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className={`${viewMode === "list" ? "flex" : ""}`}>
                    <div
                      className={`${viewMode === "list" ? "w-1/3" : "h-48"} `}
                    >
                      {/* Product image placeholder */}
                      {/* <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div> */}
                      <Image
                        src={product.id % 2 === 0 ? MPlaceholder : LPlaceholder}
                        alt={product.name}
                        className="w-full h-full object-cover p-2"
                      />
                    </div>
                    <div
                      className={`p-4 ${viewMode === "list" ? "w-2/3" : ""}`}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg h-[60px] font-medium text-gray-900">
                          {product.name}
                        </h3>
                        {/* <span className="bg-[#4ABD86] text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                          {product.brand}
                        </span> */}
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        {product.color}
                      </p>
                      <div className="flex   items-center mt-2">
                        <div className="flex text-yellow-400">
                          {/* Star ratings */}
                          {/* {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))} */}
                        </div>
                        {/* <span className="text-gray-600 text-xs ml-1">(42)</span> */}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-lg font-bold text-[#4ABD86]">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-l-md"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  1
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-[#4ABD86] text-sm font-medium text-white"
                >
                  2
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-md"
                >
                  Next
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SearchPage;
