import React, { useState, useEffect } from "react";
import { ReusableHero } from "../../components/ReusableHero";
import hero from "../../assets/images/treatment.webp";
import DoctorCard from "../../components/DoctorCard";
import { doctorsData } from "../../data/constants";
import SearchBar from "/src/components/SearchBar.jsx";

const Doctor = () => {
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  // Filter doctors when any filter changes
  useEffect(() => {
    setFilteredDoctors(
      doctorsData.filter(
        (doctor) =>
          (!selectedTreatment || doctor.treatment === selectedTreatment) &&
          (!selectedCountry || doctor.country === selectedCountry) &&
          (!selectedCity || doctor.city === selectedCity) &&
          (!selectedHospital || doctor.hospital === selectedHospital)
      )
    );
  }, [selectedTreatment, selectedCountry, selectedCity, selectedHospital]);

  return (
    <>
      <ReusableHero heroImage={hero} className="h-[550px]">
        <div className="flex justify-center text-center mt-20 md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <div className="mx-8 font-manrope text-sm md:text-lg flex items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white rounded-full"></div>
            <span> Doctors</span>
          </div>
          <h1 className="px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">
            Find Your Doctors
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
            Find the best Doctors near you with ease. Get quick access to
            trusted healthcare facilities.
          </p>

          {/* Search Bar with all filters */}
          <SearchBar
            setSelectedTreatment={setSelectedTreatment}
            setSelectedCountry={setSelectedCountry}
            setSelectedCity={setSelectedCity}
            setSelectedHospital={setSelectedHospital}
            showTreatment={true}
            showCountry={true}
            showCity={true}
            showHospital={true}
            showDepartment={false}
            showDoctor={false}
          />
        </div>
      </ReusableHero>

      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold text-left text-blue-800 mb-2 ml-12">
          Related <span className="text-secondary">Doctors</span>
        </h1>
        <p className="text-right text-gray-500 text-lg -mt-6 mr-12">
          Found {filteredDoctors.length} Results
        </p>

        {/* Doctors Grid */}
        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))
          ) : (
            <p className="text-gray-500 text-lg col-span-full">
              No matching doctors found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Doctor;
