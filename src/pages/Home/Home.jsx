import React from "react";
import Services from "./Services";
import About from "./About";
import Form from "../../components/Form";
import { ReusableHero } from "../../components/ReusableHero";
// import hero_image from "../../assets/images/treatment.webp";
import { SearchBar } from "../../components/SearchBar";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "../../components/Button";
import { homeWhyChooseUS } from "../../data/constants";
import SuccessStories from "../../components/SucessStories";
import Popular from "../../components/Popular";
import video01 from "../../assets/videos/homevideo1.mp4";
// import IndividualHospital from "../Hospital/IndividualHospital/IndividualHospital";
// import WellnessTourismPage from "../WellnessTourism/WellnessTourism";

const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <ReusableHero insert heroVideo={video01}>
        <div className="text-center px-2 md:px-0 py-20 flex items-center justify-end flex-col gap-4 text-white">
          <h1 className="lg:text-5xl font-semibold text-2xl font-figtree md:text-3xl lg:leading-[66px]">
            Health Care made simple, <br className="hidden lg:block" />
            Wellness journeys made easy
          </h1>
          <p className="max-w-[600px] text-lg font-manrope font-medium">
            Access expert care, top hospitals, online consultations, wellness
            tourism, and partner options for a seamless health journey.
          </p>
          <div className="flex p-1 bg-white items-center w-full max-w-2xl mx-auto rounded-full overflow-hidden shadow-md border border-gray-300">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Doctor, Treatments, Hospital"
              className="w-full py-3 px-5 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
           <Button onClick={handleSearch} name="Search" startIcon={ <Icon icon="mdi:magnify" className="text-xl" />}/>
           
          </div>
          <SearchBar />
        </div>
      </ReusableHero>
      <Services />
      <About  />
      <Form title="Book An Appointment" subTitle={<>Why <span className="text-[#5057E5]">Choose Us</span> </>} data={homeWhyChooseUS}  />
      <SuccessStories/>
      <Popular/>
    </>
  );
};

export default Home;