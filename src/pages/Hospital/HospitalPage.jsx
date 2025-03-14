import React from "react";
// import { useState } from "react";
import hero_image from "../../assets/images/treatment.webp";
import "./HospitalPage.css";
import { SearchBar } from "../../components/SearchBar";
import { ReusableHero } from "../../components/ReusableHero";
import { Link } from "react-router-dom";
import image10 from "/src/assets/images/hospital.webp";

const hospitals = [
  {
    id: 1,
    name: "Apollo Hospitals",
    location: "India, Chennai",
    rating: 4.96,
    reviews: 672,
    image: image10 , // Replace with actual image path
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
    <>
    
          
    <div className="hospital-card">
        <div className="hospital-image">
            <img src={image} alt={name} className="hospital-image" />
        </div>
        <div className="hospital-info">
            <p className="hospital-name">{name}</p>
            <p className="hospital-location"><span><img className="location-svg" src="src\assets\svg\location.svg" alt="" /></span>{location}</p>
            <p className="hospital-rating">
            ⭐ {rating} ({reviews} reviews)
            </p>
            <Link to="/hospital/1"><button className="explore-btn" href="">Explore More</button></Link>
      </div>
    </div>
    </>
  );
};

const HospitalList = () => {

    // const [country, setCountry] = useState("New York, USA");
    // const [treatment, setTreatment] = useState("PRP Treatment");
    // const [phoneCode, setPhoneCode] = useState("+91");
    // const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
    {/* ------ Hero Section ------- */}
    <ReusableHero heroImage={hero_image}>
      <div className="flex justify-center  text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
        <p className="font-manrope text-sm  md:text-lg flex  items-center gap-4">Home 
        <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
        <span> Hospitals</span>
        </p>
        <h1 className="lg:text-3xl font-semibold text-xl font-figtree md:text-2xl ">Find Your Hospitals
        </h1>
        <p className="max-w-[784px] text-lg font-manrope font-medium">Easily locate the best hospitals near you with our smart search and recommendations.
        </p>

        {/* ------ Search Bar ------ */}
        <SearchBar />

      </div>
    </ReusableHero>

    {/* -------Related Hospitals------- */}

    <div className="hospital-list-container">
      <h2 className="title">Related <span>Hospitals</span></h2>
      <p className="results-count">Found {hospitals.length} Results</p>
      <div className="hospital-list">
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} {...hospital} />
        ))}
      </div>
    </div>
    </>
  );
};

export default HospitalList;
