import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeDetail = () => {
  const { Id } = useParams();
  const recipeDetail = useLoaderData();
  const [chefData, setChefData] = useState({});

  useEffect(() => {
    const found = recipeDetail.chefs.find((rD) => rD._id == Id);
    setChefData(found);
  }, [Id]);

  const {
    chef_name,
    likes,
    description,
    picture_url,
    recipes,
    years_of_experience,
    number_of_recipes,
  } = chefData;

  return (
    <div>
      <div className=" bg-gray-50 p-4 pt-20">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="h-16 w-16 rounded-full mr-4"
            src={picture_url}
            alt="Samantha Smith"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{chef_name}</h2>
            <p className=" text-sm">{description}</p>
          </div>
        </div>
        <div className="flex text-gray-700 justify-around mt-4">
          <div className="flex flex-col items-center justify-center">
            <p className=" font-semibold text-lg mb-2">Years of Experience</p>
            <p className=" text-2xl font-bold">{years_of_experience}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className=" font-semibold text-lg mb-2">Number of Recipes</p>
            <p className=" text-2xl font-bold">{recipes?.length}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className=" font-semibold text-lg mb-2">Likes</p>
            <p className=" text-2xl font-bold">{likes}</p>
          </div>
        </div>
      </div>
      <div>
        <RecipeCard id={Id} recipes={recipes && recipes}></RecipeCard>;
      </div>
    </div>
  );
};

export default RecipeDetail;
