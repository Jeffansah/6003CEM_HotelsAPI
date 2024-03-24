import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-14 border-b border-b-gray-200/30 relative z-3">
      <div className="grid grid-cols-3">
        <div className="flex items-center">
          <Link href={"/"}>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
