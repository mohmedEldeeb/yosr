"use client";

import { useState } from "react";
import Head from "next/head";
import Footer from "@/componant/footer";
import Navbar from "@/componant/nav-bar";
import MPlaceholder from "../search/l.png"; // Placeholder image
import Image from "next/image";
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Premium T-Shirt",
      price: 29.99,
      color: "black",
      size: "m",
      quantity: 2,
      image: "/placeholder-tshirt-front.jpg",
    },
    {
      id: 2,
      name: "Summer Shorts",
      price: 24.99,
      color: "blue",
      size: "l",
      quantity: 1,
      image: "/placeholder-shorts.jpg",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      color: "white",
      size: "10",
      quantity: 1,
      image: "/placeholder-shoes.jpg",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <>
      <Head>
        <title>Shopping Cart | Your Store</title>
        <meta name="description" content="Review your shopping cart items" />
      </Head>

      <div className="bg-white text-black">
        <Navbar />
        <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8"></h1>

            {cartItems.length === 0 ? (
              <div className="bg-white  rounded-lg shadow-md p-8 text-center">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <h2 className="mt-4 text-xl font-medium text-gray-900">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-gray-500">
                  Start shopping to add items to your cart.
                </p>
                <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-8 ">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h2 className="text-lg font-medium text-gray-900">
                        Shopping Cart ( {cartItems.length} )
                      </h2>
                    </div>
                    <ul className="divide-y divide-gray-200  ">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="p-6 flex flex-col sm:flex-row  *:space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 "
                        >
                          <div className="flex-shrink-0 w-full sm:w-40 h-40 bg-gray-200 rounded-md overflow-hidden">
                            <Image
                              src={MPlaceholder}
                              alt={item.name}
                              className="w-full h-full object-center object-cover"
                            />
                          </div>

                          <div className="flex-1 ml-0 sm:ml-6 mt-4 sm:mt-0">
                            <div className="flex flex-col justify-between h-full">
                              <div>
                                <div className="flex justify-between">
                                  <h3 className="text-lg font-medium text-gray-900">
                                    {item.name}
                                  </h3>
                                  <div className="flex items-center">
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity - 1
                                        )
                                      }
                                      className="w-8 h-8 flex items-center justify-center rounded-l-md border border-gray-300 text-gray-600"
                                    >
                                      -
                                    </button>
                                    <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                                      {item.quantity}
                                    </div>
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity + 1
                                        )
                                      }
                                      className="w-8 h-8 flex items-center justify-center rounded-r-md border border-gray-300 text-gray-600"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>

                                <div className="mt-2 flex items-center space-x-4">
                                  <p className="text-sm text-gray-600">
                                    Color:{" "}
                                    <span className="capitalize">
                                      {item.color}
                                    </span>
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    Size:{" "}
                                    <span className="uppercase">
                                      {item.size}
                                    </span>
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4 flex justify-between items-center">
                                <p className="text-lg font-medium text-[#0ea74e]">
                                  EGP{(item.price * item.quantity).toFixed(2)}
                                </p>

                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="flex items-center text-sm text-red-600 hover:text-red-800"
                                >
                                  <svg
                                    className="h-5 w-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="mt-6">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Continue Shopping
                    </button>
                  </div> */}
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Order Summary
                    </h2>

                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="text-gray-900">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="text-gray-900">
                          ${shipping.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span className="text-gray-900">${tax.toFixed(2)}</span>
                      </div>

                      <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-900">
                        <span>Total</span>
                        <span className="font-bold text-[#0ea74e]">
                          ${total.toFixed(2)}
                        </span>
                      </div>

                      <div className="pt-4">
                        <button className="w-full cursor-pointer bg-[#4ABD86] text-white py-3 px-4 rounded-md hover:bg-[#0ea74e] focus:outline-none focus:ring-2 focus:ring-[#0ea74e] focus:ring-offset-2">
                          Checkout
                        </button>
                      </div>

                      {/* <div className="text-center text-sm text-gray-500 mt-4">
                        or{" "}
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          Continue Shopping
                        </button>
                      </div> */}
                    </div>
                  </div>

                  {/* <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Promo Code
                    </h3>

                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        Apply
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
