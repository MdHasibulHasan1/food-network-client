import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SingleSpecials = ({ special }) => {
  const { item, type, toppings, price, img } = special;
  return (
    <div className="mt-3 md:gap-3 justify-start md:justify-between  flex">
      <figure className="w-4/12 ">
        <LazyLoadImage
          className="w-full mx-auto h-36"
          alt="not found"
          effect="blur"
          src={img}
        />
      </figure>

      <div className="w-8/12 grow">
        <div className="flex items-center font-bold gap-2 justify-between">
          <h3>{item}</h3>
          <div className="badge badge-warning gap-2">{type ? type : ""}</div>
          <div className="border-2 w-1/12 border-dashed border-gray-400"></div>
          <span>{price}</span>
        </div>
        <h3>
          <small>{toppings && toppings}</small>
        </h3>
      </div>
    </div>
  );
};

export default SingleSpecials;
