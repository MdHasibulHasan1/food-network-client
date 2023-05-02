import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <section className="flex items-center h-3/6 text-blue-600">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <img
          className="w-3/12 h-1/3 block mx-auto rounded-lg"
          src="https://i.ibb.co/9s51pkj/question-mark-6906191.jpg"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-4 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-4">
            {error?.message}
          </p>

          <button
            type="button"
            onClick={handleGoBack}
            className="btn-primary w-full mx-auto my-0"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
