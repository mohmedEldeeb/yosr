// components/search-filters.tsx
"use client";

import { useState } from "react";

// Sample data
const brands = [
  { id: "nike", name: "Nike" },
  { id: "adidas", name: "Adidas" },
  { id: "puma", name: "Puma" },
  { id: "reebok", name: "Reebok" },
  { id: "under-armour", name: "Under Armour" },
];

const colors = [
  { id: "red", name: "Red", value: "#EF4444" },
  { id: "blue", name: "Blue", value: "#3B82F6" },
  { id: "green", name: "Green", value: "#10B981" },
  { id: "yellow", name: "Yellow", value: "#F59E0B" },
  { id: "black", name: "Black", value: "#000000" },
  { id: "white", name: "White", value: "#FFFFFF" },
];

export default function SearchFilters() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleBrandChange = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((id) => id !== colorId)
        : [...prev, colorId]
    );
  };

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow-md h-fit">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Brand</h2>
        <button
          onClick={handleResetFilters}
          className="text-sm text-[#4ABD86] hover:underline font-semibold  hover:text-[#26c579]"
        >
          Reset All
        </button>
      </div>

      {/* Brands Filter */}
      <div className="mb-8">
        <h3 className="text-md font-medium text-gray-700 mb-3">Brands</h3>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Search brand"
            className="w-full mb-3 p-2 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#26c579]"
          />
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center">
              <input
                type="checkbox"
                id={`brand-${brand.id}`}
                checked={selectedBrands.includes(brand.id)}
                onChange={() => handleBrandChange(brand.id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor={`brand-${brand.id}`}
                className="ml-2 text-sm text-gray-700"
              >
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="text-md font-medium text-bold text-gray-700 mb-3">
          Price
        </h3>
        <div className="flex space-x-4">
          <div>
            <label
              htmlFor="min-price"
              className="block text-xs text-gray-500 mb-1"
            >
              Min
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                $
              </span>
              <input
                type="number"
                id="min-price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="pl-7 pr-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="max-price"
              className="block text-xs text-gray-500 mb-1"
            >
              Max
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                $
              </span>
              <input
                type="number"
                id="max-price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="pl-7 pr-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Colors Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-700 mb-3">Colors</h3>
        <div className="flex flex-col gap-2">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center">
              <input
                type="checkbox"
                id={`brand-${color.id}`}
                checked={selectedColors.includes(color.id)}
                onChange={() => handleColorChange(color.id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor={`brand-${color.id}`}
                className="ml-2 text-sm text-gray-700"
              >
                {color.name}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Selected: {selectedColors.length} colors
        </div>
      </div>

      <button className="w-full bg-[#4ABD86] text-white py-2 px-4 rounded-md hover:bg-[#4ABD86] transition-colors">
        Apply Filters
      </button>
    </div>
  );
}
