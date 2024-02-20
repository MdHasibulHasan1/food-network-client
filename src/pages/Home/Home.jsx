import React, { useEffect, useContext, useState } from "react";
import Banner from "./Banner/Banner";
import ChefData from "./ChefData/ChefData";
import Food from "../Food/Food";
import Special from "../Special/Special";
import SectionTitle from "../../components/sectionTitle";
import FeaturedRecipes from "./FeaturedRecipes/FeaturedRecipes";

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
      <Banner />

      <SectionTitle title="Our Top" highlightedText="Chefs" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 justify-between mx-4">
        {chefsData.map((chef) => (
          <ChefData chef={chef} key={chef._id}></ChefData>
        ))}
      </div>
      <Food></Food>
      <FeaturedRecipes />
      <Special></Special>
    </div>
  );
};

export default Home;
