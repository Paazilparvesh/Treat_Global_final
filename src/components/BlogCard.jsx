
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, image, date, title, description, tags }) => {
  return (
    <div className="relative max-w-[424px] bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[326px] w-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Content Box - Raised Up */}
      <div className="relative w-106 bg-white p-5 rounded-4xl shadow-md -mt-8 ">
        {/* Date Badge Positioned on Top */}
        <div className="absolute -top-5 right-1 transform -translate-x-1/2 bg-white shadow-md px-4 py-1 rounded-full text-sm font-medium">
          {date}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 mt-2 text-sm line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="mt-2 text-sm text-gray-400">
          {tags.map((tag) => (
            <span key={tag} className="mr-2">#{tag}</span>
          ))}
        </div>

        {/* Read Blog Button */}
        <Link to={`/blog/${id}`}>
          <button className="w-full bg-blue-600 text-white mt-4 py-2 rounded-3xl hover:bg-blue-700 transition">
            Read Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
