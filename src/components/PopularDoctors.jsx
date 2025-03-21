import React from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Button } from "./Button";
import doctorsData from "../data/constants";

function PopularDoctors() {
  const doctors = doctorsData.slice(4,8); // get first 4 doctors from the array
  return (
    <>
      <div id="popular" className=" mx-15 -mr-8 ">
        <div className="flex flex-wrap items-center py-5 justify-between">
         <div>
         <h1 className="lg:text-5xl font-semibold font-figtree text-3xl  text-[#29569c] ">
            Popular Top <span className="text-secondary">Doctors</span>
          </h1>
          <div className="flex gap-8 flex-wrap text-2xl mt-6">
            <Link to="/doctors">
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

          <p id="access" className="max-w-2xl mr-28 text-end text-[#666666] font-manrope"> Access world-renowned medical experts specializing in various fields, offering advanced treatments, personalized care, and trusted second opinions for your health needs.</p>
        </div>
        <div className="grid gap-0 w-full -mx-15 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:place-content-evenly lg:place-items-center p-5">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularDoctors;
