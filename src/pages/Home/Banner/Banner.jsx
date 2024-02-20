import React from "react";

const Banner = () => {
  return (
    <div className="pt-16">
      <div
        style={{
          backgroundImage: `url(
            "https://i.ibb.co/2PnwmNp/desktop-wallpaper-food-background-food-food-emoji-and-cartoon-food-mexican-food.jpg"
          )`,
        }}
        className="relative h-[60vh] bg-red-300 bg-cover bg-no-repeat bg-blend-overlay bg-opacity-50  bg-center bg-fixed flex flex-col items-center justify-center py-20"
      >
        <div className="flex flex-col absolute items-center justify-center py-20">
          <h1 className="text-4xl px-4 mb-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to <span className="text-gray-100">Food Network</span>
          </h1>
          {/* <SectionTitle title="Welcome to" highlightedText="Food Network" /> */}
          <p className="text-xl px-4 font-semibold  mt-1 leading-6 text-gray-100">
            Discover new recipes, cook like a pro, and share your love of food
            with the world.
          </p>

          <button className="mt-8 bg-slate-950 hover:bg-slate-900 text-white py-1 px-4 rounded-full uppercase font-semibold">
            Start cooking now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
