import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../assets/images/logo.png";

import { Button } from "../Button";
import SubHeader from "./SubHeader";
import { navbar, subHeader } from "../../data/constants";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <SubHeader
        name={subHeader.name}
        link={subHeader.link} iconColor="#ffffff"
         icon={"akar-icons:thunder"}
      />

      <header className="bg-white font-manrope shadow-md sticky top-0 z-50">
        <div className="mx-auto flex justify-between lg:justify-around  items-center p-4">
          <span onClick={toggleSidebar} className="lg:hidden cursor-pointer">
            <Icon
              icon="gg:menu-left"
              width="28px"
              height="28px"
              className="text-primary"
            />
          </span>
<Link to="/">
          <img alt="logo" src={logo} width={108} height={48} />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            {navbar.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`text-black hover:text-primary ${
                    location.pathname === item.path
                      ? "border-b-2 border-primary font-medium"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex gap-4 items-center  ">
            <Icon
              icon="logos:whatsapp-icon"
              width="23.82px"
              height="24px"
              className="hidden lg:block"
            />
            <Icon
              icon="ic:round-phone"
              width="24px"
              height="24px"
              className="hidden lg:block"
            />
            <div className="relative lg:flex items-center hidden  ">
              <Icon
                icon="circum:globe"
                width="24px"
                height="24px"
                className="flex-shrink-0 "
              />

              <select className="flex-grow px-1  appearance-none bg-transparent outline-none font-semibold ">
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="de">DE</option>
                <option value="es">ES</option>
              </select>
            </div>

            <Button name="Sign-in" />
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-secondary/10 backdrop-blur-lg z-40 transition-opacity duration-300"
            onClick={closeSidebar}
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <img src={logo} alt="logo" width={108} height={48} />
            <button onClick={closeSidebar}>
              <Icon
                icon="ic:baseline-close"
                width="30"
                height="30"
                color="#3F6955"
              />
            </button>
          </div>

          <div className="p-4">
            {navbar.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg ${
                  location.pathname === item.path
                    ? "bg-blue-200 text-primary"
                    : "text-black hover:bg-gray-100"
                }`}
                onClick={closeSidebar}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
