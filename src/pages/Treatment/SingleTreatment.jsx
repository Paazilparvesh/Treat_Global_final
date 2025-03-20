import React from "react";
import { Icon } from "@iconify/react";
import { faqs, singleTreatment } from "../../data/constants";
import FAQ from "../../components/Faq";
import Appointment from "../../components/Appoiment";
import PopularHospitals from "../../components/PopularHospitals";
import PopularDoctors from "../../components/PopularDoctors";

const SingleTreatment = () => {
  
  const handleShare = async () => {
    const shareData = {
      title: singleTreatment.heading,
      text: singleTreatment.desc,
      url: window.location.href,
    };
  
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("Content shared successfully");
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };
  return (
    <div >
   
      <div className="mx-10 px-4 border-b-2 border-[#E5E7EB] flex justify-between items-end pt-10 p-4">
        <div>
          <h1 className="font-bold font-figtree lg:text-5xl md:text-3xl text-2xl">
            {singleTreatment.heading}
          </h1>
          <p className="font-manrope text-sm mt-2 text-[#737373]">
            ⭐ {singleTreatment.review}
          </p>
        </div>

        <span onClick={handleShare} className="flex items-center gap-1 text-black cursor-pointer">
          <Icon icon="icon-park-outline:share" width="16px" height="16px" /> Share
        </span>
      </div>

      
      <div className="mx-10 flex flex-col md:flex-row gap-6 py-5 px-4">
       
        <div className="flex-[7] bg-white py-8 space-y-5 shadow-lg rounded-3xl p-4">
          <img
            src={singleTreatment.image}
            alt="Appendix Surgery"
            className="w-full p-5 h-auto rounded-lg"
          />
          <div className="bg-[#dae0ef] m-5 font-manrope border-l-8 border-[#2f55a7] p-4">
            <h5 className="font-medium  text-xl lg:text-2xl">
              {singleTreatment.heading}
            </h5>
            <p className="mt-2">{singleTreatment.desc}</p>
          </div>
          <div className="m-5">
            <h2 className="text-xl font-semibold font-figtree">
              {singleTreatment.overview.title}
            </h2>
            <p className="text-[#6B7280] mx-5 text-sm md:text-base font-manrope mt-2 whitespace-pre-wrap">
              {singleTreatment.overview.content}
            </p>
          </div>
          <div className="m-5">
            <h2 className="text-xl font-semibold font-figtree">
              {singleTreatment.heartValveReplacement.title}
            </h2>
            <p className="text-[#6B7280] mx-5 font-manrope text-sm md:text-base mt-2 whitespace-pre-wrap">
              {singleTreatment.heartValveReplacement.content}
            </p>
          </div>
        </div>

     
        <div className="flex-[3]">
          <div className="bg-[#005897] p-10 text-white m-auto text-center rounded-t-lg">
            <h1 className="font-figtree font-bold text-xl md:text-2xl lg:text-3xl">
              Get Free Evaluation
            </h1>
            <p className="font-manrope mt-2 text-sm">
              Treatment plan and quote within few days
            </p>
          </div>
          
          <Appointment/>

        </div>
      </div>
      <div className="w-full mx-10">
        <PopularHospitals/>
      </div>
      <FAQ faqs={faqs}/>
      <PopularDoctors/>
    </div>
  );
};

export default SingleTreatment;
