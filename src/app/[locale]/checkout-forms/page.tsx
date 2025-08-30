"use client";
import { useState } from "react";
import Head from "next/head";
import Stepper from "@/componant/stepper";
import Footer from "@/componant/footer";
import Navbar from "@/componant/nav-bar";

const CheckoutForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState("doorstep");
  const [paymentOption, setPaymentOption] = useState("card");
  const [selectedTime, setSelectedTime] = useState("");
  const [downPayment, setDownPayment] = useState(0);

  // Sample cart data
  const cartItems = [
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
  ];
  const steps = [
    {
      title: "Delivery",
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Payment",
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
          />
        </svg>
      ),
    },
    {
      title: "Summary",
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
          />
        </svg>
      ),
    },
  ];
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = deliveryOption === "doorstep" ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Delivery time slots
  const timeSlots = [
    "1 month",
    "3 months",
    "6 months",
    "12 months",
    "24 months",
    "36 months",
  ];

  // Down payment options
  const downPaymentOptions = [0, 10, 20, 30, 40, 50];

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Head>
        <title>Checkout | Your Store</title>
        <meta name="description" content="Complete your purchase" />
      </Head>
      <div className="bg-white text-black">
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-8 text-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stepper with Icons */}
            <div className="flex justify-center w-full">
              <Stepper currentStep={currentStep} steps={steps} />
            </div>
            {/* Form Content */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {currentStep === 1 && (
                <div className="step-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Delivery Details
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Delivery Method
                    </h3>

                    <div className="flex flex-col  gap-4">
                      <div
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          deliveryOption === "doorstep"
                            ? "border-[#4ABD86] bg-green-50"
                            : "border-gray-200"
                        }`}
                        onClick={() => setDeliveryOption("doorstep")}
                      >
                        <div className="flex items-center">
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                              deliveryOption === "doorstep"
                                ? "border-[#4ABD86] bg-[#4ABD86]"
                                : "border-gray-300"
                            }`}
                          >
                            {deliveryOption === "doorstep" && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <h4 className="flex justify-between w-full  font-medium text-gray-900">
                            <span>Doorstep Delivery</span>
                            <span className="text-sm text-gray-900 ml-2">
                              <svg
                                className="w-6 h-6 text-gray-800 dark:text-green-500 inline-block"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                />
                              </svg>
                            </span>
                          </h4>
                        </div>
                      </div>

                      <div
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          deliveryOption === "pickup"
                            ? "border-[#4ABD86] bg-green-50"
                            : "border-gray-200"
                        }`}
                        onClick={() => setDeliveryOption("pickup")}
                      >
                        <div className="flex items-center">
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                              deliveryOption === "pickup"
                                ? "border-[rgb(74,189,134)] bg-[#4ABD86]"
                                : "border-gray-300"
                            }`}
                          >
                            {deliveryOption === "pickup" && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <h4 className="flex justify-between w-full font-medium text-gray-900">
                            <span>Store Pickup</span>
                            <span className="text-sm text-gray-500 ml-2">
                              (Free)
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Delivery Address
                    </h3>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                      placeholder="123 Main St"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                        placeholder="New York"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                        placeholder="NY"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                        placeholder="10001"
                      />
                    </div>
                  </div> */}

                    <div className=" p-4 rounded-lg border border-gray-500 mb-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        {" "}
                        address information{" "}
                      </h3>
                      <p>sasa sas asa sa sa</p>
                      <p>City: New York</p>
                      <p>State: NY</p>
                      <p>ZIP Code: 10001</p>
                    </div>
                    <div className=" p-4 rounded-lg border border-gray-500 mb-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        {" "}
                        address information{" "}
                      </h3>
                      <p>sasa sas asa sa sa</p>
                      <p>City: New York</p>
                      <p>State: NY</p>
                      <p>ZIP Code: 10001</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={nextStep}
                      className="bg-[#4ABD86] text-white py-2 px-6 rounded-md hover:bg-[#3daa75] focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:ring-offset-2 transition-colors duration-300"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="step-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Payment Information
                  </h2>

                  {/* <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Select Payment Method
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        paymentOption === "card"
                          ? "border-[#4ABD86] bg-green-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setPaymentOption("card")}
                    >
                      <div className="flex items-center">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                            paymentOption === "card"
                              ? "border-[#4ABD86] bg-[#4ABD86]"
                              : "border-gray-300"
                          }`}
                        >
                          {paymentOption === "card" && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <h4 className="font-medium text-gray-900">
                          Credit Card
                        </h4>
                      </div>
                    </div>

                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        paymentOption === "paypal"
                          ? "border-[#4ABD86] bg-green-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setPaymentOption("paypal")}
                    >
                      <div className="flex items-center">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                            paymentOption === "paypal"
                              ? "border-[#4ABD86] bg-[#4ABD86]"
                              : "border-gray-300"
                          }`}
                        >
                          {paymentOption === "paypal" && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <h4 className="font-medium text-gray-900">PayPal</h4>
                      </div>
                    </div>

                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        paymentOption === "bank"
                          ? "border-[#4ABD86] bg-green-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setPaymentOption("bank")}
                    >
                      <div className="flex items-center">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                            paymentOption === "bank"
                              ? "border-[#4ABD86] bg-[#4ABD86]"
                              : "border-gray-300"
                          }`}
                        >
                          {paymentOption === "bank" && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <h4 className="font-medium text-gray-900">
                          Bank Transfer
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {paymentOption === "card" && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Card Details
                    </h3>

                    <div className="mb-4">
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="expiryDate"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                          placeholder="MM/YY"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="cardName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )} */}

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Payment options
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {timeSlots.map((time, index) => (
                        <div
                          key={index}
                          className={`border-2 rounded-lg p-3 cursor-pointer text-center transition-colors ${
                            selectedTime === time
                              ? "border-[#4ABD86] bg-green-50"
                              : "border-gray-200"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          <span
                            className={`font-medium ${
                              selectedTime === time
                                ? "text-[#4ABD86]"
                                : "text-gray-700"
                            }`}
                          >
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Down Payment
                    </h3>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="border w-[300px] border-gray-300 rounded-md py-2 px-3  focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:border-[#4ABD86]"
                      placeholder="Enter amount"
                    />
                    {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {downPaymentOptions.map((percent, index) => (
                      <div
                        key={index}
                        className={`border-2 rounded-lg p-3 cursor-pointer text-center transition-colors ${
                          downPayment === percent
                            ? "border-[#4ABD86] bg-green-50"
                            : "border-gray-200"
                        }`}
                        onClick={() => setDownPayment(percent)}
                      >
                        <span
                          className={`font-medium ${
                            downPayment === percent
                              ? "text-[#4ABD86]"
                              : "text-gray-700"
                          }`}
                        >
                          {percent}%
                        </span>
                        <p className="text-xs text-gray-600 mt-1">
                          ${((total * percent) / 100).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div> */}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300"
                    >
                      Back
                    </button>

                    <button
                      onClick={nextStep}
                      className="bg-[#4ABD86] text-white py-2 px-6 rounded-md hover:bg-[#3daa75] focus:outline-none focus:ring-2 focus:ring-[#4ABD86] focus:ring-offset-2 transition-colors duration-300"
                    >
                      Continue to Summary
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="step-3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Order Summary
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Delivery Information
                    </h3>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-5 h-5 text-gray-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                          />
                        </svg>
                        <span className="font-medium">Delivery Method:</span>
                        <span className="ml-2 capitalize">
                          {deliveryOption}
                        </span>
                      </div>

                      {selectedTime && (
                        <div className="flex items-center mb-2">
                          <svg
                            className="w-5 h-5 text-gray-600 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-medium">Delivery Time:</span>
                          <span className="ml-2">{selectedTime}</span>
                        </div>
                      )}

                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="font-medium">Address:</span>
                        <span className="ml-2">
                          123 Main St, New York, NY 10001
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Payment Information
                    </h3>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-5 h-5 text-gray-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                        <span className="font-medium">Payment Method:</span>
                        <span className="ml-2 capitalize">{paymentOption}</span>
                      </div>

                      {downPayment > 0 && (
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-gray-600 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-medium">Down Payment:</span>
                          <span className="ml-2">
                            {downPayment}% ($
                            {((total * downPayment) / 100).toFixed(2)})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Order Items
                    </h3>

                    <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <div key={item.id} className="p-4 flex items-center">
                          <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-center object-cover"
                            />
                          </div>

                          <div className="ml-4 flex-1">
                            <h4 className="font-medium text-gray-900">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Color:{" "}
                              <span className="capitalize">{item.color}</span>,
                              Size:{" "}
                              <span className="uppercase">{item.size}</span>
                            </p>
                          </div>

                          <div className="ml-4 text-right">
                            <p className="font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="space-y-3">
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

                      {downPayment > 0 && (
                        <div className="flex justify-between border-t border-gray-200 pt-3">
                          <span className="text-gray-600">
                            Down Payment ({downPayment}%)
                          </span>
                          <span className="text-gray-900">
                            -${((total * downPayment) / 100).toFixed(2)}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between border-t border-gray-200 pt-3 text-lg font-medium">
                        <span className="text-gray-900">Total</span>
                        <span className="text-gray-900">
                          ${(total - (total * downPayment) / 100).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={prevStep}
                        className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Back
                      </button>

                      <button
                        onClick={() => alert("Order placed successfully!")}
                        className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CheckoutForm;
