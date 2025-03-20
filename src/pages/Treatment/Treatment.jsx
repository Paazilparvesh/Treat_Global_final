import React from "react";
import { ReusableHero } from "../../components/ReusableHero";
import hero from "../../assets/images/treatment.webp";
import { heading } from "../../assets/styles/Style";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react";
import { faqs, treatment } from "../../data/constants";
import SuccessStories from "../../components/SucessStories";
import FAQ from "../../components/Faq";
// import SingleTreatent from "./SingleTreatment";
import { Link } from "react-router-dom";
const Treatment = () => {
  return (
    <>
      <ReusableHero heroImage={hero} className="h-[550px]">
        <div className="flex justify-center text-center mt-20 md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <p className="mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Treatments</span>
          </p>
          <h1 className=" px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">
            Comprehensive medical treatments for
            <br className="hidden lg:block" />
            improved health outcomes.
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
            Explore a comprehensive list of treatments categories tailored to
            your needs. Treat Global offers a curated catalog of departments,
            hospitals, and doctors, covering the full spectrum of therapeutic
            procedures.
          </p>
        </div>
      </ReusableHero>

      <div className="mx-15 px-2  md:pt-10  my-5 md:px-0 ">
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className={heading}>
          Discover our <span className="text-[#5057E5]">Treatment</span>
          </h1>
          <p className="max-w-lg pb-4  text-[#666666] text-center">
          Access expert treatments, top hospitals, and personalized care for all
          your health and wellness needs.
          </p>
          <div>
              {" "}
            <Button
              name="Chat Support"
              startIcon={<Icon icon="mdi:whatsapp" xwidth="24px" height="24px" />}
            />
          </div>
        </div>

 <div className="pt-8">
 {treatment.map((section, index) => (
  <div key={index}>
    <h1 className={`${heading} ps-2 lg:ps-0`}>{section.heading}</h1>
    <div className="grid mb-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center place-items-center lg:place-content-evenly lg:place-items-stretch py-10">
      {section.data.map((data, i) => (
        <div
          key={i}
          className="home_serviceCard"
          style={{ backgroundColor: data.bgColor }}
        >
          <div className="home_serviceInner">
            <div>
              <img src={data.image} alt={data.title} />
            </div>
            <h2 className="text-lg font-semibold mt-2">{data.title}</h2>
            <p className="text-gray-600 mt-1">{data.des}</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="ps-4 font-figtree text-gray-500">
              Starting from <br />
              ₹30,000/-
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              <Link to="/treatments/1">
              {data.btnLink}
              <span className="icon">→</span></Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
))}
 </div>
      </div>

     
      <SuccessStories />
      <FAQ faqs={faqs} /> 
    </>
  );
};

export default Treatment;
