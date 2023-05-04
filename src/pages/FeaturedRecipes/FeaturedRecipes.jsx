import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import FeaturedRecipe from "../FeatureRecipe/FeatureRecipe";

const FeaturedRecipes = () => {
  const [foodsData, setFoodsData] = useState([]);
  const { setLoading, loading } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/foods")
      .then((result) => result.json())
      .then((data) => setFoodsData(data));
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center -mb-10">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Featured <span className="text-yellow-500">Recipes</span>
              </h2>
              <p className="mt-2 text-lg leading-6 text-gray-500">
                Discover our handpicked selection of the most delicious and
                innovative recipes from around the world.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
              {foodsData.map((food) => (
                <FeaturedRecipe food={food} key={food._id}></FeaturedRecipe>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedRecipes;
