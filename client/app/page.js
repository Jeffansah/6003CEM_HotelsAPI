import Booking from "./components/Booking";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { categories } from "@/data/categories";
import LargeStayCard from "./components/LargeStayCard";
import MobileCategoriesView from "./components/MobileCategoriesView";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <div className="h-[90vh] max-md:h-screen bg-home bg-no-repeat bg-center bg-cover relative flex flex-col">
          <div className="absolute w-full h-full bg-black/40 z-2" />
          <Navbar />
          <Header />
          <Booking />
        </div>
        <div className="lg:h-screen relative max-md:bg-[#F3F3F0] max-md:pb-20 max-md:max-h-max">
          <div className="flex flex-col items-center gap-6 max-md:gap-5 bg-[#F3F3F0] lg:h-[80%] max-md:h-full pt-44 max-md:pt-20 pb-14 max-md:px-7">
            <Image
              src={"/images/resort.png"}
              width={60}
              height={60}
              alt="resort header icon"
              className="max-md:w-12 max-md:h-12"
            />
            <h3 className="text-subtitle text-xs tracking-widest">
              WELCOME TO APT
            </h3>
            <h1 className="text-heading/90 heading-text text-6xl max-md:text-4xl font-light max-w-5xl text-center leading-tight">
              Explore Outstanding Views all around the Globe
            </h1>
            <p className="text-content max-w-5xl text-center leading-loose">
              Welcome to APT, where luxury meets serenity, and elegance
              intertwines with comfort. As your premier destination for
              exquisite hotels and resorts, we invite you to embark on a journey
              of unparalleled hospitality. Embark on a journey of discovery as
              you explore our diverse portfolio of accommodations. Whether
              you're craving the soothing embrace of nature or the excitement of
              city life, APT promises to deliver an unparalleled stay tailored
              to your desires.
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 flex gap-10 max-md:hidden">
            {categories.map((category) => (
              <LargeStayCard
                image={category.image}
                name={category.name}
                key={category.name}
                width={410}
                height={615}
              />
            ))}
          </div>
          <div className="lg:hidden grid place-items-center bg-[#F3F3F0]">
            <MobileCategoriesView />
          </div>
        </div>
        <div className="h-screen" />
        <div className="h-screen" />
      </div>
    </>
  );
}
