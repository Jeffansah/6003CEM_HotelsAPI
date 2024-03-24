import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="h-[85vh] bg-home bg-no-repeat bg-center bg-cover relative">
          <div className="absolute w-full h-full bg-black/30 z-2" />
          <Navbar />
        </div>
      </div>
    </>
  );
}
