import React from "react";
import image02 from "/src/assets/images/medical.webp";
import { ReusableHero } from "../../components/ReusableHero";
import "./WellnessTourism.css";
 import {
  Breadcrumb,
  Collapse,
  Slider,
  DatePicker,
  Rate,
  Pagination,
 } from "antd";
import { locations, trainingDetails, treatments } from "../../data/mockData";
import useCustomState from "../../hooks/useCustomState";
 import FilterSearch from "../../components/filterSearch";
// import dayjs from "dayjs";
 import { IoLocationSharp } from "react-icons/io5";
 import Button from "../../components/buttons";
 import { MdOutlineAccessTimeFilled } from "react-icons/md";
 import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

 const { RangePicker } = DatePicker;

const WellnessTourismPage = () => {
  const [tempFilters, setTempFilters] = useCustomState({
    location: "",
    treatment: "",
  });

  const [filters, setFilters] = useCustomState({
    location: "",
    treatment: "",
  });

  const handleTempFilterChange = (key, value) => {
    setTempFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setFilters(tempFilters);
    setCurrentPage(1);
  };

  const [currentPage, setCurrentPage] = useCustomState(1);
  const itemsPerPage = 3;

  const filteredResults = trainingDetails.filter((training) => {
    return (
      (!filters.location || training.location === filters.location) &&
      (!filters.treatment || training.treatment === filters.treatment)
    );
  });

  const clearFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: "" }));
    setTempFilters((prev) => ({ ...prev, [key]: "" }));
  };

  const paginatedResults = filteredResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // const [priceRange, setPriceRange] = useCustomState([0, 1000]);
  const [dates, setDates] = useCustomState([]);
  const [rating, setRating] = useCustomState(0);


  const filterItems = [
    {
      key: "1",
      label: <div className="custom-collapse-header">Filter Price</div>,
      children: (
        <div>
          {/* <div className="price-range-labels">
            <span>Min: ${priceRange[0]}</span>
            <span>Max: ${priceRange[1]}</span>
          </div> */}
          {/* <Slider
            range
            min={0}
            max={1000}
            value={priceRange}
            onChange={setPriceRange}
            tooltip={{ formatter: (value) => `$${value}` }}
          /> */}
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="custom-collapse-header">Duration</div>,
      children: (
        <RangePicker
          value={dates}
          onChange={setDates}
          format="YYYY-MM-DD"
          // disabledDate={(current) =>
          //   current && current < dayjs().startOf("day")
          // }
        />
      ),
    },
    {
      key: "3",
      label: <div className="custom-collapse-header">Rating</div>,
      children: <Rate allowHalf value={rating} onChange={setRating} />,
    },
    {
      key: "4",
      label: <div className="custom-collapse-header">Specials</div>,
      children: <p>No Specials</p>,
    },
  ];

  const navigate = useNavigate();

  return (


    <div className="container">
      

          <ReusableHero heroImage={image02}>
            <div className="flex justify-center  text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
              <p className="font-manrope text-sm  md:text-lg flex  items-center gap-4">Home 
              <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
              <span> Hospitals</span>
              </p>
              <h1 className="lg:text-3xl font-semibold text-xl font-figtree md:text-2xl ">Find Your Hospitals
              </h1>
              <p className="max-w-[784px] text-lg font-manrope font-medium">Easily locate the best hospitals near you with our smart search and recommendations.
              </p>
      
             
            <FilterSearch
              filters={{ location: locations, treatment: treatments }}
              onFilterChange={handleTempFilterChange}
              handleSearch={applyFilters}
            />
      
            </div>
          </ReusableHero>

      {/* Lower Section */}
      <div className="lowerSection">
        <div className="lowerFilter">
          {/* Maps Container */}
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
          {/* Price & Filter Section */}
          <div className="priceFilter">
            <Collapse ghost expandIcon={() => null} items={filterItems} />
          </div>
        </div>

        <div className="lowerCard">
          <div className="results">
            <div className="sorting">
              <p>Sort By:</p>
              <div className="applied-filters">
                {filters.location && (
                  <span className="filter-tag">
                    {filters.location}
                    <Button
                      className="clear-filter-btn"
                      onClick={() => clearFilter("location")}
                      label="✖"
                    />
                  </span>
                )}
                {filters.treatment && (
                  <span className="filter-tag">
                    {filters.treatment}
                    <Button
                      className="clear-filter-btn"
                      onClick={() => clearFilter("treatment")}
                      label="✖"
                    />
                  </span>
                )}
              </div>
            </div>
            <p>Found {filteredResults.length} Results</p>
          </div>

          {/* Result Container */}
          <div className="resultContainer">
            {paginatedResults.length > 0 ? (
              paginatedResults.map((training, index) => (
                <div className="resultContent" key={index}>
                  <div className="resultAlign">
                  <div className="resultLeftContent">
                    <h1>{training.title}</h1>
                    <div className="reviews">
                      <div className="reviewsRate">
                        <div className="star">
                          <img src={image02} alt="star" />
                        </div>
                        <div className="reviewsValue">
                          <p className="reviewsRating">
                            {training.rating.score}
                          </p>
                          <p>({training.rating.reviews} reviews)</p>
                        </div>
                      </div>
                      <div className="reviewsLocation">
                        <IoLocationSharp className="reviewsIcon" />
                        <p>{training.location}</p>
                      </div>
                    </div>
                    <div className="tourismImgContainer">
                    <div className="tourismImgList">
                      {training.images.slice(0, 4).map((image, imgIndex) => (
                        <img key={imgIndex} src={image.src} alt={image.alt} />
                      ))}
                    </div>
                    </div>
                    <div className="tourismDescMainPage">
                      <h3>Description</h3>
                      <p>{training.descriptionMain}</p>
                    </div>
                  </div>
                  <div className="resultRightContent">
                    <div className="resultRightAlign">
                      <div className="label">
                        <div className="labelImg"></div>
                        <p>{training.pricing.discount}</p>
                      </div>
                      <div className="packageDetail">
                        <div className="packagePrice">
                          <h4>
                            {training.pricing.totalCost} <span>/ Total</span>
                          </h4>
                        </div>
                        <div className="packageDuration">
                          <MdOutlineAccessTimeFilled className="reviewsIcon" />
                          {training?.pricing?.stay && (
                            <p>
                              {training.pricing.stay.days} days{" "}
                              {training.pricing.stay.nights} nights
                            </p>
                          )}
                        </div>
                        <div className="packagePerson">
                          <BsPersonFill className="reviewsIcon" />
                          {training?.pricing?.person && (
                            <p>
                              {training.pricing.person.min}-
                              {training.pricing.person.max} Person
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="packageBtn">
                        <Button label="Explore Package" onClick={() => navigate(`/wellnessTourism/${training.id}`)} />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No results found. Try different filters.</p>
            )}

            {/* Pagination */}
            <Pagination
              current={currentPage}
              total={filteredResults.length}
              pageSize={itemsPerPage}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessTourismPage;

/*

import React, { useState } from "react";
import "./WellnessTourism.css";

const hospitalsData = [
  {
    id: 1,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "USA",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
  },
  {
    id: 2,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "India",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
  },
  {
    id: 3,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "USA",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
  },
  {
    id: 4,
    title: "4 Day 200HR Breathwork Facilitator Training",
    rating: 4.96,
    reviews: 672,
    country: "India",
    price: "₹15,000",
    discount: "-25%",
    duration: "2 days 3 nights",
    persons: "1-2 Person",
    images: ["/image1233.jpg", "/image1233.jpg", "/image1233.jpg"], // Replace with actual image URLs
  },
  // Add more hospital data objects as needed
];

const WellnessTourismPage = () => {
  const [location, setLocation] = useState("");
  const [treatment, setTreatment] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (location && treatment) {
      setResults(hospitalsData); // Replace with a filtered API call if needed
    }
  };

  return (
    <div className="search-container">
        <div className="hero">
            <div className="col1">
                <h2 className="breadcrump">Home <span className="bigcircle">•</span> Wellness Tourism</h2>
                <h1 className="herotitle">Find Wellness Tourism</h1>
            </div>
            <div className="col2">
                <div className="innercol2">
                    <div className="hero-container">
                        <div className="searchbar1">
                          <h2 className="locationlabel">Location</h2>
                          <select value={location} onChange={(e) => setLocation(e.target.value)} className="location">
                          <option value="">Select Location</option>
                          <option value="USA">USA</option>
                          <option value="India">I ndia</option>
                          </select>
                        </div>
                        <div className="searchbar2">
                          <h2 className="locationlabel">Treatment</h2>
                          <select value={treatment} onChange={(e) => setTreatment(e.target.value)} className="location">
                          <option value="">Select Treatment</option>
                          <option value="PRP Treatment">PRP Treatment</option>
                          <option value="Surgery">Surgery</option>
                          </select>
                        </div>
                        <div className="searchbar3">
                          <button className="searchbtn01" onClick={handleSearch}>Search</button>
                          <button className="chatsupport">Chat Support</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Main Content }
      <div className="main-content">
        {/* Sticky Sidebar }
        <div className="sidebar">
          <div className="map-placeholder">Map</div>
          <div className="filters">
            <button >Filter Price</button>
            <button >Duration</button>
            <button >Rating</button>
            <button >Specials</button>
          </div>
        </div>

        {/* Search Results }
        <div className="results-container">
          {results.length === 0 ? (
            <p className="no-results">No results found. Please search.</p>
          ) : (
            results.map((hospital) => (
              <div key={hospital.id} className="result-card">
                <div className="result-details">
                  <h3>{hospital.title}</h3>
                  <p>⭐ {hospital.rating} ({hospital.reviews} reviews) • {hospital.country}</p>
                  <div className="hospital-images">
                    {hospital.images.map((img, idx) => (
                    <img key={idx} src={img} alt="Hospital" />
                    ))}
                  </div>
                  <p className="description">Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="price-container">
                  <div>
                    <p className="price">{hospital.price}</p>
                    {/* <span className="discount">{hospital.discount}</span> }
                    <p className="duration">{hospital.duration}</p>
                    <p className="person">{hospital.persons}</p>
                  </div>
                  <button className="explore-btn">Explore Package</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WellnessTourismPage;*/