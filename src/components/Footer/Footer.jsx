import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 px-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-gray-900 font-bold mb-2 ">Food Network</h2>
            <div className="">
              <p className="text-gray-600 hover:text-gray-800">
                We are a food website dedicated to bringing you the best
                recipes, cooking tips, and food news from around the world.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-2">Categories</h3>
            <ul className="">
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
            <h3 className="text-gray-900 font-bold mb-2 ">About Us</h3>
            <ul className="">
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
            <h3 className="text-gray-900 font-bold mb-2 ">Contact Us</h3>
            <ul className="">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Email: info@foodwebsite.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Phone: 555-555-5555
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Address: 123 Main Street, Anytown USA
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-3  mx-auto pt-4 border-t border-gray-700">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Food Network Website. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
