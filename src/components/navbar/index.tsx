import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/TaskFlow-logo.png";

export const Navbar = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="grid grid-cols-12 my-4 gap-4">
          <div className=" bg-white col-span-2  rounded-md ps-3 pb-0">
            <NavLink to="/">
              <img
                src={logo}
                alt="Husmate_logo"
                className="dashboard-sidebar__logo img-fluid"
                style={{ width: "70px", height: "auto" }}
              />
            </NavLink>
          </div>
          <div className="bg-white flex justify-between  items-center col-span-10 rounded-md px-3 pt-2 ">
            <div>
              <p className="text-xl font-extrabold">Welcome Back, Be! </p>
              <p className="">Here is what is happening with your team today</p>
            </div>
            <div>
              <div className="flex">
                <div className="flex border rounded-lg  bg-white ">
                  <div>
                    {" "}
                    <Icon
                      icon="iconamoon:search-thin"
                      width="24"
                      height="24"
                      className="pt-3"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search here.."
                    className="p-2 text-sm "
                  />
                </div>
                <div>
                  <p className="ml-2 border text-xl rounded-lg bg-white  p-1">
                    <Icon icon="mdi:bell-outline" width="24" height="24" />
                  </p>
                </div>
                <div>
                  <p className="ml-2 border text-lg text-primary  font-extrabold bg-primary-100 rounded-lg bg-primary-300 p-1">
                    Be
                  </p>
                </div>
                <div className="px-1">
                  <p className="text-lg font-extrabold">Be Constancy</p>
                  {/* <span className="text-sm font-light mt-0 pt-0">
                    tomisinbaby@gmail.com
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
