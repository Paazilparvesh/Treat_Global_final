import React from "react";
import { ReusableHero } from "../../components/ReusableHero";
import hero from "../../assets/images/treatment.webp";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react";
import { heading } from "../../assets/styles/Style";
import DoctorCard from "../../components/DoctorCard";

const Doctor = () => {
  const doctors = Array.from({ length: 12 });
  const [treatment, setTreatment] = useState("");
  const [hospital, setHospital] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    console.log({
      treatment,
      hospital,
      country,
      city,
    });
  };
  return (
    <>
      <ReusableHero heroImage={hero}>
        <div className="flex justify-center  text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <p className="font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Doctors</span>
          </p>
          <h1 className="lg:text-3xl font-semibold text-xl font-figtree md:text-2xl ">
            Find Your Doctors
          </h1>
          <p className="max-w-[784px] text-lg font-manrope font-medium">
            Find the best Doctors near you with ease. Get quick access to
            trusted healthcare facilities.
          </p>
          <div className="bg-white text-left shadow-md rounded-2xl mt-5 p-4 w-full mx-auto">
            <div className="flex flex-wrap items-center border border-gray-300 rounded-lg p-4 gap-4">
              <div className="flex-1 min-w-[200px]">
                <span className="text-gray-500 font-manrope text-sm">
                  Treatments
                </span>
                <div className="flex items-center p-3 mt-1 border border-gray-200 rounded-md">
                  <Icon
                    icon="mdi:medical-bag"
                    className="text-gray-400 text-xl"
                  />
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="bg-transparent outline-none w-full text-black font-medium ml-2"
                  >
                    <option value="">Select Treatment</option>
                    <option value="PRP Treatment">PRP Treatment</option>
                    <option value="Hair Transplant">Hair Transplant</option>
                    <option value="Skin Care">Skin Care</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <span className="text-gray-500 font-manrope text-sm">
                  Hospital
                </span>
                <div className="flex items-center p-3 mt-1 border border-gray-200 rounded-md">
                  <Icon
                    icon="solar:hospital-bold-duotone"
                    className="text-gray-400 text-xl"
                  />
                  <select
                    value={hospital}
                    onChange={(e) => setHospital(e.target.value)}
                    className="bg-transparent outline-none w-full text-black font-medium ml-2"
                  >
                    <option value="">Select Hospital</option>
                    <option value="Appolo">Appolo</option>
                    <option value="Sims">Sims</option>
                    <option value="Paris, France">Paris, France</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <span className="text-gray-500 font-manrope text-sm">
                  Country
                </span>
                <div className="flex items-center p-3 mt-1 border border-gray-200 rounded-md">
                  <Icon
                    icon="mdi:map-marker-outline"
                    className="text-gray-400 text-xl"
                  />
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-transparent outline-none w-full text-black font-medium ml-2"
                  >
                    <option value="">Select Country</option>
                    <option value="New York, USA">New York, USA</option>
                    <option value="London, UK">London, UK</option>
                    <option value="Paris, France">Paris, France</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <span className="text-gray-500 font-manrope text-sm">City</span>
                <div className="flex items-center p-3 mt-1 border border-gray-200 rounded-md">
                  <Icon
                    icon="mdi:map-marker-outline"
                    className="text-gray-400 text-xl"
                  />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-transparent outline-none w-full text-black font-medium ml-2"
                  >
                    <option value="">Select City</option>
                    <option value="New York, USA">New York, USA</option>
                    <option value="London, UK">London, UK</option>
                    <option value="Paris, France">Paris, France</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-2 lg:mt-4 ">
                <Button
                  startIcon={
                    <Icon
                      icon="material-symbols:search"
                      width="24px"
                      height="24px"
                    />
                  }
                  name="Search"
                  onClick={handleSearch}
                />
                <Button name="Chat Support" />
              </div>
            </div>
          </div>
        </div>
      </ReusableHero>

      <div className="flex justify-between px-4 flex-wrap gap-4 container mx-auto py-10">
        <h1 className={heading}>
          Related <span className="text-secondary">Doctors</span>{" "}
        </h1>
        <span className="text-gray-500 font-manrope  font-bold">
          Found 13 Results
        </span>
      </div>

      <div className=" px-4 pb-20  container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:place-content-evenly lg:place-items-stretch gap-6 p-4">
      {doctors.map((_, index) => (
        <DoctorCard key={index} />
      ))}
    </div>
      </div>
    </>
  );
};

export default Doctor;
