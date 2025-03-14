import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "./Button";

export const SearchBar = () => {
  const [country, setCountry] = useState("New York, USA");
  const [treatment, setTreatment] = useState("PRP Treatment");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="bg-white shadow-md rounded-2xl mt-5  p-4 w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center border  border-gray-300  rounded-lg p-4 text-left gap-4">
        <div className="w-full lg:w-[25%]">
          <span className="text-gray-500 font-manrope text-sm">Country</span>
          <div className="flex items-center rounded-lg p-3 mt-1">
            <Icon
              icon="mdi:map-marker-outline"
              className="text-gray-400 text-xl"
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-transparent outline-none w-full text-black font-medium ml-2"
            >
              <option>New York, USA</option>
              <option>London, UK</option>
              <option>Paris, France</option>
            </select>
          </div>
        </div>
        <div className="h-12 border hidden lg:block border-gray-300"></div>

        <div className="w-full lg:w-[25%]">
          <span className="text-gray-500 font-manrope text-sm">Treatments</span>
          <div className="flex items-center   p-3 mt-1">
            <Icon icon="mdi:medical-bag" className="text-gray-400 text-xl" />
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="bg-transparent outline-none w-full text-black font-medium ml-2"
            >
              <option>PRP Treatment</option>
              <option>Hair Transplant</option>
              <option>Skin Care</option>
            </select>
          </div>
        </div>
        <div className="h-12 border hidden lg:block border-gray-300"></div>
        <div className="w-full lg:w-[25%]">
          <span className="text-gray-500 font-manrope text-sm">Number</span>
          <div className="flex items-center  rounded-lg p-3 mt-1">
            <Icon icon="mdi:phone-outline" className="text-gray-400 text-xl" />
            <select
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
              className="bg-transparent outline-none w-16 text-black font-medium ml-2"
            >
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="text"
              placeholder="Enter your Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-transparent outline-none w-full text-black font-medium ml-2"
            />
          </div>
        </div>
        <div className="h-12 border hidden lg:block border-gray-300"></div>
        <div className="flex-1/3">
          <Button
            name="Chat With Health Consultant"
            startIcon={<Icon icon="mdi:whatsapp" className="text-xl" />}
          />
        </div>
      </div>
    </div>
  );
};
