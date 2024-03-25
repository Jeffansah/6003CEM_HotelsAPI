import Booking from "./components/Booking";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        <div className="h-[90vh] bg-home bg-no-repeat bg-center bg-cover relative flex flex-col">
          <div className="absolute w-full h-full bg-black/40 z-2" />
          <Navbar />
          <Header />
          <Booking />
        </div>
        <div className="h-screen" />
      </div>
    </>
  );
}
