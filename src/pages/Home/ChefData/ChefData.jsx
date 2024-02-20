import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaCircleArrowRight } from "react-icons/fa6";
const ChefData = ({ chef }) => {
  const { years_of_experience, chef_name, likes, _id, picture_url, recipes } =
    chef;

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white px-2 sm:px-6 py-4">
      <div className="relative mb-4 w-full">
        <img
          src={picture_url}
          alt="Chef's picture"
          className="w-full h-32 object-cover rounded-t-md"
        />
        {/* <div className="absolute top-2 left-0 px-2 py-1  rounded-md">
          <span className="font-bold text-black bg-white p-1 rounded-md">
            {years_of_experience} years' experience
          </span>
        </div> */}
      </div>
      {/*   <div className="relative">
        <div className="absolute text-sm top-0 bg-gray-900 font-bold text-slate-100  px-1 pb-1 rounded-tl-md rounded-br-md left-0">
          {years_of_experience} years' experience
        </div>
        <div className="h-28">
           <LazyLoadImage
          className="mb-3 rounded-full h-full"
          // height="100%"
          width="100%"
          alt="Chef's picture"
          effect="blur"
          src={picture_url}
        /> 
          <img
            className="h-full object-cover rounded-md"
            width="100%"
            src={picture_url}
            alt="Chef's picture"
          />
        </div> 
      </div>*/}
      <div className="">
        <div className="font-bold text-xl ">{chef_name}</div>
        <div className="text-gray-700 text-base">
          <p className="">Number of recipes: {recipes.length}</p>
          <p>Likes: {likes}</p>
          <p>Years of experience: {years_of_experience}</p>
        </div>
      </div>
      <div className=" text-gray-950 hover:text-gray-700 font-semibold">
        <Link
          // bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg
          className=""
          to={`/recipe/${_id} `}
        >
          <button className=" underline ">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ChefData;
