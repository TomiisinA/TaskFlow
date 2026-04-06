import {  Outlet } from "react-router";
import Sidebar from "../components/sidebar";

import { Navbar } from "../components/navbar";


export const DashboardLayout = () => {
  return (
    <div className="p-3 bg-primary-100">
      <div>
        <Navbar />
      </div>
      <div className=" flex ">
        <div className="h-screen ">
          <Sidebar />
        </div>
        <div className="grow bg-violet-50 min-h-screen pl-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
