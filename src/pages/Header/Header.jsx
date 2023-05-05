import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-slate-100 fixed  z-50">
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
            <li tabIndex={0}>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
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
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                aria-label="about us"
                title="About us"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              {user ? (
                <NavLink
                  onClick={handleLogout}
                  to="/"
                  aria-label="blog"
                  title="Logoout"
                  className={({ isActive }) =>
                    isActive ? "text-black" : "default"
                  }
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-700" : "default"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>

        <span className="text-gray-600 font-semibold text-3xl">
          Food <span className="text-yellow-500"> Network</span>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
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
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              aria-label="about us"
              title="About us"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "default"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink
                onClick={handleLogout}
                to="/"
                aria-label="logout"
                title="Logout"
                className={({ isActive }) =>
                  isActive ? "text-black" : "default"
                }
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                aria-label="login"
                title="Login"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "default"
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user && (
          <div className="tooltip tooltip-left" data-tip={user?.displayName}>
            <img
              className="ring ring-blue-300 md:ring-blue-500 rounded-full block w-8"
              src={user?.photoURL}
              alt="not found"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
