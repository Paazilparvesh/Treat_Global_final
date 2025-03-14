import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SubHeader = ({ name, link, icon, iconColor }) => {
  return (
    <div className="bg-secondary flex flex-wrap items-center justify-between md:justify-center px-4 py-2 md:py-3 font-semibold text-xs sm:text-sm  w-full ">
      {icon && (
        <div className="pr-2 animate-bounce-slow flex-shrink-0">
          <Icon icon={icon} color={iconColor} className="w-5 h-5" />
        </div>
      )}
      <p className="text-white truncate pr-4 flex-1 lg:flex-none min-w-0">
        {name}
      </p>
      {link && (
        <Link to="/join">
          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <p className="text-[#FFD257] whitespace-nowrap">{link}</p>
            <Icon
              icon="mdi:arrow-right"
              className="text-white text-base transition-transform duration-300 transform hover:translate-x-1"
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default SubHeader;
