import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex">
      <div className="w-60 fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-md overflow-y-auto">
        <SideBar />
      </div>

      <div className="ml-60 flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
