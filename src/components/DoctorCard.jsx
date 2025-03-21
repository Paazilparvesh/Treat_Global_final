import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


export default function DoctorCard({ name, field, experience, hospital, image, id }) {

  return (

    <div className="w-[350px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={image}
          alt={`${name}'s Photo`}
          className="w-full h-80 object-fill p-3 rounded-3xl"
        />
        <div className="absolute top-5 right-5 bg-white rounded-full shadow p-2 cursor-pointer">
          <Icon icon="mdi:linkedin" className="text-blue-600 w-5 h-5" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-figtree font-semibold text-gray-800">
          {name}
        </h2>
        <p className="text-gray-500 font-manrope">{field}</p>

        <div className="flex items-center space-x-4 my-2 text-gray-500">
          <div className="flex items-center">
            <Icon icon="mdi:pencil" className="w-5 h-5 mr-1 text-secondary" />
            <span>500+</span>
          </div>
          <div className="flex items-center">
            <Icon icon="mdi:briefcase" className="w-5 h-5 mr-1 text-secondary" />
            <span>{experience}+ Years</span>
          </div>
        </div>

        <p className="font-manrope text-gray-600">
          <span className="font-semibold text-gray-800 font-figtree">
            Consults At:
          </span>{" "}
          {hospital}
        </p>

        <Link to={`/doctors/${id}`}>
          <button className="w-full cursor-pointer bg-secondary text-white mt-4 py-2 rounded-3xl border hover:bg-transparent hover:border-primary hover:text-primary transition">
            Request Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
