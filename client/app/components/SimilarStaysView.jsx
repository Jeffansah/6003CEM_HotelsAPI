import SimilarStayCard from "./SimilarStayCard";

const SimilarStaysView = async ({ guestLimit, id }) => {
  let data = null;
  try {
    const response = await fetch(
      `http://localhost:5000/api/hotels/similar?guests=${guestLimit}&id=${id}`
    );
    const responseData = await response.json();
    data = responseData;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="">
      {data !== null &&
        data.filteredHotels.map((data) => <SimilarStayCard data={...data}/>)}
    </div>
  );
};

export default SimilarStaysView;
