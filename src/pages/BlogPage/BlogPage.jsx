import Pdf from "react-to-pdf";
import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const options = {
  orientation: "landscape",
  unit: "in",
  format: [11, 8.5],
};

const BlogPage = () => {
  const ref = React.createRef();
  return (
    <div className="bg-gray-100 py-20">
      <div className="flex justify-center">
        <Pdf targetRef={ref} filename="blog.pdf" options={options}>
          {({ toPdf }) => (
            <button
              className="btn mt-3 bg-gray-200 text-black mb-3 hover:text-white block mx-auto"
              onClick={toPdf}
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>{" "}
      <div className="flex justify-center">
        <ThemeToggle></ThemeToggle>
      </div>
      <div
        ref={ref}
        id="blog"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Welcome to My Blog
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              1. Tell us the differences between uncontrolled and controlled
              components.
            </h2>
            <p className="text-gray-700">
              {" "}
              uncontrolled components are components in React that manage their
              own state internally, without any interaction from the parent
              component, while controlled components are components that are
              controlled and managed by the parent component. Controlled
              components allow for more fine-grained control and validation of
              user input, while uncontrolled components can be simpler to
              implement when you don't need to enforce any rules or constraints
              on the data being inputted.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              2. How to validate React props using PropTypes
            </h2>
            <p className="text-gray-700">
              {" "}
              To validate React props using PropTypes, you need to install the
              prop-types package, import PropTypes in your component, define the
              propTypes object in your component, specifying the type and shape
              of each prop, and pass the props to your component. This helps
              catch errors early in the development process and ensures that
              your components receive the correct types of data.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              3. Tell us the difference between nodejs and express js.
            </h2>
            <p className="text-gray-700">
              {" "}
              Node.js is a server-side JavaScript runtime environment that
              provides low-level APIs for building scalable network
              applications, while Express.js is a web application framework for
              Node.js that provides a higher-level API for building web
              applications and APIs. Express.js is built on top of Node.js and
              provides a modular and extensible architecture for building robust
              and scalable web applications.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              4. What is a custom hook, and why will you create a custom hook?
            </h2>
            <p className="text-gray-700">
              A custom hook is a JavaScript function that uses React's built-in
              hooks to provide reusable functionality that can be shared across
              multiple components. Custom hooks are useful for abstracting away
              complex logic or stateful behavior, separating concerns, and
              making your code more modular and maintainable. Custom hooks can
              be created by defining a function that uses one or more of React's
              built-in hooks and can be used as a reusable hook that can be
              called from any component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
