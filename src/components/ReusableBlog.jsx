
import { useState } from "react";

const BlogSection = ({ blogs }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mx-10 mt-20 mb-10 px-auto">
      <h1 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-[#29569C] sm:mb-12 mb-8 text-center sm:text-start">
        Explore <span className="text-[#3D77F6]">Our Blog</span>
      </h1>
      <div className="space-y-5 sm:space-y-14 sm:px-10 relative">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="post flex sm:flex-row flex-col justify-between sm:items-center border-b pb-8 sm:pb-14 border-gray-400 p-5 sm:p-0 relative transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Blog Details */}
            <div className="w-full sm:w-[440px]">
              <h2 className="text-2xl sm:text-[28px]">{blog.title}</h2>
              <p className="text-[16px] sm:text-[18px] w-full sm:w-[320px] text-[#666666]">
                {blog.description}
              </p>
            </div>

            {/* Date & Arrow */}
            <div className="flex items-center justify-between sm:space-x-35">
              <span className="text-[16px] sm:text-[18px] text-[#666666]">
                {blog.date}
              </span>
              <a
                href="#"
                className={`text-[32px] sm:text-[40px] mr-4 sm:mr-4 transition-transform duration-300 ${
                  hoveredIndex === index ? "-rotate-45" : ""
                }`}
              >
                →
              </a>
            </div>

            {/* Hidden Element in the Center (Visible on Hover) */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-10 text-white px-6 py-3 rounded-lg transition-opacity duration-300 w-50 h-50 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`} >
                <img src="/src/assets/images/doctor-1.webp" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example Usage
const blogsData = [
  {
    title: "How to Choose the Best Hospital",
    description:
      "Discover essential tips to select the right hospital for your health needs...",
    date: "January 09, 2025",
  },
  {
    title: "Understanding Medical Procedures",
    description:
      "Learn about the most common medical procedures and what to expect...",
    date: "February 15, 2025",
  },
  {
    title: "Finding the Right Specialist",
    description:
      "Get insights on selecting the best specialist for your medical concerns...",
    date: "March 05, 2025",
  },
];

export default function App() {
  return <BlogSection blogs={blogsData} />;
}
