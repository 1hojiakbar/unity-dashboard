import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import sidebarItem from "../../utils/sidebar";
import logo from "../../assets/icons/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import burgerIcon from "../../assets/icons/burger-icon.svg";
import adminLogo from "../../assets/images/avatar.png";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row h-max">
        <div
          className={`bg-light text-white md:w-1/4 space-y-6 pt-7 overflow-scroll px-0 absolute inset-y-0 left-0 transform border-2 border-divider-color ${
            isOpen ? "-translate-x-0 w-2/4" : "-translate-x-full"
          } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div className="flex md:justify-center sm:justify-between items-center overflow-scroll">
            <NavLink to="/">
              <div className="flex mt-2 items-start">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
                <span className="text-xl md:text-3xl font-bold text-custom-dark-blue">
                  Unity
                </span>
              </div>
            </NavLink>
            <div className="md:hidden sm:flex">
              <button
                onClick={toggleSidebar}
                className="text-white focus:outline-none"
              >
                <img src={burgerIcon} alt="" />
              </button>
            </div>
          </div>
          <nav className="mt-10">
            <p className="font-font text-secondary ml-5 mb-2">Admin tools</p>
            {sidebarItem.map((value) => {
              return (
                <NavLink
                  key={value.id}
                  to={value.path}
                  className={value.className}
                >
                  <img src={value.icon} alt="" className="pr-4" />
                  {value.title}
                </NavLink>
              );
            })}
          </nav>
          <div className="flex w-full items-center justify-start py-5 pl-4 border-t-2 gap-4 mt-auto text-black h-max">
            <img src={adminLogo} alt="" />
            <h3 className="text-black font-bold">Tam Tran</h3>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-between bg-light text-white w-full p-4">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <img src={burgerIcon} alt="" />
          </button>
        </div>
        <div className="w-full">
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
