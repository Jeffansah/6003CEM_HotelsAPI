"use client";

import Image from "next/image";

const DestinationCard = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-1 group">
      <div className="overflow-hidden w-24 h-24 rounded-none">
        <Image
          src={`/images/${image}`}
          alt={name}
          width={96}
          height={96}
          className="w-full cursor-pointer h-full object-center object-cover group-hover:scale-110 duration-300 ease-in-out transition"
        />
      </div>
      <p className="text-tertiary">{name}</p>
    </div>
  );
};

export default DestinationCard;
