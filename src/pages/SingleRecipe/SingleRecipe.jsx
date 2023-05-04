import React from "react";

const SingleRecipe = ({ recipe }) => {
  console.log(recipe.ingredients);
  const { ingredients } = recipe;
  return (
    <div>
      <div className="my-2 text-lg font-medium">Ingredients:</div>
      <ol className="list-decimal ml-6">
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ol>
    </div>
  );
};

export default SingleRecipe;
