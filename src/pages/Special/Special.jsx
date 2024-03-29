import React, { useState, useEffect } from "react";
import SingleSpecial from "./SingleSpecials/SingleSpecial";

const Special = () => {
  const [specials, setSpecials] = useState(null);
  const [len, setLen] = useState(6);

  useEffect(() => {
    fetch("https://server-hasib7143-gmailcom.vercel.app/specials")
      .then((response) => response.json())
      .then((data) => setSpecials(data.menu.slice(0, len)));
  }, [len]);

  return (
    <div>
      <div className="text-center">
        <small>Menus</small>
        <h1 className="text-3xl font-bold">This month specials</h1>
        <span className="mx-auto mt-2 px-7 h-1 bg-yellow-500 block w-10 "></span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {specials?.map((special, i) => {
          return <SingleSpecial special={special} key={i} />;
        })}
      </div>
      <button
        className={`btn ${
          specials?.length > 6 && "hidden"
        }  block outline-yellow-500 group  mx-auto mb-3 btn-outline btn-warning`}
        onClick={() => setLen(9)}
      >
        <span className="group-hover:text-white text-yellow-500">
          View The Full Menus
        </span>
      </button>
    </div>
  );
};

export default Special;
