import React from "react";
import SectionTitle from "../../components/sectionTitle";

const Food = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12 ">
        <div className=" mx-auto px-4 sm:px-6 items-center justify-center lg:px-8 flex flex-col-reverse md:flex-row">
          <div className="md:w-6/12 w-full h-[65vh] p-4 rounded-lg">
            <img
              className="w-full h-full block object-cover"
              src="https://i.ibb.co/SxtT6gP/kung-pao-chicken-6.jpg"
              alt="not found"
            />
          </div>

          <div className="md:w-1/2 px-4">
            {/*  <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Kung Pao Chicken
            </h2> */}
            <SectionTitle
              title="Kung"
              style="text-left"
              highlightedText="Pao Chicken"
            />
            <p className="text-gray-600 my-4 ">
              Kung Pao Chicken is a popular Chinese dish that originated in the
              Sichuan province of China. It is a spicy stir-fry dish made with
              marinated chicken, peanuts, vegetables, and chili peppers. The
              dish is named after Ding Baozhen, a Qing Dynasty official, who was
              known as Kung Pao in his later years.
            </p>
            <p className="text-gray-600 mb-4">
              Kung Pao Chicken is named after Ding Baozhen, a Qing Dynasty
              official who was known as Kung Pao in his later years. According
              to legend, Kung Pao was a lover of spicy food and created the dish
              himself, using Sichuan peppercorns and chili peppers to give it a
              fiery kick.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;
