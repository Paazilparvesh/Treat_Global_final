// import React from "react";
// import { useState, useEffect } from "react";
// import image02 from "/src/assets/images/medical.webp";
// import { ReusableHero } from "../../components/ReusableHero";
// import "./WellnessTourism.css";
//  import {
//   Breadcrumb,
//   Collapse,
//   Slider,
//   DatePicker,
//   Rate,
//   Pagination,
//  } from "antd";
// import { locations, trainingDetails, treatments } from "../../data/mockData";
// import useCustomState from "../../hooks/useCustomState";
//  import FilterSearch from "../../components/filterSearch";
// // import dayjs from "dayjs";
//  import { IoLocationSharp } from "react-icons/io5";
//  import Button from "../../components/buttons";
//  import { MdOutlineAccessTimeFilled } from "react-icons/md";
//  import { BsPersonFill } from "react-icons/bs";
// import { useNavigate } from 'react-router-dom';
// import BlogSection from "/src/components/ReusableBlog.jsx";
// import SearchBar from "/src/components/SearchBar.jsx";
// import { wellnessData } from "../../data/constants";

//  const { RangePicker } = DatePicker;

// const WellnessTourismPage = () => {

//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedTreatment, setSelectedTreatment] = useState("");
//   const [filteredWellness, setFilteredWellness] = useState(wellnessData);

//    // Automatically filter blogs whenever filters change
//    useEffect(() => {
//     const filtered = wellnessData.filter(
//       (wellness) =>
//         (!selectedLocation || wellness.location === selectedLocation) &&
//         (!selectedTreatment || wellness.treatment === selectedTreatment)
//     );

//     setFilteredWellness(filtered);
//   }, [selectedTreatment, selectedLocation]); // Runs when rs change

//   // const [tempFilters, setTempFilters] = useCustomState({
//   //   location: "",
//   //   treatment: "",
//   // });

//   // const [filters, setFilters] = useCustomState({
//   //   location: "",
//   //   treatment: "",
//   // });

//   // const handleTempFilterChange = (key, value) => {
//   //   setTempFilters((prev) => ({ ...prev, [key]: value }));
//   // };

//   // const applyFilters = () => {
//   //   setFilters(tempFilters);
//   //   setCurrentPage(1);
//   // };

//   // const [currentPage, setCurrentPage] = useCustomState(1);
//   // const itemsPerPage = 3;

//   // const filteredResults = trainingDetails.filter((training) => {
//   //   return (
//   //     (!filters.location || training.location === filters.location) &&
//   //     (!filters.treatment || training.treatment === filters.treatment)
//   //   );
//   // });

//   // const clearFilter = (key) => {
//   //   setFilters((prev) => ({ ...prev, [key]: "" }));
//   //   setTempFilters((prev) => ({ ...prev, [key]: "" }));
//   // };

//   // const paginatedResults = filtered.slice(
//   //   (currentPage - 1) * itemsPerPage,
//   //   currentPage * itemsPerPage
//   // );

//   // const [priceRange, setPriceRange] = useCustomState([0, 1000]);
//   // const [dates, setDates] = useCustomState([]);
//   // const [rating, setRating] = useCustomState(0);


//   // const filterItems = [
//   //   {
//   //     key: "1",
//   //     label: <div className="custom-collapse-header">Filter Price</div>,
//   //     children: (
//   //       <div>
//   //         {/* <div className="price-range-labels">
//   //           <span>Min: ${priceRange[0]}</span>
//   //           <span>Max: ${priceRange[1]}</span>
//   //         </div> */}
//   //         {/* <Slider
//   //           range
//   //           min={0}
//   //           max={1000}
//   //           value={priceRange}
//   //           onChange={setPriceRange}
//   //           tooltip={{ formatter: (value) => `$${value}` }}
//   //         /> */}
//   //       </div>
//   //     ),
//   //   },
//   //   {
//   //     key: "2",
//   //     label: <div className="custom-collapse-header">Duration</div>,
//   //     children: (
//   //       <RangePicker
//   //         value={dates}
//   //         onChange={setDates}
//   //         format="YYYY-MM-DD"
//   //         // disabledDate={(current) =>
//   //         //   current && current < dayjs().startOf("day")
//   //         // }
//   //       />
//   //     ),
//   //   },
//   //   {
//   //     key: "3",
//   //     label: <div className="custom-collapse-header">Rating</div>,
//   //     children: <Rate allowHalf value={rating} onChange={setRating} />,
//   //   },
//   //   {
//   //     key: "4",
//   //     label: <div className="custom-collapse-header">Specials</div>,
//   //     children: <p>No Specials</p>,
//   //   },
//   // ];

//   const navigate = useNavigate();

//   return (
//     <div>

//       <ReusableHero heroImage={image02} className="h-[550px]">
//         <div className="flex justify-center  text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
//           <div className="mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">Home 
//             <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
//             <span> Hospitals</span>
//           </div>
//           <h1 className=" px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">Find Your Hospitals
//           </h1>
//           <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">Easily locate the best hospitals near you with our smart search and recommendations.
//           </p>
    
//           <SearchBar
//               setSelectedLocation={setSelectedLocation}
//               setSelectedTreatment={setSelectedTreatment}
//               showCountry={false}
//               showCity={false}
//               showTreatment={true}
//               showLocation={true}
//               showDepartment={false}
//               showHospital={false}
//               showDoctor={false}
//           />
      
//         </div>
//       </ReusableHero>

//       {/* Lower Section */}
//       <div className="lowerSection w-full mx-15">
//         <div className="lowerFilter">
//           {/* Maps Container */}
          // <div className="mapsContainer">
          //   <iframe
          //     src="https://www.google.com/maps/embed?..."
          //     width=""
          //     height="233"
          //     className="map"
          //     allowFullScreen=""
          //     loading="lazy"
          //     referrerPolicy="no-referrer-when-downgrade"
          //     title="Wellness Tourism"
          //   ></iframe>
          // </div>
//           {/* Price & Filter Section */}
//           <div className="priceFilter">
//             <Collapse ghost expandIcon={() => null} items={filterItems} />
//           </div>
//         </div>

//         <div className=" mx-0 transform -translate-x-30">
//           <div className="results">
//             <div className="sorting">
//               <p>Sort By:</p>
//               <div className="applied-filters">
//                 {filters.location && (
//                   <span className="filter-tag">
//                     {filters.location}
//                     <Button
//                       className="clear-filter-btn"
//                       onClick={() => clearFilter("location")}
//                       label="✖"
//                     />
//                   </span>
//                 )}
//                 {filters.treatment && (
//                   <span className="filter-tag">
//                     {filters.treatment}
//                     <Button
//                       className="clear-filter-btn"
//                       onClick={() => clearFilter("treatment")}
//                       label="✖"
//                     />
//                   </span>
//                 )}
//               </div>
//             </div>
//             <p>Found {filteredResults.length} Results</p>
//           </div>

//           {/* Result Container */}
//           <div className="w-345 ">
//             {filteredWellness.length > 0 ? (
//               filteredWellness.map((wellness) => (
//                 <div className="resultContent" key={index}>
//                   <div className="resultAlign">
//                   <div className="resultLeftContent">
//                     <h1>{training.title}</h1>
//                     <div className="reviews">
//                       <div className="reviewsRate">
//                         <div className="star">
//                           <img src={image02} alt="star" />
//                         </div>
//                         <div className="reviewsValue">
//                           <p className="reviewsRating">
//                             {training.rating.score}
//                           </p>
//                           <p>({training.rating.reviews} reviews)</p>
//                         </div>
//                       </div>
//                       <div className="reviewsLocation">
//                         <IoLocationSharp className="reviewsIcon" />
//                         <p>{training.location}</p>
//                       </div>
//                     </div>
//                     <div className="tourismImgContainer">
//                     <div className="tourismImgList">
//                       {training.images.slice(0, 4).map((image, imgIndex) => (
//                         <img key={imgIndex} src={image.src} alt={image.alt} />
//                       ))}
//                     </div>
//                     </div>
//                     <div className="tourismDescMainPage">
//                       <h3>Description</h3>
//                       <p>{training.descriptionMain}</p>
//                     </div>
//                   </div>
//                   <div className="resultRightContent">
//                     <div className="resultRightAlign">
//                       <div className="label">
//                         <div className="labelImg"></div>
//                         <p>{training.pricing.discount}</p>
//                       </div>
//                       <div className="packageDetail">
//                         <div className="packagePrice">
//                           <h4>
//                             {training.pricing.totalCost} <span>/ Total</span>
//                           </h4>
//                         </div>
//                         <div className="packageDuration">
//                           <MdOutlineAccessTimeFilled className="reviewsIcon" />
//                           {training?.pricing?.stay && (
//                             <p>
//                               {training.pricing.stay.days} days{" "}
//                               {training.pricing.stay.nights} nights
//                             </p>
//                           )}
//                         </div>
//                         <div className="packagePerson">
//                           <BsPersonFill className="reviewsIcon" />
//                           {training?.pricing?.person && (
//                             <p>
//                               {training.pricing.person.min}-
//                               {training.pricing.person.max} Person
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                       <div className="packageBtn">
//                         <Button label="Explore Package" onClick={() => navigate(`/wellnessTourism/${training.id}`)} />
//                       </div>
//                     </div>
//                   </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No results found. Try different filters.</p>
//             )}

//             {/* Pagination */}
//             <Pagination
//               current={currentPage}
//               total={filteredResults.length}
//               pageSize={itemsPerPage}
//               onChange={(page) => setCurrentPage(page)}
//               showSizeChanger={false}
//             />
//           </div>
//         </div>
//       </div>

//       <BlogSection/>

//     </div>
//   );
// };

// export default WellnessTourismPage;















// /*

// import React, { useState } from "react";
// import "./WellnessTourism.css";



// const WellnessTourismPage = () => {
//   const [location, setLocation] = useState("");
//   const [treatment, setTreatment] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = () => {
//     if (location && treatment) {
//       setResults(hospitalsData); // Replace with a filtered API call if needed
//     }
//   };

//   return (
//     <div className="search-container">
//         <div className="hero">
//             <div className="col1">
//                 <h2 className="breadcrump">Home <span className="bigcircle">•</span> Wellness Tourism</h2>
//                 <h1 className="herotitle">Find Wellness Tourism</h1>
//             </div>
//             <div className="col2">
//                 <div className="innercol2">
//                     <div className="hero-container">
//                         <div className="searchbar1">
//                           <h2 className="locationlabel">Location</h2>
//                           <select value={location} onChange={(e) => setLocation(e.target.value)} className="location">
//                           <option value="">Select Location</option>
//                           <option value="USA">USA</option>
//                           <option value="India">I ndia</option>
//                           </select>
//                         </div>
//                         <div className="searchbar2">
//                           <h2 className="locationlabel">Treatment</h2>
//                           <select value={treatment} onChange={(e) => setTreatment(e.target.value)} className="location">
//                           <option value="">Select Treatment</option>
//                           <option value="PRP Treatment">PRP Treatment</option>
//                           <option value="Surgery">Surgery</option>
//                           </select>
//                         </div>
//                         <div className="searchbar3">
//                           <button className="searchbtn01" onClick={handleSearch}>Search</button>
//                           <button className="chatsupport">Chat Support</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//       {/* Main Content }
//       <div className="main-content">
//         {/* Sticky Sidebar }
//         <div className="sidebar">
//           <div className="map-placeholder">Map</div>
//           <div className="filters">
//             <button >Filter Price</button>
//             <button >Duration</button>
//             <button >Rating</button>
//             <button >Specials</button>
//           </div>
//         </div>

//         {/* Search Results }
//         <div className="results-container">
//           {results.length === 0 ? (
//             <p className="no-results">No results found. Please search.</p>
//           ) : (
//             results.map((hospital) => (
//               <div key={hospital.id} className="result-card">
//                 <div className="result-details">
//                   <h3>{hospital.title}</h3>
//                   <p>⭐ {hospital.rating} ({hospital.reviews} reviews) • {hospital.country}</p>
//                   <div className="hospital-images">
//                     {hospital.images.map((img, idx) => (
//                     <img key={idx} src={img} alt="Hospital" />
//                     ))}
//                   </div>
//                   <p className="description">Lorem ipsum dolor sit amet...</p>
//                 </div>
//                 <div className="price-container">
//                   <div>
//                     <p className="price">{hospital.price}</p>
//                     {/* <span className="discount">{hospital.discount}</span> }
//                     <p className="duration">{hospital.duration}</p>
//                     <p className="person">{hospital.persons}</p>
//                   </div>
//                   <button className="explore-btn">Explore Package</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WellnessTourismPage;*/



import image02 from "/src/assets/images/medical.webp";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { ReusableHero } from "../../components/ReusableHero";
import { wellnessData } from "../../data/constants";
import SearchBar from "/src/components/SearchBar.jsx";
import BlogSection from "/src/components/ReusableBlog.jsx";
import WellnessCard from "../../components/wellnessCardComp/wellnessCard";

// const wellnessData = [
//   { id: 1, title: "Luxury Spa", location: "Bali", treatment: "Massage", duration: "2 hours", price: "$120", people: "1 Person", rating: 4.5 },
//   { id: 2, title: "Detox Retreat", location: "Thailand", treatment: "Detox", duration: "5 days", price: "$800", people: "1 Person", rating: 4.8 },
//   { id: 3, title: "Yoga Retreat", location: "India", treatment: "Yoga", duration: "7 days", price: "$600", people: "1 Person", rating: 4.6 },
//   { id: 4, title: "Ayurveda Therapy", location: "India", treatment: "Ayurveda", duration: "3 days", price: "$400", people: "1 Person", rating: 4.7 },
// ];

const WellnessPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [filteredWellness, setFilteredWellness] = useState(wellnessData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const filtered = wellnessData.filter(
      (wellness) =>
        (!selectedCountry || wellness.country === selectedCountry) &&
        (!selectedTreatment || wellness.treatment === selectedTreatment)
    );
    setFilteredWellness(filtered);
    setCurrentPage(1); // Reset pagination on filter change
  }, [selectedCountry, selectedTreatment]);

  // Paginate filtered results
  const paginatedData = filteredWellness.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className=" bg-[#f9fafe] px-6 md:px-10 lg:px-16 py-8">
      
      <ReusableHero heroImage={image02} className="h-[550px]">
         <div className="flex justify-center  text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
           <div className="mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">Home 
             <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
             <span> Hospitals</span>
           </div>
           <h1 className=" w-200 px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">Transformative wellness tourism with treat global 
           </h1>
           <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">Easily locate the best hospitals near you with our smart search and recommendations.
           </p>
    
           <SearchBar
               setSelectedCountry={setSelectedCountry}
               setSelectedTreatment={setSelectedTreatment}
               showCountry={true}
               showCity={false}
               showTreatment={true}
               showLocation={false}
               showDepartment={false}
               showHospital={false}
               showDoctor={false}
           />
      
         </div>
      </ReusableHero>

      {/* Lower Section */}
      <div className="mt-8 flex flex-col md:flex-row gap-6">

        {/* Filters */}
        <aside className=" sticky w-full md:w-1/3 lg:w-1/4 bg-white p-5 rounded-lg shadow">

          <div className="mapsContainer">
            <iframe
              src="https://www.google.com/maps/embed?..."
              width=""
              height="233"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wellness Tourism"
            ></iframe>
          </div>

          <h2 className="font-bold text-lg mb-4">Filters</h2>
          <select onChange={(e) => setSelectedCountry(e.target.value)} className="w-full p-2 border rounded-md mb-3">
            <option value="">All Locations</option>
            <option value="Bali">Bali</option>
            <option value="Thailand">Thailand</option>
            <option value="India">India</option>
          </select>
          <select onChange={(e) => setSelectedTreatment(e.target.value)} className="w-full p-2 border rounded-md">
            <option value="">All Treatments</option>
            <option value="Massage">Massage</option>
            <option value="Detox">Detox</option>
            <option value="Yoga">Yoga</option>
            <option value="Ayurveda">Ayurveda</option>
          </select>
        </aside>

        {/* Results Section */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <div className="flex justify-between items-center -mt-10 mb-4">
            <p className="text-gray-600 w-full text-right font-semibold">Found {filteredWellness.length} Results</p>
          </div>

          {/* Wellness Cards */}
          {paginatedData.length > 0 ? (
            paginatedData.map((wellness) => (
              <div className="bg-white rounded-4xl p-">
              <WellnessCard key={wellness.id} {...wellness} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No results found.</p>
          )}

          {/* Pagination */}
          <Pagination
            className="flex justify-center mt-6"
            total={filteredWellness.length}
            pageSize={itemsPerPage}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      {/* Map Section
      <div className="mt-8 bg-white p-6 shadow rounded-lg">
        <h2 className="text-lg font-bold mb-3">Map View</h2>
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-[233px] border rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wellness Tourism"
        />
      </div> */}
      <BlogSection/>
      {/* <WellnessCard/> */}
    </div>
  );
};

export default WellnessPage;
