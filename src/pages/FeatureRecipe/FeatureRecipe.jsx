import React from "react";

const FeatureRecipe = ({ food }) => {
  const {
    food_name,
    food_image,
    description,
    chef_name,
    chef_image,
    date,
    time,
    services,
  } = food;
  return (
    <div className="mt-10">
      <div className="  ">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={food_image}
            alt="not found"
          />
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-800">{food_name}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
          <div>
            <div className="px-6 pb-6 flex items-end">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={chef_image}
                    alt="Profile picture"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">
                    {chef_name}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <span>{date}</span>
                  <span>{time} min</span>
                  <span>{services} services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRecipe;
