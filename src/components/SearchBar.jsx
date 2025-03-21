
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "./Button";

const SearchBar = ({
  setSelectedCountry,
  setSelectedCity,
  setSelectedLocation,
  setSelectedTreatment,
  setSelectedDepartment,
  setSelectedHospital,
  setSelectedDoctor,
  onSearch,
  showCountry = true,
  showCity = true,
  showLocation = true,
  showTreatment = true,
  showDepartment = false,
  showHospital = false,
  showDoctor = false,
}) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [treatment, setTreatment] = useState("");
  const [department, setDepartment] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");

  return (
    <div 
    id="search"
    className="bg-white shadow-md rounded-2xl mt-5 p-4 w-full max-w-8xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center border border-gray-300 rounded-lg p-4 text-left gap-4">
        
        {showCountry && (
          <div className="w-full lg:w-[25%]">
            <span className="text-gray-500 font-manrope text-sm">Country</span>
            <div className="flex items-center rounded-lg p-3 mt-1">
              <Icon icon="mdi:map-marker-outline" className="text-gray-400 text-xl" />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
          </div>
        )}

        {showLocation && (
          <div className="w-full lg:w-[25%]">
            <span className="text-gray-500 font-manrope text-sm">Location</span>
            <div className="flex items-center rounded-lg p-3 mt-1">
              <Icon icon="mdi:map-marker-outline" className="text-gray-400 text-xl" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="India">Chennai, India</option>
                <option value="USA">New York, USA</option>
                <option value="UK">London, UK</option>
              </select>
            </div>
          </div>
        )}

        {showCity && (
          <div className="w-full lg:w-[25%]">
            <span className="text-gray-500 font-manrope text-sm">City</span>
            <div className="flex items-center rounded-lg p-3 mt-1">
              <Icon icon="mdi:city" className="text-gray-400 text-xl" />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
          </div>
        )}

        {showTreatment && (
          <div className="w-full lg:w-[25%]">
            <span className="text-gray-500 font-manrope text-sm">Treatment</span>
            <div className="flex items-center p-3 mt-1">
              <Icon icon="mdi:medical-bag" className="text-gray-400 text-xl" />
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="PRP">PRP</option>
                <option value="Hair Transplant">Hair Transplant</option>
              </select>
            </div>
          </div>
        )}

        {showDepartment && (
          <div className="w-full lg:w-[25%]">
            <span className="text-gray-500 font-manrope text-sm">Department</span>
            <div className="flex items-center p-3 mt-1">
              <Icon icon="mdi:hospital-building" className="text-gray-400 text-xl" />
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>
          </div>
        )}

        {showHospital && (
          <div className="w-full lg:w-[25%]">
            <span className="text-gray-500 font-manrope text-sm">Hospital</span>
            <div className="flex items-center p-3 mt-1">
              <Icon icon="mdi:hospital" className="text-gray-400 text-xl" />
              <select
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="Apollo Hospital">Apollo Hospital</option>
                <option value="Fortis Hospital">Fortis Hospital</option>
              </select>
            </div>
          </div>
        )}

        {showDoctor && (
          <div className="w-full lg:w-[25%]">
            <span className="text-gray-500 font-manrope text-sm">Doctor</span>
            <div className="flex items-center p-3 mt-1">
              <Icon icon="mdi:stethoscope" className="text-gray-400 text-xl" />
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="Dr. John Doe">Dr. John Doe</option>
                <option value="Dr. Jane Smith">Dr. Jane Smith</option>
              </select>
            </div>
          </div>
        )}

        <Button
          name="Search"
          startIcon={<Icon icon="mdi:magnify" className="text-xl" />}
          onClick={() => {
            setSelectedCountry && setSelectedCountry(country);
            setSelectedCity && setSelectedCity(city);
            setSelectedLocation && setSelectedLocation(location);
            setSelectedTreatment && setSelectedTreatment(treatment);
            setSelectedDepartment && setSelectedDepartment(department);
            setSelectedHospital && setSelectedHospital(hospital);
            setSelectedDoctor && setSelectedDoctor(doctor);
            onSearch();
          }}
        />

        <Button name="Chat Support" className="text-2xl" startIcon={<Icon icon="mdi:whatsapp" />} />
      </div>
    </div>
  );
};

export default SearchBar;
