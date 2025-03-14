import React from "react";
import hero from "../../assets/images/treatment.webp";
import { ReusableHero } from "../../components/ReusableHero";
import { heading } from "../../assets/styles/Style";
import BlogCard from "../../components/BlogCard";
import hospital from "../../assets/images/hospital.webp";

function Blog() {
  const doctors = Array.from({ length: 12 });
  return (
    <>
      <ReusableHero heroImage={hero}>
        <div className="flex justify-center  text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <p className="font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Blog</span>
          </p>
          <h1 className="lg:text-3xl font-semibold text-xl font-figtree md:text-2xl ">
            Our Blog
          </h1>
          <p className="max-w-[784px] text-lg font-manrope font-medium">
            Explore our latest blogs for insights, updates, and expert tips.
            Stay informed and make the most of our platform!
          </p>
        </div>
      </ReusableHero>

      <div className="flex justify-between px-4 flex-wrap gap-4 container mx-auto py-10">
        <h1 className={heading}>
          Related <span className="text-secondary">Blog</span>{" "}
        </h1>
        <span className="text-gray-500 font-manrope  font-bold">
          Found 13 Results
        </span>
      </div>
      <div className=" px-4 pb-20  container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:place-content-evenly lg:place-items-stretch gap-6 p-4">
          {doctors.map(() => (
            <BlogCard
              imageUrl={hospital}
              date="13 March 2022"
              title="Step-by-Step Guide to a Smooth Joining Process"
              description="New to the platform? Follow this easy guide to register, refer, track updates, and receive..."
              tags={["physiotherapy", "health and wellness"]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
