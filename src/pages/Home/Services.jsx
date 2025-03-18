import React from "react";
import { homeTreatments } from "../../data/constants";
import "./style.css";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react";
// import { heading } from "../../assets/styles/Style";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className="py-10 mx-auto px-2 md:px-0">
      <div>
        <div className="text-center">
          <h1 className="lg:text-6xl font-semibold font-figtree  text-[#29569c] ">
            Discover Our<span className="text-secondary"> Services</span>
          </h1>
          <p className="text-[#666666] md:max-w-220 mx-auto text-sm md:text-2xl font-manrope mt-4">
            Access expert treatments, top hospitals, and personalized care for
            all your health and wellness needs.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-4">
           <Link to="/doctors"> <Button
              name="View All"
              endIcon={
                <Icon
                  icon="mingcute:arrow-right-line"
                  width="35px"
                  height="35px"
                />
              }
            /></Link>
            <Button
              name="Chat Support"
              startIcon={
                <Icon icon="ri:whatsapp-fill" width="35px" height="35px" />
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-evenly w-full mt-15">
        {homeTreatments.map((data, i) => (
          <div
            key={i}
            className="home_serviceCard"
            style={{ backgroundColor: data.bgColor }}
          >
            <div className="home_serviceInner">
              <div>
                <img src={data.image} />
              </div>
              <h2>{data.title}</h2>
              <p>{data.des}</p>
            </div>
            <div>
              <button>
                {data.btnLink}
                <span className="icon">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
