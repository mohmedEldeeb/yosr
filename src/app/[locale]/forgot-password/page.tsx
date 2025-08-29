import React from "react";

const ForgetPasswordPage = () => {
  return (
    <div className="min-h-[100%] bg-gray-100">
      {/* Sign-in form goes here */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Forgot your password?
        </h1>
        <p className="text-sm text-gray-600">
          Don`t worry, happens to the best of us.
        </p>
        <form className="mt-6 w-full max-w-md">
          <div className="mb-5">
            {/* <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label> */}
            <input
              type="Name"
              id="Name"
              className="mt-1 h-[60px] text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Name"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[60px]  bg-[#4ABD86] text-white py-2 px-4 rounded-md hover:bg-[#26c579] focus:outline-none focus:ring-2 focus:ring-[#26c579] focus:ring-offset-2"
          >
            Send code
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
