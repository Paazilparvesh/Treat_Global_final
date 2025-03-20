import React from "react";
import { ReusableHero } from "../components/ReusableHero";
import hero from "../assets/images/medical.webp";
import FAQ from "../components/Faq";
import { faqs, medicalsData } from "../data/constants";
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
            Let our Expert's Medical opinions aid
            <br className="hidden lg:block" />
            your health and well being
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
            At TreatGlobal, we specialize in connecting you with top-tier,
            board-certified physicians from across the nation to provide paid
            expert Medical opinions through email.
          </p>
        </div>
      </ReusableHero>

      <Form
        title="Request a Medical opinion "
        subTitle={
          <>
            Requesting <span className="text-[#5057E5]">Medical opinion</span>{" "}
          </>
        }
        data={medicalsData}
      />
      
      <SucessStories />
      <FAQ faqs={faqs} />
    </>
  );
}

export default MedicalOpinions;
