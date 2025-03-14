import React from "react";
import applo from "../../assets/images/appolo.webp";
import { ReusableHero } from "../../components/ReusableHero";
import { blogData, faqs } from "../../data/constants";
import Appointment from "../../components/Appoiment";
import FAQ from "../../components/Faq";
function SingleBlog() {
  return (
    <>
      <ReusableHero heroImage={applo}>
        <div className="flex justify-center   px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <p className="font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Blogs</span>
          </p>
          <h1 className="lg:text-3xl max-w-2xl font-semibold text-xl font-figtree md:text-2xl ">
            {blogData.title}
          </h1>
          <p className="text-lg font-manrope ">
            {blogData.hospital} • {blogData.date}
          </p>
        </div>
      </ReusableHero>

      <div className="container mx-auto flex flex-col md:flex-row gap-6 py-5 px-4">
        <div className="flex-[7] lg:ps-7 bg-white py-8 space-y-5 shadow-lg  rounded-lg p-4">
          <div className="">
            {blogData.sections.map((section, index) => (
              <div key={index} className="mt-6">
                <h3 className="text-lg font-semibold font-figtree">
                  {section.heading}
                </h3>
                <p className=" font-semibold font-manrope text-[#6B7280] mt-2">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[3]">
          <div className="bg-[#005897] text-white rounded-t-lg p-6">
            <h1 className="font-figtree font-bold text-xl md:text-2xl lg:text-3xl">
              Get Free evaluation
            </h1>
            <p className="font-manrope mt-2 text-sm">
              Treatment plan and quote within few Days
            </p>
          </div>

          <Appointment />
        </div>
      </div>

      <FAQ faqs={faqs} />
    </>
  );
}

export default SingleBlog;
