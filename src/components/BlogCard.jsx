import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ imageUrl, date, title, description, tags }) => {
  return (
    <div className="max-w-[424px] bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="h-[326px] w-full object-cover rounded-b-xl" />
      <div className="p-4 rounded-t-lg relative">
        <div className="absolute -top-5 right-10 bg-white shadow-md px-3 py-1 rounded-full text-sm font-medium">
          {date}
        </div>
        <h3 className="text-lg font-semibold mt-6">{title}</h3>
        <p className="text-gray-500 mt-2 text-sm line-clamp-2">{description}</p>
        <div className="mt-2 text-sm text-gray-400">
          {tags.map((tag) => (
            <span key={tag} className="mr-2">
              #{tag}
            </span>
          ))}
        </div>    <Link to="/blog/1">
        <button className="w-full cursor-pointer bg-secondary text-white mt-4 py-2 rounded-3xl border  hover:bg-transparent hover:border-primary hover:text-primary transition">
        Read Blog
        </button></Link>
 
      </div>
    </div>
  );
};

export default BlogCard;
