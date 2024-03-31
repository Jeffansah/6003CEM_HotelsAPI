import React from "react";
import Navbar from "../components/Navbar";
import BookingResults from "../components/BookingResults";

const page = () => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="h-[600px] max-md:h-screen bg-[url(/images/auth3.jpg)] bg-no-repeat bg-center bg-cover relative flex flex-col">
        <div className="absolute w-full h-full bg-black/40 z-2" />
        <Navbar />
        <div className="flex flex-grow items-center justify-center">
          <p className="heading-text text-white text-7xl z-5 relative">
            Booking Search Results
          </p>
        </div>
      </div>
      <div className="boxed py-20">
        <BookingResults />
      </div>
    </div>
  );
};

export default page;
