import React from "react";
import { useState } from "react";
import hero from "../../assets/images/treatment.webp";
import { ReusableHero } from "../../components/ReusableHero";
import { heading } from "../../assets/styles/Style";
import BlogCard from "../../components/BlogCard";
import hospital from "../../assets/images/hospital.webp";
import SearchBar from "/src/components/SearchBar.jsx";

const blogData = [
  {
    id: 1,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 2,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 3,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 4,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 5,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 6,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 7,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 8,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 9,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 10,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 11,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
  {
    id: 12,
    image: hospital ,
    date : "13 March 2022",
    title : "Step-by-Step Guide to a Smooth Joining Process",
    description : "New to the platform? Follow this easy guide to register, refer, track updates, and receive...",
    tags : ["physiotherapy","health and wellness"]
  },
];


function Blog() {

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [filteredBlog, setFilteredBlog] = useState(blogData);
  
  const handleBlogSearch = () => {
    const filtered = blogData.filter(
      (blog) =>
        (!selectedDepartment || blog.department === selectedDepartment) &&
        (!selectedHospital || blog.hospital === selectedHospital) &&
        (!selectedDoctor || blog.doctor === selectedDoctor)
    );
    setFilteredBlog(filtered);
  };

  return (
    <>
      <ReusableHero heroImage={hero} className="h-[550px]" >
        <div className="flex mt-18 justify-center text-center md:text-start px-4 md:ps-10 py-20 lg:min-h-[450px] flex-col gap-4 text-white">
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
          <SearchBar

            setSelectedDepartment={setSelectedDepartment} 
            setSelectedHospital={setSelectedHospital} 
            setSelectedDoctor={setSelectedDoctor}
            onSearch={handleBlogSearch} 
            showCountry={false} 
            showTreatment={false} 
            showDepartment={true} 
            showHospital={true} 
            showDoctor={true} 

          />
        </div>
      </ReusableHero>

      <div className="flex justify-between px-4 flex-wrap gap-4 mx-15 py-10">
        <h1 className={heading}>
          Related <span className="text-secondary">Blog</span>{" "}
        </h1>
        <span className="text-gray-500 font-manrope font-bold">
          Found {filteredBlog.length} Results
        </span>
      </div>
      <div className=" px-4 pb-20 mx-10 ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:place-content-evenly lg:place-items-stretch gap-6 p-4">
          {filteredBlog.map(() => (
            <BlogCard
              image={hospital}
              date="13 March 2022"
              title="Step-by-Step Guide to a Smooth Joining Process"
              description="New to the platform? Follow this easy guide to register, refer, track updates, and receive..."
              tags={["physiotherapy", "health and wellness"]}
            />
          ))}
        </div> */}

        <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredBlog.length > 0 ? (
            filteredBlog.map((blog) => <BlogCard key={blog.id} {...blog} />)
          ) : (
            <p className="text-gray-500 text-lg col-span-full">No matching blogs found.</p>
          )}
        </div>

      </div>
    </>
  );
}

export default Blog;
