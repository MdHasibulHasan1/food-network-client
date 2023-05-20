import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefData = ({ chef }) => {
  const { years_of_experience, chef_name, likes, _id, picture_url, recipes } =
    chef;

  return (
    <div className="flex gap-3 items-center lg:card-side bg-base-100 shadow-2xl p-4">
      <figure className="w-4/12 mr-1">
        <LazyLoadImage
          className="w-full mx-auto h-full"
          alt="not found"
          effect="blur"
          src={picture_url}
        />
      </figure>

      <div className="flex w-8/12 flex-col justify-between">
        <h2 className="card-title text-2xl font-semibold">{chef_name}</h2>

        <p className="text-gray-700 text-sm">
          Likes: {likes} | Number of recipes: {recipes.length} | Years of
          experience: {years_of_experience}
        </p>
        <div className="">
          <Link className="block w-full" to={`/recipe/${_id}`}>
            <button className="btn btn-block btn-outline">
              Recipe Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefData;
