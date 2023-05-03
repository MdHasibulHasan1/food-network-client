import React from "react";

const Food = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
          <div
            className="md:w-1/2 h-full bg-cover bg-center rounded-lg  shadow-md"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/rb0kP09/spicy-tomato-soup-3684-jpg.webp)",
            }}
          ></div>
          <div className="md:w-1/2 py-6 md:py-12 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Section Title
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit a nulla eget laoreet. Nulla ullamcorper facilisis diam,
              id pellentesque neque convallis vitae. Pellentesque sollicitudin
              tincidunt massa, sed convallis eros ultricies a. Nulla vestibulum
              tincidunt magna, a dapibus justo maximus vel.
            </p>
            <p className="text-gray-600 mb-4">
              In hac habitasse platea dictumst. Sed rhoncus odio sit amet sapien
              rutrum, eu efficitur augue feugiat. Ut tristique ante ut ante
              scelerisque auctor. Fusce ullamcorper euismod leo, in maximus eros
              facilisis ut. Sed vel lectus eu quam bibendum placerat a a odio.
              Aliquam blandit nibh eu magna venenatis, vel ultricies magna
              rhoncus.
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
