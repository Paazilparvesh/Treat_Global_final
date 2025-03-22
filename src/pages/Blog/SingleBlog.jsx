import React from "react";
import apolo from "../../assets/images/appolo.webp";
import { ReusableHero } from "../../components/ReusableHero";
import { blogInnerData, faqs } from "../../data/constants";
import Appointment from "../../components/Appoiment";
import FAQ from "../../components/Faq";


function SingleBlog() {
  return (
    <>
      <ReusableHero heroImage={apolo} className="h-[550px]">
        <div className="flex justify-center text-center mt-20 md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <div className="mx-8 font-manrope text-2xl md:text-[20px] flex items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Blogs</span>
          </div>
          <h1 className=" px-8 leading-14 w-300 lg:text-5xl  font-semibold text-xl font-figtree md:text-2xl ">
            {blogInnerData.title}
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
            {blogInnerData.hospital} • {blogInnerData.date}
          </p>
        </div>
      </ReusableHero>

      <div className=" mx-10 mb-10 bg-[#f9fafe] flex flex-col md:flex-row gap-6 py-5">
        <div className="flex-[7] lg:ps-7 bg-white py-8 space-y-5 shadow-lg  rounded-lg px-4">
          <div className="">
            {blogInnerData.sections.map((blog) => (
              <div key={blog.id} className="mt-6 pl-4 pr-10">
                <h3 className="text-lg font-semibold font-figtree">
                  {blog.heading}
                </h3>
                <p className=" font-semibold font-manrope text-[#6B7280] mt-2">
                  {blog.content}
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
