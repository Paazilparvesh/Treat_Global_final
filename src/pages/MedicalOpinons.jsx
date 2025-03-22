import React from "react";
import { ReusableHero } from "../components/ReusableHero";
import hero from "../assets/images/medical.webp";
import FAQ from "../components/Faq";
import { medicalsData } from "../data/constants";
import Form from "../components/Form";
import SucessStories from "../components/SucessStories";

function MedicalOpinions() {
  return (
    <>
      <ReusableHero heroImage={hero} className="h-[550px]" >
        <div className="flex justify-center text-center mt-20 md:text-start px-4 md:ps-10 py-20 lg: min-h-[450px] flex-col gap-4 text-white">
          <p className=" mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Medical Opinions</span>
          </p>
          <h1 className=" px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl ">
          Elevate Your Well-being,
            <br className="hidden lg:block" />
            Personalized Health & Wellness Solution
          </h1>
          <p className="max-w-[1250px] px-8 text-[22px] font-manrope font-light">
          Explore tailored Health and Wellness programs designed to enhance physical, mental and emotional well- being. Receive expert support in the best nutrition and diet planning, exercise and fitness, stress management, and preventive care strategies for a healthier, balanced life.
          </p>
        </div>
      </ReusableHero>

      <Form
        title="Request a Medical opinion "
        subTitle={
          <>
            How <span className="text-[#5057E5]"> We Care</span>{" "}
          </>
        }
        data={medicalsData}
      />
      
      <SucessStories />
      <FAQ category="medicalOpinion"/>
    </>
  );
}

export default MedicalOpinions;
