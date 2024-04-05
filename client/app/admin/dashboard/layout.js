import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full max-md:flex-col">
      <Sidebar />
      <div className="px-8 w-full flex flex-col bg-muted/40">
        <div className="py-3 w-full">
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
