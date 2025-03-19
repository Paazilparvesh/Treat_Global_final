
import React from "react";
import { Link } from "react-router-dom";
import hero_image from "../../assets/images/treatment.webp";
import { SearchBar } from "../../components/SearchBar";
import { ReusableHero } from "../../components/ReusableHero";
import image10 from "/src/assets/images/hospital.webp";

const hospitals = [
  {
        id: 1,
        name: "Apollo Hospitals",
        location: "India, Chennai",
        rating: 4.96,
        reviews: 672,
        image: image10 , 
      },
      {
        id: 2,
        name: "Fortis Hospital",
        location: "India, Mumbai",
        rating: 4.85,
        reviews: 512,
        image: image10 ,
      },
      {
        id: 3,
        name: "Max Healthcare",
        location: "India, Delhi",
        rating: 4.75,
        reviews: 430,
        image: image10 ,
      },
      {
        id: 4,
        name: "Medanta Hospital",
        location: "India, Gurgaon",
        rating: 4.80,
        reviews: 390,
        image: image10 ,
      },
      {
        id: 5,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },
      {
        id: 6,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },
      {
        id: 7,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },
      {
        id: 8,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },
      {
        id: 9,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },
      {
        id: 10,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },  
      {
        id: 11,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },  
      {
        id: 12,
        name: "Manipal Hospital",
        location: "India, Bangalore",
        rating: 4.70,
        reviews: 350,
        image: image10 ,
      },  
];

const HospitalCard = ({ name, location, rating, reviews, image }) => {
  return (
    <div className="relative max-w-150 bg-white rounded-4xl shadow-lg overflow-hidden">
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
        <Link to="/hospital/1">
          <button className="w-full bg-blue-600 text-white mt-4 py-2 rounded-3xl hover:bg-blue-700 transition">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

const HospitalList = () => {
  return (
    <>
      {/* Hero Section */}
      <ReusableHero heroImage={hero_image} className="h-[550px]">
        <div className="flex justify-center text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <div className="mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home
            <div className="size-1 md:size-2 bg-white rounded-full"></div> <span>Hospitals</span>
          </div>
          <h1 className="px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">
            Find Your Hospitals
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
            Easily locate the best hospitals near you with our smart search and recommendations.
          </p>
          {/* <SearchBar /> */}
        </div>
      </ReusableHero>

      {/* Related Hospitals */}
      <div className="p-6 text-center">
        <h2 className="text-4xl font-bold text-left text-blue-800 mb-2 ml-12">
          Related <span className="text-blue-500">Hospitals</span>
        </h2>
        <p className="text-right text-gray-500 text-lg -mt-6 mr-12">Found {hospitals.length} Results</p>
        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} {...hospital} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HospitalList;
