import React from "react";

import logo from "../../assets/images/logo.png";
import { Icon } from "@iconify/react";
import { footerContents } from "../../data/constants";

const iconMap = {
  LinkedIn: "mdi:linkedin",
  YouTube: "mdi:youtube",
  Facebook: "mdi:facebook",
  Twitter: "mdi:twitter",
  Instagram: "mdi:instagram",
};

const Footer = () => {
  return (
    <div className=" font-figtree mx-10 mb-20 px-4">
      <footer className="bg-[#E0F7FF] p-4  lg:p-10 rounded-[25px] text-primary flex flex-col flex-wrap lg:flex-nowrap   md:flex-row gap-14">
        <div className="bg-white rounded-lg shadow-md p-8 lg:max-w-96">
          <div className="">
            <img
              src={logo}
              alt="TreatGlobal Logo"
              className="max-w-[150px] mx-auto mb-5"
            />
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {footerContents.description}
            </p>
            <div className="flex flex-col md:items-center lg:items-start ">
              <p className="text-[#5057E5] font-semibold text-left mb-2">
                Follow Us On
              </p>
              <div className="flex flex-wrap gap-4 ">
                {footerContents.socialLinks.map((link, index) => {
                  const iconName = iconMap[link.name];
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-white text-[#5057E5] rounded-full shadow-md hover:bg-[#5057E5] hover:text-white transition-all"
                    >
                      {iconName && (
                        <Icon icon={iconName} width={24} height={24} />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly w-full ">
          <div className="min-w-[150px]">
            <h4 className="font-bold lg:text-lg  mb-4">Wellness Tourism</h4>
            <ul className="space-y-2 lg:text-base">
              {footerContents.wellnessTourism.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-sm text-[#003588] hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[150px]">
            <h4 className="font-bold lg:text-lg mb-4">Explore TreatGlobal</h4>
            <ul className="space-y-2 lg:text-base">
              {footerContents.exploreTreatGlobal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-sm text-[#003588] hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[150px]">
            <h4 className="font-bold lg:text-lg  mb-4">Explore Hospitals</h4>
            <ul className="space-y-2 lg:text-base">
              {footerContents.exploreHospitals.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-sm text-[#003588] hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[150px]">
            <h4 className="font-bold lg:text-lg  mb-4">Explore TreatGlobal</h4>
            <ul className="space-y-2 lg:text-base">
              {footerContents.exploreTreatGlobal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-sm text-[#003588] hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
