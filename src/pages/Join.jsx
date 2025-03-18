import React from "react";
import Form from "../components/Form";
import { faqs, joinUsData } from "../data/constants";
import { heading } from "../assets/styles/Style";
import { Button } from "../components/Button";
import { Icon } from "@iconify/react";
import { ReusableHero } from "../components/ReusableHero";
import hero from "../assets/images/join_us.webp";
import FAQ from "../components/Faq";
const Join = () => {
  return (
    <>
      <ReusableHero heroImage={hero} className="h-[550px]">
        <div className="flex justify-center text-center mt-20 md:text-start px-4 md:ps-10 py-20 lg: min-h-[450px] flex-col gap-4 text-white">
          <div className=" mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Join As A Partner</span>
          </div>
          <h1 className=" px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl ">
            Partner with Treat Global and Unlock New{" "}
            <br className="hidden lg:block" />
            Opportunities!
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
            Partners refer users to our medical team for treatment approval and
            receive real-time updates. They earn incentives based on successful
            referrals, treatment completions, and patient outcomes
          </p>
        </div>
      </ReusableHero>

      <div className=" mx-15 px-2 md:pt-10 my-5 md:px-0 flex flex-wrap justify-between">
        <h1 className={heading}>
          Join Us A <span className="text-blue-600">Partner</span>
        </h1>
        <Button
          name="Chat Support"
          startIcon={<Icon icon="mdi:whatsapp" width="24px" height="24px" />}
        />
      </div>
      <Form
        title="Become a partner at treatGlobal"
        subTitle={
          <>
            Joining <span className="text-[#5057E5]">Process</span>{" "}
          </>
        }
        data={joinUsData}
      />
      <FAQ faqs={faqs} />
    </>
  );
};

export default Join;
