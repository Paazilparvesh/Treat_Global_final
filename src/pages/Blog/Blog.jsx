import React from "react";
import hero from "../../assets/images/treatment.webp";
import { ReusableHero } from "../../components/ReusableHero";
import { heading } from "../../assets/styles/Style";
import BlogCard from "../../components/BlogCard";
import hospital from "../../assets/images/hospital.webp";

function Blog() {
  const blogs = Array.from({ length: 12 });
  return (
    <>
      <ReusableHero heroImage={hero} className="h-[550px]" >
        <div className="flex justify-center text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
          <div className="mx-8 font-manrope text-sm  md:text-lg flex  items-center gap-4">
            Home <div className="size-1 md:size-2 bg-white  rounded-full"></div>{" "}
            <span> Blog</span>
          </div>
          <h1 className=" px-8 leading-14 w-300 lg:text-5xl  font-semibold text-xl font-figtree md:text-2xl ">
            Our Blog
          </h1>
          <p className="max-w-[1250px] px-8 text-[22px] font-manrope font-light">
            Explore our latest blogs for insights, updates, and expert tips.
            Stay informed and make the most of our platform!
          </p>
        </div>
      </ReusableHero>

      <div className="flex justify-between px-4 flex-wrap gap-4 mx-15 py-10">
        <h1 className={heading}>
          Related <span className="text-secondary">Blog</span>{" "}
        </h1>
        <span className="text-gray-500 font-manrope  font-bold">
          Found 13 Results
        </span>
      </div>
      <div className=" px-4 pb-20 mx-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:place-content-evenly lg:place-items-stretch gap-6 p-4">
          {blogs.map(() => (
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
