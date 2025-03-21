import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Button } from "./Button";
import hospitalData from "/src/data/constants.js";
import HospitalCard from "/src/components/HospitalCard.jsx";




function PopularHospitals() {
  const hospitals = hospitalData.slice(2,6); // get first 4 doctors from the array
  return (
    <>
      <div className=" mx-15 -mr-8 ">
        <div className="flex flex-wrap items-center py-5 justify-between">
         <div>
         <h1 className="lg:text-5xl font-semibold font-figtree text-3xl  text-[#29569c] ">
            Popular Top <span className="text-secondary">Hospitals</span>
          </h1>
          <div className="flex gap-8 flex-wrap text-2xl mt-6">
            <Link to="/hospitals">
              {" "}
              <Button
                name="View All"
                endIcon={
                  <Icon
                    icon="mingcute:arrow-right-line"
                    width="24px"
                    height="24px"
                  />
                }
              />
            </Link>
            <Button
              name="Chat Support"
              startIcon={
                <Icon icon="ri:whatsapp-fill" width="24px" height="24px" />
              }
            />
          </div>
         </div>

          <p className="max-w-2xl mr-28 text-end text-[#666666] font-manrope"> Access world-renowned medical experts specializing in various fields, offering advanced treatments, personalized care, and trusted second opinions for your health needs.</p>
        </div>
        <div className="grid gap-10 w-full  -mx-15 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:place-content-evenly lg:place-items-center p-5">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} {...hospital} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularHospitals;
