
// import React from "react";
// import { useState } from "react";
// import hero_image from "../../assets/images/treatment.webp";
// import  SearchBar  from "/src/components/SearchBar.jsx";
// import { ReusableHero }from "/src/components/ReusableHero.jsx";
// import HospitalCard from "../../components/HospitalCard";
// import { hospitalData } from "../../data/constants";

// const HospitalList = () => {

//   const [selectedCountry, setSelectedCountry] = useState("");  
//   const [selectedTreatment, setSelectedTreatment] = useState("");  
//   const [filteredHospitals, setFilteredHospitals] = useState(hospitalData);

//   const handleHospitalSearch = () => {
//     const filtered = hospitalData.filter(
//       (hospital) =>
//         (!selectedCountry || hospital.location.includes(selectedCountry)) &&
//         (!selectedTreatment || hospital.treatment === selectedTreatment)
//     );
//     setFilteredHospitals(filtered);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <ReusableHero heroImage={hero_image} className="h-[550px]">
//         <div className="flex justify-center text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
//           <div className="mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">
//             Home
//             <div className="size-1 md:size-2 bg-white rounded-full"></div> <span>Hospitals</span>
//           </div>
//           <h1 className="px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">
//             Find Your Hospitals
//           </h1>
//           <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
//             Easily locate the best hospitals near you with our smart search and recommendations.
//           </p>
//           <SearchBar
//             setSelectedCountry={setSelectedCountry} 
//             setSelectedTreatment={setSelectedTreatment} 
//             onSearch={handleHospitalSearch} 
//           />
//         </div>
//       </ReusableHero>

//       {/* Related Hospitals */}
//       <div className="p-6 text-center">
//         <h2 className="text-4xl font-bold text-left text-blue-800 mb-2 ml-12">
//           Related <span className="text-blue-500">Hospitals</span>
//         </h2>
//         <p className="text-right text-gray-500 text-lg -mt-6 mr-12">Found {filteredHospitals.length} Results
//         </p>

//         <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
//           {filteredHospitals.length > 0 ? (
//             filteredHospitals.map((hospital) => <HospitalCard key={hospital.id} {...hospital} />)
//           ) : (
//             <p className="text-gray-500 text-lg col-span-full">No matching hospitals found.</p>
//           )}
//         </div>

//       </div>
//     </>
//   );
// };

// export default HospitalList;




import React, { useState, useEffect } from "react";
import hero_image from "../../assets/images/treatment.webp";
import SearchBar from "/src/components/SearchBar.jsx";
import { ReusableHero } from "/src/components/ReusableHero.jsx";
import HospitalCard from "../../components/HospitalCard";
import { hospitalData } from "../../data/constants";

const HospitalList = () => {
   
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");  
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitalData);

  // Use useEffect to filter hospitals whenever selectedCountry or selectedTreatment changes
  useEffect(() => {
    const filtered = hospitalData.filter(
      (hospital) =>
        (!selectedCountry || hospital.country.includes(selectedCountry)) &&
        (!selectedTreatment || hospital.treatment === selectedTreatment) && 
        (!selectedCity || hospital.city === selectedCity) 

    );
    setFilteredHospitals(filtered);
  }, [selectedCountry, selectedTreatment, selectedCity]); // Dependencies ensure this runs when filters change

  return (
    <>
      {/* Hero Section */}
      <ReusableHero heroImage={hero_image} className="h-[550px]">
        <div className="flex justify-center text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <div className="mx-9 font-manrope text-sm md:text-lg flex items-center gap-4">
            Home
            <div className="size-1 md:size-2 bg-white rounded-full"></div> 
            <span>Hospitals</span>
          </div>
          <h1 className="px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">
            Find Your Hospitals
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
          Treat Global offers world-class medical treatments and personalized care to patients worldwide. 
          </p>
          <SearchBar 
            setSelectedTreatment={setSelectedTreatment}
            setSelectedCountry={setSelectedCountry}
            setSelectedCity={setSelectedCity}
            showCountry={true}
            showCity={true}
            showTreatment={true}
            showDepartment={false}
            showHospital={false}
            showDoctor={false}
            showLocation={false}
          />
        </div>
      </ReusableHero>

      {/* Related Hospitals */}
      <div className="p-6 text-center">
        <h2 className="text-4xl font-bold text-left text-blue-800 mb-2 ml-12">
          Related <span className="text-blue-500">Hospitals</span>
        </h2>
        <p className="text-right text-gray-500 text-lg -mt-6 mr-12">
          Found {filteredHospitals.length} Results
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

