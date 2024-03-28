import Image from "next/image";

const LargeStayCard = ({ image, name }) => {
  return (
    <>
      <div className="w-[410px] h-[615px] overflow-hidden border-none rounded-none relative group">
        <Image
          src={image}
          alt={name}
          width={410}
          height={615}
          className="h-full w-full object-center object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <h3 className="absolute left-7 text-4xl bottom-0 opacity-0 heading-text text-white transition group-hover:opacity-100 group-hover:-translate-y-7 duration-500 ease-in-out">
          {name}
        </h3>
      </div>
    </>
  );
};

export default LargeStayCard;