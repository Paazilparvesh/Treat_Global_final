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
      <ReusableHero heroImage={hero}>
        <div className="flex justify-center  text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <p className="font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Join As A Partner</span>
          </p>
          <h1 className="lg:text-3xl font-semibold text-xl font-figtree md:text-2xl ">
            Partner with Treat Global and Unlock New{" "}
            <br className="hidden lg:block" />
            Opportunities!
          </h1>
          <p className="max-w-[784px] text-lg font-manrope font-medium">
            Partners refer users to our medical team for treatment approval and
            receive real-time updates. They earn incentives based on successful
            referrals, treatment completions, and patient outcomes
          </p>
        </div>
      </ReusableHero>

      <div className="container mx-auto px-2 md:pt-10 my-5 md:px-0 flex flex-wrap justify-between">
        <h1 className={heading}>
          Join Us A <span className="text-[#5057E5]">Partner</span>
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
