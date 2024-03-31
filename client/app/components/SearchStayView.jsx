"use client";

import { useBookingStore } from "@/store/store";
import { useEffect, useState } from "react";
import SearchStayCard from "./SearchStayCard";

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
          <p>No results found</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchStayView;
