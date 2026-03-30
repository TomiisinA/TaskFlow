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
          <div className="bg-white flex justify-between col-span-10 rounded-md px-3 pt-2 ">
            <div>
              <p className="text-xl font-extrabold">Welcome Back, Be! </p>
              <p className="">Here is what is happening with your team today</p>
            </div>
            <div>
              <div className="flex">
                <div>
                  <input
                    type="text"
                    placeholder="Search here"
                    className="border rounded-md 3  bg-white p-2 text-sm "
                  />
                </div>
                <div>
                  <p className="ml-2 border text-xl rounded-lg bg-white  p-1">
                    <Icon icon="mdi:bell-outline" width="24" height="24" />
                  </p>
                </div>
                <div>
                  <p className="ml-2 border text-xl text-primary  font-extrabold bg-primary-100 rounded-lg bg-primary-300 p-1">
                Be
                  </p>
                </div>
                <div className="px-1">
                  <p className="text-lg font-extrabold">
                  Be Constancy <br />
                    {/* tomisinbaby@gmail.com  */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
