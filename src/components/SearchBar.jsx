
// import { useState } from "react";
// import { Icon } from "@iconify/react";
// import { Button } from "./Button";

// const SearchBar = ({ setSelectedCountry, setSelectedTreatment, setSelectedDepartment, setSelectedHospital, setSelectedDoctor, onSearch }) => {
//   const [country, setCountry] = useState("");
//   const [treatment, setTreatment] = useState("");
//   const [department, setDepartment] = useState("");
//   const [hospital, setHospital] = useState("");
//   const [doctor, setDoctor] = useState("");

//   return (
//     <div className="bg-white shadow-md rounded-2xl mt-5 p-4 w-full max-w-8xl mx-auto">
//       <div className="flex flex-col lg:flex-row items-center border border-gray-300 rounded-lg p-4 text-left gap-4">
//         <div className="w-full lg:w-[25%]">
//           <span className="text-gray-500 font-manrope text-sm">Country</span>
//           <div className="flex items-center rounded-lg p-3 mt-1">
//             <Icon icon="mdi:map-marker-outline" className="text-gray-400 text-xl" />
//             <select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="bg-transparent outline-none w-full text-black font-medium ml-2"
//             >
//               <option value="">All</option>
//               <option value="Chennai">Chennai</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Delhi">Delhi</option>
//               <option value="Vellore">Vellore</option>
//               <option value="Bengaluru">Bengaluru</option>
//               <option value="Madurai">Madurai</option>
//             </select>
//           </div>
//         </div>

//         <div className="w-full lg:w-[25%]">
//           <span className="text-gray-500 font-manrope text-sm">Treatment</span>
//           <div className="flex items-center p-3 mt-1">
//             <Icon icon="mdi:medical-bag" className="text-gray-400 text-xl" />
//             <select
//               value={treatment}
//               onChange={(e) => setTreatment(e.target.value)}
//               className="bg-transparent outline-none w-full text-black font-medium ml-2"
//             >
//               <option value="">All</option>
//               <option value="PRP">PRP</option>
//               <option value="Hair Transplant">Hair Transplant</option>
//               <option value="Skin Care">Skin Care</option>
//             </select>
//           </div>
//         </div>

//         <Button name="Search" startIcon={<Icon icon="mdi:magnify" className="text-xl" />} onClick={() => {
//           setSelectedCountry(country);
//           setSelectedTreatment(treatment);
//           onSearch();
//         }} />
//         <Button name="Chat Support" className="text-2xl" startIcon={<Icon icon="mdi:whatsapp"/>}  />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;


import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "./Button";

const SearchBar = ({
  setSelectedCountry,
  setSelectedTreatment,
  setSelectedDepartment,
  setSelectedHospital,
  setSelectedDoctor,
  onSearch,
  showCountry = true,
  showTreatment = true,
  showDepartment = false,
  showHospital = false,
  showDoctor = false,
}) => {
  const [country, setCountry] = useState("");
  const [treatment, setTreatment] = useState("");
  const [department, setDepartment] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");

  return (
    <div className="bg-white shadow-md rounded-2xl mt-5 p-4 w-full max-w-8xl mx-auto">
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
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Vellore">Vellore</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Madurai">Madurai</option>
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
                <option value="Skin Care">Skin Care</option>
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
                <option value="Orthopedics">Orthopedics</option>
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
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
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
                placeholder="Enter doctor name"
                className="bg-transparent outline-none w-full text-black font-medium ml-2"
              >
                <option value="">All</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
              </select>
            </div>
          </div>
        )}

        <Button
          name="Search"
          startIcon={<Icon icon="mdi:magnify" className="text-xl" />}
          onClick={() => {
            setSelectedCountry(country);
            setSelectedTreatment(treatment);
            setSelectedDepartment(department);
            setSelectedHospital(hospital);
            setSelectedDoctor(doctor);
            onSearch();
          }}
        />
        
        <Button name="Chat Support" className="text-2xl" startIcon={<Icon icon="mdi:whatsapp" />} />
      </div>
    </div>
  );
};

export default SearchBar;
