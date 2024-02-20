import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="bg-white mx-auto font-semibold uppercase fixed z-30 w-full px-2 py-4">
      <div className="relative ">
        <div className="flex justify-between lg:justify-items-end items-center relative">
          <div className="flex gap-2 text-lg">
            <div>
              <span className=" font-bold my-1 ">F</span>
              ood
            </div>
            <div className="md:block">
              <span className=" font-bold my-1 ">N</span>etwork
            </div>
          </div>
          <ul className="items-center gap-4 hidden justify-between lg:flex">
            {/* Navigation links For Lg device*/}
            <li tabIndex={0}>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? "font-bold  border border-b-2 pb-2" : ""
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
                  isActive ? "font-bold border border-b-2 pb-2" : ""
                }
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
                  className={({ isActive }) =>
                    isActive ? "font-bold border border-b-2 pb-2" : ""
                  }
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
                className={({ isActive }) =>
                  isActive ? "font-bold border border-b-2 pb-2" : ""
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
                  className={({ isActive }) => (isActive ? "" : "")}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className={({ isActive }) =>
                    isActive ? "font-bold border border-b-2 pb-2" : ""
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 lg:hidden -mr-1 top-0 right-0 transition duration-200 rounded focus:outline-none focus:shadow-outline "
            onClick={() => setIsMenuOpen(true)}
          >
            {!isMenuOpen && (
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="lg:hidden">
          {isMenuOpen && (
            <div className="absolute z-10 top-0 bg-white left-0 w-full">
              <div className="p-5 bg-primary-500 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4 relative">
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 absolute transition top-0 right-0 duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {/* Navigation links for mobile */}
                    <li tabIndex={0}>
                      <NavLink
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className={({ isActive }) =>
                          isActive ? "font-bold" : ""
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
                          isActive ? "font-bold" : ""
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
                          isActive ? "font-bold" : ""
                        }
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
                          className={({ isActive }) =>
                            isActive ? "text-black" : ""
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
                            isActive ? "font-bold" : ""
                          }
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
                            className="ring ring-gray-700 my-auto md:ring-black rounded-[50%] block h-8 w-8"
                            src={user?.photoURL}
                            alt="not found"
                          />
                        </div>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
