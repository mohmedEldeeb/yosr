import Image from "next/image";
import MobileImg from "../catgerories-slider/mobile.png";
import TapImg from "../catgerories-slider/tap.png";

const ItemsChip = ({ title }: { title: string }) => {
  return (
    <div className="inline-block  text-[#4ABD86] border border-[#585b59] rounded-[5px] text-md px-3 py-1  mr-2 mb-2 cursor-pointer hover:bg-[#4ABD86] hover:text-white duration-300 transition">
      {title}
    </div>
  );
};
const ItemChipsContainer = () => {
  return (
    <>
      <div className="p-4 rounded-lg ">
        <h2 className="text-2xl text-black font-600 mb-8">TOP selling</h2>
        <div className="flex flex-wrap">
          <ItemsChip title="Electronics" />
          <ItemsChip title="Fashion" />
          <ItemsChip title="Home & Garden" />
          <ItemsChip title="Health & Beauty" />
          <ItemsChip title="Sports" />
          <ItemsChip title="Toys" />
          <ItemsChip title="TV" />
          <ItemsChip title="Mobiles" />
          <ItemsChip title="Laptops" />
          <ItemsChip title="Cameras" />
          <ItemsChip title="Watches" />
          <ItemsChip title="Shoes" />
          <ItemsChip title="Bags" />
          <ItemsChip title="Jewelry" />
        </div>
      </div>
      <div className="p-4 rounded-lg flex  flex-nowrap  gap-4 overflow-y-hidden mb-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-full p-2  border-r-gray-300 border last:border-r-0  h-[200px] my-2"
          >
            <Image
              className="m-auto"
              src={index % 2 === 0 ? TapImg : MobileImg}
              alt="tv Icon"
            />
            <p className="text-sm text-gray-700 mt-4">
              {index % 2 === 0
                ? "Samsung Galaxy A15 256GB 8GB 4G LTE"
                : "Samsung Galaxy A15 128GB 8GB 4G LTE"}
            </p>
            <span className="text-sm font-bold text-[#4ABD86]">
              EGP 5,999.00
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemChipsContainer;
