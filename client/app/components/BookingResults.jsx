import MobileBooking from "./MobileBooking";
import SearchStayView from "./SearchStayView";

const BookingResults = async () => {
  return (
    <div className="flex w-full boxed gap-20">
      <div className="w-[30%]">
        <MobileBooking isSearchPage={true} />
      </div>
      <SearchStayView />
    </div>
  );
};

export default BookingResults;
