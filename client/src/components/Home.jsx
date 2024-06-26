import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="flex justify-between w-[80%] mx-auto gap-2">
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
    </>
  );
};

export default Home;
