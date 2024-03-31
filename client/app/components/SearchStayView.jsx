"use client";

import { useBookingStore } from "@/store/store";
import { useEffect, useState } from "react";
import SearchStayCard from "./SearchStayCard";
import { Skeleton } from "@/components/ui/skeleton";

const SearchStayView = () => {
  const storeDate = useBookingStore((state) => state.booking.date);
  const storeOptions = useBookingStore((state) => state.booking.options);
  const storeDestination = useBookingStore(
    (state) => state.booking.destination
  );
  const loading = useBookingStore((state) => state.loading);
  const setLoading = useBookingStore((state) => state.setLoading);

  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        setLoading(true);
        console.log(storeOptions.adult + storeOptions.children);
        const response = await fetch(
          `http://localhost:5000/api/hotels/search?type=${storeDestination}&guests=${
            storeOptions.adult + storeOptions.children
          }`
        );
        const data = await response.json();
        setSearchResults(data.hotels);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getSearchResults();
  }, [storeDestination, storeOptions]);

  return (
    <div className="flex w-[70%] flex-col gap-10">
      {searchResults ? (
        searchResults.length !== 0 ? (
          searchResults.map((result) => (
            <SearchStayCard
              name={result.name}
              photos={result.photos}
              extract={result.extract}
              description={result.description}
              price={result.cheapestPrice}
            />
          ))
        ) : (
          <div className="w-full gap-2 py-10 flex flex-col justify-center items-center">
            <p className="text-3xl heading-text">Sorry, no stays available</p>
            <p className="text-content">
              Please refine your search and try again.
            </p>
          </div>
        )
      ) : (
        Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex items-center gap-x-6">
            <Skeleton className="h-[300px] w-[400px] rounded-none" />
            <div className="flex flex-col gap-6">
              <Skeleton className="h-6 w-[250px] rounded-none" />
              <Skeleton className="h-6 w-[200px] rounded-none" />
              <Skeleton className="h-6 w-[300px] rounded-none" />
              <Skeleton className="h-6 w-[150px] rounded-none" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchStayView;
