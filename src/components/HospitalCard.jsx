import React from "react";
import { Link } from "react-router-dom";

const HospitalCard = ({ name, location, rating, reviews, image, id }) => {
    
return (
    <div className="w-full bg-white rounded-4xl shadow-lg overflow-hidden gap-6">
    {/* Hospital Image */}
    <div className="relative">
        <img
        src={image}
        alt={name}
        className="h-80 w-full object-cover rounded-t-2xl"
        />
    </div>

    {/* Content Box Overlapping Image */}
    <div className="relative bg-white p-5 rounded-4xl shadow-md -mt-10 ">
        {/* Name */}
        <h3 className="text-3xl text-left mb-3 font-semibold">{name}</h3>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-2 mt-1 flex items-center">
        <img
            src="/src/assets/svg/location.svg"
            alt="Location"
            className="w-7 h-4 ml-5"
        />
        <span className="text-[20px]">{location}</span>
        </p>

        {/* Rating */}
        <p className=" absolute -top-6 right-10 bg-white rounded-4xl p-2 shadow-lg text-gray-600 text-sm mt-1">⭐ {rating} ({reviews} reviews)</p>

        {/* Explore More Button */}
        <Link to={`/hospital/${id}`}>
        <button className="w-full bg-blue-600 text-white mt-4 py-2 rounded-3xl hover:bg-blue-700 transition">
            Explore More
        </button>
        </Link>
    </div>
    </div>
);
};
export default HospitalCard;