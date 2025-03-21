import React from "react";
import about_img from "../../assets/images/about.webp";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react";
// import { heading } from "../../assets/styles/Style";

const About = () => {
  return (
    <section id="aboutpage" className="flex justify-evenly flex-wrap px-2 mx-1 w-full gap-8 py-10">
      <div className="max-w-[900px] flex-shrink bg-white">
        <img src={about_img} alt="About Treat Global" className="w-full bg-white" />
      </div>
      <div className="flex flex-col items-center justify-center  lg:items-start text-center lg:text-left text">
        <h2 className="lg:text-5xl font-semibold font-figtree text-3xl  text-[#3d77f6] " >
          <span className="text-primary">About</span> Treat Global
        </h2>
        <p className="text-[#666666] max-w-145 leading-7 md:text-lg my-4">
          Treat Global is a one-stop platform for medical tourism and remote
          healthcare, connecting patients to global treatment options, expert
          second opinions, and tailored medical travel packages. It ensures a
          seamless, transparent experience for users, partners, and corporate
          clients.
        </p>{" "}
        <Button
          name="About Us"
          endIcon={
            <Icon icon="mingcute:arrow-right-line" width="60px" height="30px" />
          } 
        />
      </div>
    </section>
  );
};

export default About;
