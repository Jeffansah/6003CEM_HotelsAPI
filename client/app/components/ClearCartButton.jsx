"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useBookingStore } from "@/store/store";

const ClearCartButton = ({ id }) => {
  const setCartIsFilled = useBookingStore((state) => state.setCartIsFilled);
  const { toast } = useToast();

  const handleClick = async () => {
    const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setCartIsFilled(false);
      toast({
        title: "Cart cleared",
        description: `Cart has successfully been cleared`,
        className: "bg-gray-200 text-heading",
      });
      return;
    }
  };

  return (
    <div className="w-full flex justify-end">
      <Button
        onClick={handleClick}
        className={`bg-tertiary hover:bg-tertiarydark w-[200px]  text-white rounded-none py-6 heading-text text-base font-light mt-6`}
      >
        Clear Items
      </Button>
    </div>
  );
};

export default ClearCartButton;
