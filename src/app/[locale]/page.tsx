import Navbar from "@/componant/nav-bar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Banner from "../../../public/banner.png";
import CategoriesIcons from "@/componant/categories-icons/categories-icons";
import CategoriesSlider from "@/componant/catgerories-slider";
import ItemChipsContainer from "@/componant/item-chip";
import Footer from "@/componant/footer";
export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="">
      <Navbar />
      <div className=" min-h-screen bg-gray-100 px-[60px] py-[30px] space-y-6">
        <div className="flex justify-center ">
          <Image
            src={Banner}
            alt="Home Image"
            height={455}
            className="rounded-lg shadow-md"
          />
        </div>
        <CategoriesIcons />
        <CategoriesSlider />
        <ItemChipsContainer />
      </div>
      <Footer />
    </div>
  );
}
