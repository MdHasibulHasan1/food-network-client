import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-8 px-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col space-y-4">
            <span className="text-gray-600 font-semibold text-3xl">
              Food <span className="text-yellow-500"> Network</span>
            </span>
            <p className="text-sm">
              We are a food website dedicated to bringing you the best recipes,
              cooking tips, and food news from around the world.
            </p>
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
