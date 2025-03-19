import React from "react";
import Form from "../components/Form";
import { contactUsData, faqs } from "../data/constants";
import { heading } from "../assets/styles/Style";

import { Icon } from "@iconify/react";
import { ReusableHero } from "../components/ReusableHero";
import hero from "../assets/images/contact.webp";
import FAQ from "../components/Faq";
import { Button } from "../components/Button";

const Contact = () => {
  return (
    <>
      <ReusableHero heroImage={hero} className="h-[550px]">
        <div className="flex justify-center text-center mt-20 md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <div className="mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Contact Us</span>
          </div>
          <h1 className=" px-8 leading-14 lg:text-5xl font-semibold text-xl font-figtree md:text-2xl">
            Contact Us
          </h1>
          <p className="max-w-[950px] px-8 text-[22px] font-manrope font-light">
            Access expert treatments, trusted hospitals, skilled doctors, online
            medical opinions, wellness tourism options, and partner
            opportunities, all designed to make your health journey easy.
          </p>
        </div>
      </ReusableHero>

      <div className=" mx-15 px-2 md:pt-10 my-5 md:px-0 flex flex-wrap justify-between">
        <h1 className={heading}>
          Our <span className="text-blue-600 ">Details</span>
        </h1>
        <Button
          name="Chat Support"
          startIcon={<Icon icon="mdi:whatsapp" xwidth="24px" height="24px" />}
        />
      </div>
      <Form
        title="Get In Touch With Us "
        subTitle={
          <>
            Contact <span className="text-[#5057E5]">Us</span>{" "}
          </>
        }
        data={contactUsData}
      />
      <FAQ faqs={faqs} />
    </>
  );
};

export default Contact;
