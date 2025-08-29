import UIcon from "./y.svg";
import Image from "next/image";
import FIcon from "./f.svg";
import IIcon from "./ig.svg";
import GoogleIcon from "./google-logo.svg";
import AppleStore from "./app-store.svg";

const Footer = () => {
  return (
    <footer className="bg-[#4ABD86] px-[60px] py-4">
      <div className="container flex  ">
        <div className=" flex flex-1 justify-start ">
          <div className="flex flex-1 flex-col  justify-start space-x-4 mb-2">
            <h3 className="text-white text-2xl font-bold mb-3">Trending now</h3>
            <a
              href="#"
              className="text-[#BAE6D1] hover:underline text-xl mb-[20px] font-bold"
            >
              Electronics
            </a>
            <a
              href="#"
              className="text-[#BAE6D1] hover:underline text-xl mb-[20px] font-bold"
            >
              Fashion
            </a>
            <a
              href="#"
              className="text-[#BAE6D1] hover:underline text-xl mb-[20px] font-bold"
            >
              Home & Garden
            </a>
            <a
              href="#"
              className="text-[#BAE6D1] hover:underline text-xl mb-[20px] font-bold"
            >
              Sports
            </a>
          </div>
          <div className="flex flex-1 flex-col justify-start space-x-4">
            <h3 className="text-white text-2xl font-bold mb-3">
              Terms & conditions
            </h3>
            <a
              href="#"
              className="text-[#BAE6D1] hover:underline text-xl mb-[20px] font-bold"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[#BAE6D1] hover:underline text-xl mb-[20px] font-bold"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-1 ">
          <div className="flex w-full flex-col  ">
            <div className="flex w-full my-4 justify-center space-x-4">
              <a href="#" className="text-[#BAE6D1] hover:underline">
                <Image
                  src={FIcon}
                  alt="Facebook Icon"
                  className="h-6 w-6 inline-block ml-1"
                />
              </a>
              <a href="#" className="text-[#BAE6D1] hover:underline">
                <Image
                  src={UIcon}
                  alt="tv Icon"
                  className="h-6 w-6 inline-block ml-1"
                />
              </a>
              <a href="#" className="text-[#BAE6D1] hover:underline">
                <Image
                  src={IIcon}
                  alt="tv Icon"
                  className="h-6 w-6 inline-block ml-1"
                />
              </a>
            </div>
            <div className="flex w-full justify-center space-x-4">
              <a href="#" className="text-[#BAE6D1] hover:underline">
                <Image
                  src={GoogleIcon}
                  alt="Google Icon"
                  className="h-24 w-24 inline-block ml-1"
                />
              </a>
              <a href="#" className="text-[#BAE6D1] hover:underline">
                <Image
                  src={AppleStore}
                  alt="Apple Store Icon"
                  className="h-24 w-24 inline-block ml-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
