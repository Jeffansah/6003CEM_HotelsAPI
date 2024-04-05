import React from "react";
import Sidebar from "./components/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full max-md:flex-col">
      <Sidebar />
      <div className="p-8 w-full">{children}</div>
    </div>
  );
};

export default layout;
