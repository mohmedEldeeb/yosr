"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/componant/nav-bar";
import Footer from "@/componant/footer";
import P1 from "./p1.png";
import Image from "next/image";

const SpecificationsItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex justify-between h-[60px] items-center text-1xl py-2 border-y border-gray-200">
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-900 font-medium">{value}</span>
  </div>
);

const ReviewsItem = ({
  username,
  rating,
  comment,
}: {
  username: string;
  rating: number;
  comment: string;
}) => (
  <div className="border-b border-gray-200 py-4">
    <div className="flex items-center mb-2">
      <span className="font-semibold text-gray-800 mr-2">{username}</span>
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-current" : "stroke-current"
            }`}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </div>
    <p className="text-gray-700">{comment}</p>
  </div>
);

const ProductOverview = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("m");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Classic Premium T-Shirt",
    price: 29.99,
    description:
      "Our premium t-shirt is made from 100% organic cotton for maximum comfort. Features a classic fit with ribbed neckline and double-stitched sleeves for durability.",
    colors: [
      { name: "black", value: "bg-gray-900" },
      { name: "white", value: "bg-white border border-gray-200" },
      { name: "blue", value: "bg-blue-500" },
      { name: "green", value: "bg-green-500" },
    ],
    sizes: ["s", "m", "l", "xl"],
    images: [
      "/placeholder-tshirt-front.jpg",
      "/placeholder-tshirt-back.jpg",
      "/placeholder-tshirt-side.jpg",
      "/placeholder-tshirt-detail.jpg",
    ],
    features: [
      "100% organic cotton",
      "Double-stitched sleeves",
      "Ribbed neckline",
      "Eco-friendly production",
      "Machine washable",
    ],
    rating: 4.7,
    reviews: 142,
  };

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="bg-white text-black">
        {" "}
        <Head>
          <title>{product.name} | Product Overview</title>
          <meta name="description" content={product.description} />
        </Head>
        <Navbar />
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              {/* Product Images */}
              <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                <div className=" top-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                    <Image
                      src={P1}
                      alt={product.name}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  {/* <div className="flex space-x-4 overflow-x-auto pb-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-24 h-24 bg-white rounded-md overflow-hidden border-2 ${
                          selectedImage === index
                            ? "border-blue-500"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 px-4">
                <div className=" rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  {/* review and rating */}
                  {/* <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-current"
                              : "stroke-current"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div> */}
                  <div className="flex items-center mb-4 text-gray-400">
                    <span>SKU: 1TSM58U8000FL007</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#4ABD86]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* <p className="text-gray-700 mb-6">{product.description}</p> */}

                  {/* Monthly installment options as field select and options */}
                  <div className="mb-6">
                    <label
                      htmlFor="installment"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Choose Installment Plan
                    </label>
                    <select
                      id="installment"
                      name="installment"
                      className="block w-full  pl-3 pr-[40px] text-black h-[60px]  py-2 text-1xl border-[1px] border-[#4ABD86] focus:outline-none focus:ring-[#4ABD86] focus:border-[#4ABD86]  rounded-md"
                      defaultValue="3-months"
                    >
                      <option value="3-months">3 Months - $10.00/month</option>
                      <option value="6-months">6 Months - $5.00/month</option>
                      <option value="12-months">12 Months - $2.50/month</option>
                    </select>
                  </div>

                  {/* Size Selection */}
                  {/* <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Size
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-12 h-10 flex items-center justify-center rounded-md border ${
                            selectedSize === size
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-300 text-gray-700"
                          }`}
                        >
                          {size.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div> */}

                  {/* Quantity Selector */}
                  {/* <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      Quantity
                    </h3>
                    <div className="flex items-center">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-l-md border border-gray-300 text-gray-600"
                      >
                        -
                      </button>
                      <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
                        {quantity}
                      </div>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center rounded-r-md border border-gray-300 text-gray-600"
                      >
                        +
                      </button>
                    </div>
                  </div> */}

                  {/* Add to Cart Button */}
                  <button className="w-full h-[60px] text-2xl flex items-center justify-center gap-2 bg-[#4ABD86] text-white py-3 px-4 rounded-md hover:bg-[#3DAF76] focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:ring-offset-2 mb-4">
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
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10  p-6 rounded-lg shadow-md">
              {/* About product details */}
              <h3 className="text-2xl font-semibold mb-4">About product</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores enim sint, similique soluta rem optio. Dolorem totam
                itaque a cum? Mollitia explicabo eligendi saepe iste veniam enim
                odit! Quos, mollitia.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10 p-6 border-y border-gray-200 ">
              <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
              <div className="flex  gap-5">
                <Image
                  className="mb-4"
                  src={P1}
                  alt="specs"
                  width={70}
                  height={70}
                />
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Asperiores enim sint, similique soluta rem optio. Dolorem
                  </p>
                </div>
              </div>
            </div>

            <SpecificationsItem label="Material" value="100% Organic Cotton" />
            <SpecificationsItem label="Fit" value="Classic Fit" />
            <SpecificationsItem label="Neckline" value="Ribbed Crew Neck" />
            <SpecificationsItem label="Material" value="100% Organic Cotton" />
            <SpecificationsItem label="Fit" value="Classic Fit" />
            <SpecificationsItem label="Neckline" value="Ribbed Crew Neck" />
            <SpecificationsItem
              label="Sleeves"
              value="Double-Stitched Short Sleeves"
            />
            <SpecificationsItem
              label="Care Instructions"
              value="Machine wash cold, tumble dry low"
            />
          </div>

          {/* reviews */}
          <div className="mt-20 p-6 border-y border-gray-200 ">
            <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
            <p>No reviews yet. Be the first to review this product!</p>

            {/* {[
              {
                username: "JaneDoe",
                rating: 5,
                comment: "Great quality and fit!",
              },
              {
                username: "JohnSmith",
                rating: 4,
                comment: "Comfortable but a bit pricey.",
              },
              {
                username: "AliceW",
                rating: 5,
                comment: "Love the organic material!",
              },
            ].map((review, index) => (
              <ReviewsItem
                key={index}
                username={review.username}
                rating={review.rating}
                comment={review.comment}
              />
            ))} */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductOverview;
