import React from "react";
import { ReusableHero } from "../components/ReusableHero";
import hero from "../assets/images/medical.webp";
import FAQ from "../components/Faq";
import { faqs, medicalsData } from "../data/constants";
import Form from "../components/Form";
function MedicalOpinions() {
  return (
    <>
      <ReusableHero heroImage={hero} >
        <div className="flex justify-center text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <p className="font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Medical Opinions</span>
          </p>
          <h1 className="lg:text-3xl font-semibold text-xl font-figtree md:text-2xl ">
            Let our Expert's Medical opinions aid
            <br className="hidden lg:block" />
            your health and well being
          </h1>
          <p className="max-w-[784px] text-lg font-manrope font-medium">
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
      <FAQ faqs={faqs} />
    </>
  );
}

export default MedicalOpinions;
