import Booking from "./components/Booking";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { categories } from "@/data/categories";
import LargeStayCard from "./components/LargeStayCard";
import MobileCategoriesView from "./components/MobileCategoriesView";
import { Button } from "@/components/ui/button";
import FeaturedStayView from "./components/FeaturedStayView";
import CTA from "./components/CTA";

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
        <div className="relative bg-[#F3F3F0] lg:pt-44 pb-40 max-md:pb-20 max-md:max-h-max">
          <div className="flex flex-col items-center gap-6 max-md:gap-5 lg:h-full max-md:h-full  max-md:pt-20 max-md:pb-14 max-md:px-7">
            <Image
              src={"/images/resort.png"}
              width={60}
              height={60}
              alt="resort header icon"
              className="max-md:w-12 max-md:h-12"
            />
            <h3 className="text-subtitle">WELCOME TO APT</h3>
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
            <div className=" flex gap-10 max-md:hidden mt-12">
              {categories.map((category) => (
                <LargeStayCard
                  image={category.image}
                  name={category.name}
                  key={category.name}
                  width={310}
                  height={515}
                />
              ))}
            </div>
            <p className=" cursive-text text-tertiary text-center mt-6 text-lg">
              Inspired by our history, surrounded by nature and designed to{" "}
              <br />
              offer a different experience
            </p>
          </div>

          <div className="lg:hidden grid place-items-center bg-[#F3F3F0]">
            <MobileCategoriesView />
          </div>
        </div>
        <div className="py-40">
          <div className="boxed flex flex-col gap-6">
            <p className="subtitle">ENJOY WORLD-CLASS STAY EXPERIENCE</p>
            <div className="flex justify-between items-end">
              <h3 className="heading-text text-heading text-5xl">
                Premier Stays
              </h3>
              <Button className="bg-tertiary hover:bg-tertiarydark text-white rounded-none py-6 px-10 heading-text text-base font-light">
                Explore more
              </Button>
            </div>
            <FeaturedStayView />
          </div>
        </div>
        <div className="w-screen bg-[url(/images/cta3.jpg)] bg-center bg-cover relative">
          <div className="absolute w-full h-full bg-black/40 z-2" />
          <CTA />
        </div>
        <div className="h-screen" />
      </div>
    </>
  );
}
