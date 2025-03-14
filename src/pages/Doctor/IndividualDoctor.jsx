import React from "react";

import { Button } from "../../components/Button";
import { Icon } from "@iconify/react";
import { doctorData } from "../../data/constants";
import Appointment from "../../components/Appoiment";
function IndividualDoctor() {
  const doctor = doctorData[0];

  return (
    <>
      {" "}
      <div className=" container  rounded-2xl  shadow-lg ro mx-auto my-10   p-4">
        <div className="bg-white rounded-2xl p-6 w-full  flex flex-col  justify-around lg:flex-row">
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="rounded-lg object-cover w-full h-64 md:h-auto"
            />
          </div>

          <div className="p-4">
            <h2 className="text-2xl lg:text-3xl font-figtree font-semibold text-gray-800">
              {doctor.name}
            </h2>
            <p className="text-[#6B7280] mt-2 text-lg font-manrope">
              {doctor.title}
            </p>
            <p className="text-[#6B7280] font-bold ">
              Consultant At:{" "}
              <span className="font-normal">{doctor.consultantAt}</span>
            </p>

            <div className="mt-3">
              <h3 className="font-semibold font-figtree text-xl">About</h3>
              <p className="text-[#6B7280] font-manrope max-w-3xl mt-1 ">
                {doctor.about}
              </p>
            </div>

            <div className="flex items-center mt-4 gap-6">
              <div className="flex flex-col gap-1 text-gray-700">
                <p className="font-bold font-figtree text-lg text-[#6B7280]">
                  Surgeries
                </p>
                <span className="font-manrope flex items-center gap-2  text-[#A7AEB8]">
                  <Icon
                    icon="mdi:stethoscope"
                    height={20}
                    width={20}
                    className="text-primary"
                  />{" "}
                  {doctor.surgeries}{" "}
                </span>
              </div>
              <div className="flex  flex-col gap-1  text-gray-700">
                <p className="font-bold font-figtree text-lg text-[#6B7280]">
                  Experience
                </p>{" "}
                <span className="font-manrope flex items-center gap-2  text-[#A7AEB8]">
                  <Icon
                    icon="mdi:briefcase"
                    height={20}
                    width={20}
                    className="text-primary"
                  />{" "}
                  {doctor.experience}{" "}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-start lg:justify-end">
              <Button
                startIcon={<Icon icon="mdi:whatsapp" className="text-xl" />}
                name="Chat Support"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-6 py-5 px-4">
        <div className="flex-[7] lg:ps-7 bg-white py-8 space-y-5 shadow-lg  rounded-lg p-4">
          <div className="">
            <h3 className="text-lg font-semibold font-figtree">
              Educational Qualification:
            </h3>
            <ul className="list-disc font-semibold list-inside font-manrope text-[#6B7280] mt-2">
              {doctor.qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Specialities:</h3>
            <ul className="list-disc font-semibold list-inside font-manrope text-[#6B7280] mt-2">
              {doctor.specialties.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg  font-semibold font-figtree ">
              Special Interests:
            </h3>
            <ul className="list-disc font-semibold list-inside font-manrope text-[#6B7280] mt-2">
              {doctor.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-[3]">
          <div className="bg-[#005897] text-white rounded-t-lg p-6">
            <h1 className="font-figtree font-bold text-xl md:text-2xl lg:text-3xl">
              Request Appointment
            </h1>
            <p className="font-manrope mt-2 text-sm">
              Please provide your information, and one of our professionals will
              contact you.
            </p>
          </div>

          <Appointment />
        </div>
      </div>
    </>
  );
}

export default IndividualDoctor;
