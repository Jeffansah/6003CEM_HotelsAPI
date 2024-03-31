"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronDownIcon,
  CirclePlusIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useBookingStore } from "@/store/store";
import { destinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";

const Booking = () => {
  const storeDate = useBookingStore((state) => state.booking.date);
  const setStoreDate = useBookingStore((state) => state.setDate);

  const storeDestination = useBookingStore(
    (state) => state.booking.destination
  );
  const setStoreDestination = useBookingStore((state) => state.setDestination);

  const storeOptions = useBookingStore((state) => state.booking.options);

  const setAdult = useBookingStore((state) => state.setAdult);
  const setChildren = useBookingStore((state) => state.setChildren);
  const setRoom = useBookingStore((state) => state.setRoom);

  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(new Date().setDate(new Date().getDate() + 1)), 20),
  });

  const handleSubmit = () => {
    setStoreDate(date);
  };

  console.log(storeDestination);

  return (
    <div className="absolute max-md:hidden flex justify-center items-center gap-10 bottom-[-50px] left-1/2 translate-x-[-50%] p-6 bg-theme z-10">
      <Popover>
        <PopoverTrigger asChild className="relative">
          <Button className="rounded-none bg-transparent border border-tertiary heading-text text-base font-light p-6 hover:bg-transparent focus:bg-transparent">
            Pick a location
          </Button>
        </PopoverTrigger>
        <PopoverContent className="border border-tertiary rounded-none min-w-max p-6">
          <div className="grid grid-cols-3 gap-3">
            {destinations.map((destination) => (
              <DestinationCard
                name={destination.name}
                image={destination.image}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-none bg-transparent border border-tertiary heading-text text-base font-light p-6 hover:bg-transparent focus:bg-transparent">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[580px] rounded-none border border-tertiary"
          align="start"
          sideOffset={4}
        >
          <Calendar
            className="w-[500px]"
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-none bg-transparent border border-tertiary heading-text text-base font-light p-6 hover:bg-transparent focus:bg-transparent">
            Guests{" "}
            <span className="ml-6 text-xs font-body">
              {storeOptions.adult} Adult{storeOptions.adult > 1 ? "s" : ""}{" "}
              {storeOptions.children} Child
              {storeOptions.children > 1 || storeOptions.children == 0
                ? "ren"
                : ""}{" "}
              {storeOptions.room} Room{storeOptions.room > 1 ? "s" : ""}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-none p-6 border border-tertiary">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="font-heading text-lg">Adults</p>
              <div className="flex items-center gap-4">
                <PlusIcon
                  className={`h-4 w-4 ${
                    storeOptions.adult > 8
                      ? "text-gray-200 cursor-not-allowed"
                      : " cursor-pointer"
                  }`}
                  onClick={() =>
                    storeOptions.adult < 9 && setAdult(storeOptions.adult + 1)
                  }
                />
                <p className="tabular-nums">{storeOptions.adult}</p>
                <MinusIcon
                  className={`h-4 w-4 ${
                    storeOptions.adult < 2
                      ? "text-gray-200 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={() =>
                    storeOptions.adult > 1 && setAdult(storeOptions.adult - 1)
                  }
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-heading text-lg">Children</p>
              <div className="flex items-center gap-4">
                <button></button>
                <PlusIcon
                  className={`h-4 w-4 ${
                    storeOptions.children > 8
                      ? "text-gray-200 cursor-not-allowed"
                      : " cursor-pointer"
                  }`}
                  onClick={() => {
                    storeOptions.children < 9 &&
                      setChildren(storeOptions.children + 1);
                  }}
                />
                <p className="tabular-nums">{storeOptions.children}</p>
                <MinusIcon
                  className={`h-4 w-4 ${
                    storeOptions.children < 1
                      ? "text-gray-200 cursor-not-allowed"
                      : " cursor-pointer"
                  }`}
                  onClick={() =>
                    storeOptions.children > 0 &&
                    setChildren(storeOptions.children - 1)
                  }
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-heading text-lg">Rooms</p>
              <div className="flex items-center gap-4">
                <button></button>
                <PlusIcon
                  className={`h-4 w-4 ${
                    storeOptions.room > 3
                      ? "text-gray-200 cursor-not-allowed"
                      : " cursor-pointer"
                  }`}
                  onClick={() => {
                    storeOptions.room < 4 && setRoom(storeOptions.room + 1);
                  }}
                />
                <p className="tabular-nums">{storeOptions.room}</p>
                <MinusIcon
                  className={`h-4 w-4 ${
                    storeOptions.room < 2
                      ? "text-gray-200 cursor-not-allowed"
                      : " cursor-pointer"
                  }`}
                  onClick={() =>
                    storeOptions.room > 1 && setRoom(storeOptions.room - 1)
                  }
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Button
        onClick={handleSubmit}
        className="bg-tertiary hover:bg-tertiarydark text-white rounded-none py-6 px-10 heading-text text-base font-light"
      >
        Check Availability
      </Button>
    </div>
  );
};

export default Booking;
