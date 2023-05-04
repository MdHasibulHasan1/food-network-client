import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ChefData from "../ChefData/ChefData";
import Food from "../Food/Food";
import Section from "../FeaturedRecipes/FeaturedRecipes";
import FeaturedRecipes from "../FeaturedRecipes/FeaturedRecipes";

const Home = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((result) => result.json())
      .then((data) => setChefsData(data.chefs));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-2 gap-5 ">
        {chefsData.map((chef) => (
          <ChefData chef={chef} key={chef._id}></ChefData>
        ))}
      </div>
      <Food></Food>
      <FeaturedRecipes></FeaturedRecipes>
      {/* <div className="bg-gray-100 rounded-lg p-4 flex items-center">
        <img
          className="h-16 w-16 rounded-full object-cover mr-4"
          src="https://via.placeholder.com/150"
          alt="Chef Name"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">Chef Name</h2>
          <p className="text-gray-700 text-sm mb-2">
            Short bio/description of the chef here.
          </p>
          <p className="text-gray-700 text-sm">
            Likes: X | Number of recipes: Y | Years of experience: Z
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
