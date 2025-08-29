import Image from "next/image";
import TVIcon from "./icons/tv 5.svg";
import TVIcon1 from "./icons/mobile 5.svg";
import TVIcon2 from "./icons/Vector.svg";

const CategoriesIcons = () => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-4 my-[40px] ">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="w-24 h-24   flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-24 h-18 mb-2 p-[20px] border-2  border-[#4ABD86]  flex items-center justify-center">
            <Image
              color="black"
              src={
                index % 2 === 0 ? TVIcon : index % 3 === 1 ? TVIcon1 : TVIcon2
              }
              alt="tv Icon"
              className="w-12 h-[auto] text-black m-4"
            />
            {/* <TVIcon /> */}
          </div>
          <span className="text-sm text-gray-700">Category {index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesIcons;
