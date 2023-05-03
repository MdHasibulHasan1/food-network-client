import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const ChefData = ({ chef }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleDisable = () => {
    setIsButtonDisabled(true);

    toast.success("Add  to favorites!");
  };

  const { years_of_experience, chef_name, likes, _id, picture_url, recipes } =
    chef;
  console.log(years_of_experience);
  return (
    <div className="flex gap-3 lg:card-side bg-base-100 shadow-2xl p-4">
      <figure className="w-4/12 ">
        <img className="w-full mx-auto h-full" src={picture_url} alt="Album" />
      </figure>
      <div className="flex w-8/12 flex-col justify-between">
        <h2 className="card-title text-2xl font-semibold">{chef_name}</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Years of <br /> Experience
            </p>
            <p className="text-gray-700 text-2xl font-bold">
              {years_of_experience}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Number of <br /> Recipes
            </p>
            <p className="text-gray-700 text-2xl font-bold">10</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Likes
            </p>
            <p className="text-gray-700 text-2xl font-bold">{likes}</p>
          </div>
        </div>

        <div className="">
          {/* <button
              onClick={handleDisable}
              className="btn btn-block my-2 btn-outline"
              disabled={isButtonDisabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Add to favorite
            </button> */}

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
