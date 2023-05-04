import React, { useEffect, useContext, useState } from "react";
import Banner from "../Banner/Banner";
import ChefData from "../ChefData/ChefData";
import Food from "../Food/Food";
import FeaturedRecipes from "../FeaturedRecipes/FeaturedRecipes";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("https://server-hasib7143-gmailcom.vercel.app/chefs")
      .then((result) => result.json())
      .then((data) => {
        setChefsData(data.chefs);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <h2 className="text-3xl text-center my-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Our Top <span className="text-yellow-500">Chefs</span>
      </h2>
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
