import React from "react";
import { homeTreatments } from "../../data/constants";
import "./style.css";
import { Button } from "../../components/Button";
import { Icon } from "@iconify/react";
import { heading } from "../../assets/styles/Style";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className="py-10 container mx-auto px-2 md:px-0">
      <div>
        <div className="text-center">
          <h1 className={heading}>
            Discover our<span className="text-secondary"> Services</span>
          </h1>
          <p className="text-[#666666] md:max-w-lg mx-auto text-sm md:text-base font-manrope mt-4">
            Access expert treatments, top hospitals, and personalized care for
            all your health and wellness needs.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-4">
           <Link to="/doctors"> <Button
              name="View All"
              endIcon={
                <Icon
                  icon="mingcute:arrow-right-line"
                  width="24px"
                  height="24px"
                />
              }
            /></Link>
            <Button
              name="Chat Support"
              startIcon={
                <Icon icon="ri:whatsapp-fill" width="24px" height="24px" />
              }
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center place-content-center py-10">
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
