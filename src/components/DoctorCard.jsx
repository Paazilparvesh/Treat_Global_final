import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function DoctorCard({
  doctorImage, 
  doctorName, 
  doctorField, 
  doctorExperience, 
  doctorHospital 
}) {

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={doctorImage}
          alt="Doctor's Photo"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full shadow p-2 cursor-pointer">
          <Icon icon="mdi:linkedin" className="text-blue-600 w-5 h-5" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-figtree font-semibold text-gray-800">
          {doctorName}
        </h2>
        <p className="text-gray-500 font-manrope">{doctorField}</p>

        <div className="flex items-center space-x-4 my-2 text-gray-500">
          <div className="flex items-center">
            <Icon icon="mdi:pencil" className="w-5 h-5 mr-1 text-secondary" />
            <span>500+</span>
          </div>
          <div className="flex items-center">
            <Icon icon="mdi:briefcase" className="w-5 h-5 mr-1 text-secondary" />
            <span>{doctorExperience} Years</span>
          </div>
        </div>

        <p className="font-manrope text-gray-600">
          <span className="font-semibold text-gray-800 font-figtree">Consults At:</span>{" "}
          {doctorHospital}
        </p>

        <Link to="/doctor/1">
          <button className="w-full cursor-pointer bg-secondary text-white mt-4 py-2 rounded-3xl border hover:bg-transparent hover:border-primary hover:text-primary transition">
            Request Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}