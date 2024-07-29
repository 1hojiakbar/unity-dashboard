import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import burgerIcon from "../../assets/icons/burger-icon.svg";
import sidebarItem from "../../utils/sidebar";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen overflow-y-scroll">
        <div
          className={`bg-light text-white md:w-1/4 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform border-2 border-divider-color ${
            isOpen ? "-translate-x-0 w-2/4" : "-translate-x-full"
          } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div className="flex md:justify-center sm:justify-between items-center">
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
