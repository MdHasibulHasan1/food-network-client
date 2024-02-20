import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Log Out successful!");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-slate-100 fixed top-0  font-medium text-gray-700 uppercase  z-50">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="blogs"
                title="Blogs"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Blog
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/profile"
                  aria-label="Update Profile"
                  title="Update Profile"
                  className={({ isActive }) => (isActive ? "font-bold " : "")}
                >
                  Update Profile
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/about-us"
                aria-label="about us"
                title="About us"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li className="ml-auto w-full">
              {user ? (
                <NavLink
                  onClick={handleLogout}
                  to="/"
                  aria-label="blog"
                  title="Logoout"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="flex gap-2 text-lg">
          <div>
            <span className=" font-bold my-1 ">F</span>
            ood
          </div>
          <div className="md:block">
            <span className=" font-bold my-1 ">N</span>etwork
          </div>
        </div>
        {/*  <h2 className="text-3xl text-center normal-case my-4 leading-5 font-bold tracking-tight text-gray-900 ">
          Food <span className="font-bold">Network</span>
        </h2> */}
        {/* <span className="text-gray-600 font-semibold  sm:text-3xl ">
          Food <span className="font-bold"> Network</span>
        </span> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              aria-label="blogs"
              title="Blogs"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              aria-label="about us"
              title="About us"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li className="">
            {user ? (
              <NavLink
                onClick={handleLogout}
                to="/"
                aria-label="logout"
                title="Logout"
                className={({ isActive }) => (isActive ? "text-black" : "")}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                aria-label="login"
                title="Login"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Login
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <div
                onClick={() => navigate("/profile")}
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <img
                  className="ring ring-blue-300 my-auto md:ring-black rounded-[50%] block h-8 w-8"
                  src={user?.photoURL}
                  alt="not found"
                />
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
