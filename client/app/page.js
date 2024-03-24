import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="h-[90vh] bg-home bg-no-repeat bg-center bg-cover relative">
          <div className="absolute w-full h-full bg-black/40 z-2" />
          <Navbar />
        </div>
      </div>
    </>
  );
}
