import Image from "next/image";
import { people, bed, bath, scale } from "../../data/extractIcons.js";
import { amenities } from "@/data/amenities.js";
import Gallery from "./Gallery.jsx";
import SimilarStaysView from "./SimilarStaysView.jsx";
import ConfirmBooking from "./ConfirmBooking.jsx";

const SingleStayResult = ({
  data: {
    _id,
    name,
    type,
    city,
    country,
    address,
    photos,
    title,
    extract,
    description,
    roomAmenities,
    included,
    rating,
    cheapestPrice,
    featured,
    guestLimit,
  },
  data,
}) => {
  const titleArray = title.split("/");

  return (
    <div className="flex  text-heading text-lg max-md:flex-col-reverse max-md:items-center w-full boxed gap-20 max-md:gap-14 max-md:px-7">
      <div className="w-[65%] flex flex-col max-md:w-full gap-14">
        <div className="flex flex-col gap-6">
          <h3 className="heading-text  text-4xl">{name}</h3>
          <p className="text-content">
            {address}, {city}, {country}
          </p>
          <div className="flex gap-6 items-center text-base">
            {extract[0].map((item) => {
              if (item.includes("m2"))
                return (
                  <div className="flex gap-3 items-center">
                    <Image
                      src={scale}
                      width={20}
                      height={20}
                      alt="scale icon"
                    />
                    <p className="text-content">
                      {item.split("m")[0]}m<sup>2</sup>
                    </p>
                  </div>
                );
              if (item.includes("Guest"))
                return (
                  <div className="flex gap-3 items-center">
                    <Image
                      src={people}
                      width={20}
                      height={20}
                      alt="people icon"
                    />
                    <p className="text-content">{item}</p>
                  </div>
                );
              if (item.includes("Bed"))
                return (
                  <div className="flex gap-3 items-center">
                    <Image src={bed} width={20} height={20} alt="bed icon" />

                    <p className="text-content">{item}</p>
                  </div>
                );
              if (item.includes("Bath"))
                return (
                  <div className="flex gap-3 items-center">
                    <Image src={bath} width={20} height={20} alt="bath icon" />
                    <p className="text-content">{item}</p>
                  </div>
                );
            })}
          </div>
        </div>
        <p className="leading-10">{description}</p>
        <div className="flex flex-col gap-6">
          <h3 className="heading-text text-2xl">Features</h3>
          <div className="flex gap-4">
            {titleArray.map((item) => (
              <div className="px-10 py-4 bg-tertiarylight heading-text">
                {item.trim()}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="heading-text text-2xl">Room Amenities</h3>
          <div className="grid grid-cols-2 gap-6">
            {roomAmenities[0].map((item) => (
              <div className="flex gap-4 items-center">
                <Image
                  src={
                    amenities.find((amenity) => amenity.name === item)?.icon ||
                    "/images/shampoo.png"
                  }
                  width={33}
                  height={33}
                  alt="amenity icon"
                />
                <p className="heading-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="heading-text text-2xl">
            What’s included in this {type}?
          </h3>
          <ol className="px-5 space-y-4">
            {included[0].map((item) => (
              <li className="list-disc included-list">{item}</li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="heading-text text-2xl">Gallery</h3>
          <Gallery photos={photos} name={name} />
        </div>
      </div>
      <ConfirmBooking data={data} />
    </div>
  );
};

export default SingleStayResult;
