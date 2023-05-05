import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className=" bg-white">
      <div className="bg-cover bg-center h-64 md:h-80 lg:h-96 flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">About Us</h1>
      </div>
      <div className="container mx-auto py-2 px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Food Network is a popular website dedicated to all things food. It
              provides users with a diverse range of recipes, cooking
              techniques, and entertaining ideas to help them create delicious
              meals for themselves and their loved ones. The site features
              recipes from world-renowned chefs, as well as everyday home cooks,
              and provides step-by-step instructions, nutritional information,
              and user reviews. Food Network also offers engaging food-related
              content such as cooking competitions, food trends, and celebrity
              chef news. Whether you're a seasoned cook or just starting out,
              Food Network is the perfect resource for anyone looking to explore
              and expand their culinary horizons.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              The mission of the food network website is to provide a
              comprehensive platform for food enthusiasts to explore, discover,
              and share their passion for cooking and eating. Our aim is to
              inspire and empower people to cook more at home by providing them
              with a vast collection of recipes, cooking techniques, and
              ingredient information. We strive to create a community of food
              lovers where people can connect with each other, share their
              culinary creations, and learn from one another. Our mission is to
              make cooking and eating more enjoyable, accessible, and
              educational for everyone, regardless of their skill level or
              experience in the kitchen.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="text-gray-700 leading-relaxed">
              <li className="mb-2">
                <span className="font-bold mr-2">Quality:</span> We believe in
                using only the freshest and highest-quality ingredients in our
                products.
              </li>
              <li className="mb-2">
                <span className="font-bold mr-2">Community:</span> We are
                committed to supporting our local community by sourcing our
                ingredients from local farmers and producers.
              </li>
              <li className="mb-2">
                <span className="font-bold mr-2">Sustainability:</span> We
                strive to reduce our environmental impact by using eco-friendly
                packaging and implementing sustainable practices in our
                operations.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col md:flex-row items-center justify-center">
          <div className="bg-gray-100 sm:flex p-6 rounded-lg shadow-lg gap-5 items-center">
            <div className="mt-8  sm:w-6/12">
              <h3 className="text-lg font-bold mb-2">Find Us</h3>
              <p>The Loft, Narborough Wood Park</p>
              <p>Desford Road</p>
              <p>Enderby, Leicester LE19 4XT</p>

              <h3 className="text-lg font-bold mt-8 mb-2">Opening Hours</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td className="pl-4">11:30 am – 10:00 pm</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td className="pl-4">11:30 am – 10:00 pm</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td className="pl-4">11:30 am – 10:00 pm</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td className="pl-4">11:30 am – 10:00 pm</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td className="pl-4">10:00 am – 11:00 pm</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td className="pl-4">10:00 am – 11:00 pm</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td className="pl-4">10:00 am – 11:00 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sm:w-6/12">
              <div>
                <h1 className="font-bold text-2xl">Send us a message</h1>
                <p>
                  Please use the form below to get in touch. If you need a reply
                  we will get in touch as soon as possible.
                </p>
              </div>
              <form className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 mb-6 rounded-lg shadow-lg"
                />
                <label htmlFor="email" className="mb-2 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 mb-6 rounded-lg shadow-lg"
                />
                <label htmlFor="message" className="mb-2 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="p-2 mb-6 rounded-lg shadow-lg"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-lg shadow-lg hover:bg-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center mt-5">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="flex justify-center gap-3 mx-auto mb-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF
                className="text-blue-600 hover:text-blue-800 mr-4"
                size={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter
                className="text-blue-400 hover:text-blue-600 mr-4"
                size={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                className="text-pink-600 hover:text-pink-800"
                size={24}
              />
            </a>
          </div>
          <div>
            <p className="mt-4 text-gray-600 text-center">
              Connect with us on social media to stay updated with our latest
              news and events!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsPage;
