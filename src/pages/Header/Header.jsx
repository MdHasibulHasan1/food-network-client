import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  // const handleLogout = () => {
  //   logOut()
  //     .then((result) => {})
  //     .catch((error) => console.error(error));
  // };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            <li>
              <a className="text-3xl">Food Network</a>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="blog"
                title="blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <a>Picture</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl">Food Network</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="blog"
              title="Blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <img
            className="ring ring-blue-300 md:ring-blue-500 rounded-full block w-16"
            src={user?.photoURL}
            alt="not found"
          />
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
