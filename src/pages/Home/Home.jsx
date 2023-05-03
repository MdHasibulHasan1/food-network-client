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
    </div>
  );
};

export default Home;
