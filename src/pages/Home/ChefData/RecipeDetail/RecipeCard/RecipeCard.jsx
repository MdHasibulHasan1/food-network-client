import React, { useState } from "react";
import toast from "react-hot-toast";
import { addToDb } from "../../../../../utilities/fakedb";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SingleRecipe from "./SingleRecipe/SingleRecipe";

const RecipeCard = ({ recipes, id }) => {
  console.log(recipes, id);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleDisable = (index) => {
    setIsButtonDisabled((prevState) => ({ ...prevState, [index]: true }));
    toast.success("Added to favorites!");
    addToDb(id);
  };

  return (
    <div className="grid mx-4 gap-4 md:grid-cols-2  lg:grid-cols-3">
      {recipes?.map((recipe, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between p-4 shadow-md rounded-md"
          >
            <div key={index} className="">
              <h1 className="font-bold text-2xl">{recipe?.name}</h1>
              <SingleRecipe recipe={recipe} />
              <div>
                <h1 className="font-medium p-2 outline-3 hover:bg-gray-100 text-left text-lg my-2 border">
                  Cooking method:
                </h1>
                <p>{recipe.cooking_method}</p>
                <div className="flex gap-3 items-center">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={Math.round(recipe?.rating)}
                    readOnly
                  />
                  <h1>{recipe.rating}</h1>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleDisable(index)}
              className="btn btn-block my-2 btn-outline"
              disabled={isButtonDisabled[index]}
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
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCard;
