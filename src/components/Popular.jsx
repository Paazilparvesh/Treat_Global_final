import React from "react";
import DoctorCard from "./DoctorCard";
import { heading } from "../assets/styles/Style";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Button } from "./Button";

function Popular() {
  const doctors = Array.from({ length: 4 });
  return (
    <>
      <div className=" px-4 pb-20  container mx-auto ">
        <div className="flex flex-wrap items-center py-5 justify-between">
         <div>
         <h1 className={heading}>
            Popular Top <span className="text-secondary">Doctors</span>
          </h1>
          <div className="flex gap-2 flex-wrap mt-4">
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

          <p className="max-w-2xl text-center text-[#666666] font-manrope"> Access world-renowned medical experts specializing in various fields, offering advanced treatments, personalized care, and trusted second opinions for your health needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:place-content-evenly lg:place-items-stretch gap-6 p-4">
          {doctors.map((_, index) => (
            <DoctorCard key={index} />
          ))}
        </div>
      </div>{" "}
    </>
  );
}

export default Popular;
