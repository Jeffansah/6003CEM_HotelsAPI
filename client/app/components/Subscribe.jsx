import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-between pb-1 border-b border-b-white">
        <Input
          type="email"
          className="flex-1 bg-transparent border-none placeholder:text-gray-300"
          placeholder="Your Email Address"
        />
        <div className="flex-1 flex gap-2 items-center justify-end">
          <Button className="bg-transparent p-0 border-none heading-text text-sm text-white tracking-wide">
            Suscribe
          </Button>
          <Image
            src="/images/send.png"
            width={24}
            height={24}
            alt="send"
            className="w-5 h-5"
          />
        </div>
      </div>
      <div className="max-w-max flex gap-2 items-center">
        <Input type="checkbox" className="text" />
        <p className="text-white text-xs text-nowrap">
          I agree to the Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
