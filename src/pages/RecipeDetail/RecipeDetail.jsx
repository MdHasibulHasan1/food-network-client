import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { Id } = useParams();
  const recipeDetail = useLoaderData();
  const [chefData, setChefData] = useState({});

  useEffect(() => {
    const found = recipeDetail.chefs.find((rD) => rD._id == Id);
    setChefData(found);
  }, [Id]);
  console.log(chefData);
  const {
    chef_name,
    likes,
    description,
    picture_url,
    recipes,
    years_of_experience,
  } = chefData;
  console.log(recipes);
  return (
    <div>
      <div className=" bg-gray-50 p-4">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="h-16 w-16 rounded-full mr-4"
            src={picture_url}
            alt="Samantha Smith"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{chef_name}</h2>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Years of Experience
            </p>
            <p className="text-gray-700 text-2xl font-bold">
              {years_of_experience}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Number of Recipes
            </p>
            <p className="text-gray-700 text-2xl font-bold">10</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 font-semibold text-lg mb-2">Likes</p>
            <p className="text-gray-700 text-2xl font-bold">{likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
