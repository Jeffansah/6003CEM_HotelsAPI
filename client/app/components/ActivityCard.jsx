import Image from "next/image";

const ActivityCard = ({ image, translateY, name, description }) => {
  return (
    <div
      className={`flex flex-col items-center gap-7 max-md:gap-5 group ${
        translateY ? "lg:translate-y-14" : ""
      }`}
    >
      <div className="relative w-[393px] max-md:w-full h-[590px] max-md:h-[450px] rounded-none">
        <div className="overflow-hidden w-full h-full">
          <Image
            src={image}
            width={393}
            height={590}
            className="rounded-none object-fit object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div
          className={`w-full h-full border rounded-none border-tertiary absolute z-10 -top-[10px] -left-[10px] group-hover:translate-x-[10px] group-hover:translate-y-[10px] group-hover:scale-x-[0.9489] group-hover:scale-y-[0.9661]  transition-transform duration-500 ease-in-out`}
        />
      </div>
      <h3 className="text-heading heading-text text-4xl max-md:text-2xl">
        {name}
      </h3>
      <p className="text-content text-center max-w-xs">{description}</p>
    </div>
  );
};

export default ActivityCard;

//https://jacqueline.themerex.net/wp-content/uploads/2021/06/03-copyright-370x370.jpg
//w-393h-590
//https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/03/img-78-1-550x825.jpg
//	https://cozystay.loftocean.com/island-resort/wp-content/uploads/sites/3/2023/03/img-83-550x826.jpg
