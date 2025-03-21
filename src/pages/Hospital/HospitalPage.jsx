
import React from "react";
import { useState } from "react";
import hero_image from "../../assets/images/treatment.webp";
import  SearchBar  from "/src/components/SearchBar.jsx";
import { ReusableHero }from "/src/components/ReusableHero.jsx";
import HospitalCard from "../../components/HospitalCard";
import image10 from "/src/assets/images/hospital.webp";
const hospitalData = [
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


const HospitalList = () => {

  const [selectedCountry, setSelectedCountry] = useState("");  
  const [selectedTreatment, setSelectedTreatment] = useState("");  
  const [filteredHospitals, setFilteredHospitals] = useState(hospitalData);

  const handleHospitalSearch = () => {
    const filtered = hospitalData.filter(
      (hospital) =>
        (!selectedCountry || hospital.location.includes(selectedCountry)) &&
        (!selectedTreatment || hospital.treatment === selectedTreatment)
    );
    setFilteredHospitals(filtered);
  };

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
          <SearchBar
            setSelectedCountry={setSelectedCountry} 
            setSelectedTreatment={setSelectedTreatment} 
            onSearch={handleHospitalSearch} 
          />
        </div>
      </ReusableHero>

      {/* Related Hospitals */}
      <div className="p-6 text-center">
        <h2 className="text-4xl font-bold text-left text-blue-800 mb-2 ml-12">
          Related <span className="text-blue-500">Hospitals</span>
        </h2>
        <p className="text-right text-gray-500 text-lg -mt-6 mr-12">Found {filteredHospitals.length} Results
        </p>

        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital) => <HospitalCard key={hospital.id} {...hospital} />)
          ) : (
            <p className="text-gray-500 text-lg col-span-full">No matching hospitals found.</p>
          )}
        </div>

      </div>
    </>
  );
};

export default HospitalList;
