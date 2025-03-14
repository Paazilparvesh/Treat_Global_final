import React from "react";
import about_img from "../../assets/images/about.webp";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react";
import { heading } from "../../assets/styles/Style";

const About = () => {
  return (
    <section className="flex justify-evenly flex-wrap px-2  container mx-auto w-full gap-8 py-10">
      <div className="max-w-[650px] flex-shrink">
        <img src={about_img} alt="About Treat Global" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center  lg:items-start text-center lg:text-left">
        <h2 className={heading}>
          <span className="text-primary">About</span> Treat Global
        </h2>
        <p className="text-[#666666] max-w-lg leading-7 md:text-lg my-4">
          Treat Global is a one-stop platform for medical tourism and remote
          healthcare, connecting patients to global treatment options, expert
          second opinions, and tailored medical travel packages. It ensures a
          seamless, transparent experience for users, partners, and corporate
          clients.
        </p>{" "}
        <Button
          name="View All"
          endIcon={
            <Icon icon="mingcute:arrow-right-line" width="24px" height="24px" />
          }
        />
      </div>
    </section>
  );
};

export default About;
