import React, { useEffect, useState } from "react";
import ChefData from "../ChefData/ChefData";

const Home = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((result) => result.json())
      .then((data) => setChefsData(data.chefs));
  }, []);
  console.log(chefsData);
  return (
    <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
      {chefsData.map((chef) => (
        <ChefData chef={chef} key={chef._id}></ChefData>
      ))}
    </div>
  );
};

export default Home;
