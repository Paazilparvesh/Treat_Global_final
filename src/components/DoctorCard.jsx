import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import routesPath from "/src/routes/routesPath.jsx";

 

export default function DoctorCard({ name, field, experience, hospital, image, id }) {
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 min-h-[500px] flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={`${name}'s Photo`}
          className="w-full h-80 object-cover p-3 rounded-3xl"
        />
        <div className="absolute top-5 right-5 bg-white rounded-full shadow p-2 cursor-pointer">
          <Icon icon="mdi:linkedin" className="text-blue-600 w-5 h-5" />
        </div>
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        {/* Name & Field */}
        <div>
          <h2 className="text-2xl text-left font-figtree font-semibold text-gray-800 min-h-[56px]">
            {name}
          </h2>
          <p className="text-gray-500 text-left text-xl font-manrope min-h-[40px]">{field}</p>
        </div>

        {/* Experience & Consultation Details */}
        <div>
          <div className="flex items-center text-xl flex-wrap gap-4 my-2 text-gray-500">
            <div className="flex items-center">
              <Icon icon="mdi:pencil" className="w-5 h-5 mr-1 text-secondary" />
              <span>500+</span>
            </div>
            <div className="flex items-center">
              <Icon icon="mdi:briefcase" className="w-5 h-5 mr-1 text-secondary" />
              <span>{experience}+ Years</span>
            </div>
          </div>

          <p className="font-manrope text-left text-xl text-gray-600">
            <span className="font-semibold text-gray-800 font-figtree">
              Consults At:
            </span>{" "}
            {hospital}
          </p>
        </div>

        {/* Button */}
        <Link to={`${routesPath.DOCTORS_ID.replace(":id", id)}`}>
          <button className="w-full cursor-pointer text-2xl bg-secondary text-white mt-4 p-3 rounded-4xl border hover:bg-transparent hover:border-primary hover:text-primary transition">
            Request Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
