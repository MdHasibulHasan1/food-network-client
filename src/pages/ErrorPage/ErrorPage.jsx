import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section className="flex items-center h-screen text-center">
      <div className="container mx-auto">
        <div className="mb-8">
          <img
            src="https://i.ibb.co/9s51pkj/question-mark-6906191.jpg"
            alt=""
            className="mx-auto max-w-xs"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Oops! Something went wrong. {error?.message}
          </p>

          <button
            type="button"
            onClick={handleGoBack}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-300"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
