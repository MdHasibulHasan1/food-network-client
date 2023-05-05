import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import LoginWithGitHubAndGoogle from "../LoginWithGitHubAndGoogle/LoginWithGitHubAndGoogle";
import toast from "react-hot-toast";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { signIn, auth, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const email = emailRef?.current?.value;
  console.log(email);
  const handleResetPassword = () => {
    console.log(email);
    if (!email) {
      return toast.success("Enter Your Email!");
    }
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        return toast.success("Check Your Email!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-medium mb-4">Login to Food Network</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email:
            </label>
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              required
              ref={emailRef}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={() => handleShowPassword()}
                className="absolute top-0 right-0 mt-3 mr-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              >
                {showPassword ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.725 4.275a9 9 0 010 15.45M5.025 4.275a9 9 0 010 15.45"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v.01"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.93 4.93a4 4 0 015.657 0M19.07 4.93a4 4 0 00-5.657 0M1 12h2M21 12h2M1 12a9 9 0 009 9h2a9 9 0 009-9M3 6.84a9 9 0 0115.36 0M6.34 3.16a9 9 0 0111.32 0"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 block w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-red-600">{error}</div>
        <p>
          New to Food Network?
          <Link className="hover:text-blue-500 underline ml-3" to="/register">
            Create an account
          </Link>
        </p>
        <p>
          <small>
            Forget password! please{" "}
            <button
              className="btn btn-link"
              onClick={() => handleResetPassword()}
            >
              Reset Password
            </button>
          </small>
        </p>
        <LoginWithGitHubAndGoogle></LoginWithGitHubAndGoogle>
      </div>
    </div>
  );
};

export default Login;
