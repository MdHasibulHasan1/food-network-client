import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 px-8">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          <div className="flex flex-col space-y-4">
            {/* <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
            <h2 className="text-3xl">Food Network</h2>
            <span className="text-gray-600 font-semibold text-lg">
              Recipe Website
            </span>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Desserts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Phone
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Address
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
