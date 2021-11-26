import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { logOut, user } = useAuth();
  const toggleNav = () => {
    const resNav = document.getElementById("mobile-menu");
    if (resNav.classList.contains("hidden")) {
      resNav.classList.replace("hidden", "block");
    } else {
      resNav.classList.replace("block", "hidden");
    }
  };
  const toggleProfileOptions = () => {
    const resNav = document.getElementById("toggleProfileOptions");
    if (resNav.classList.contains("hidden")) {
      resNav.classList.replace("hidden", "block");
    } else {
      resNav.classList.replace("block", "hidden");
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <div className="block lg:hidden h-8 w-auto text-textPrimary font-bold text-2xl">
                DGH
              </div>
              <div className="hidden lg:block h-8 w-auto text-textPrimary font-bold text-xl">
                DGH - Dohar General Hospital
              </div>
            </NavLink>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/home"
                  activeClassName="bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/services"
                  activeClassName="bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </NavLink>

                <NavLink
                  to="/gallery"
                  activeClassName="bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gallery
                </NavLink>

                <NavLink
                  to="/contact"
                  activeClassName="bg-gray-900"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </NavLink>
                {!user.email && 
                  <NavLink
                    to="/login"
                    activeClassName="bg-gray-900"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>
                }
              </div>
            </div>
          </div>

          {user.email && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleProfileOptions}
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white items-center justify-between"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className="ml-3 mr-3 text-textPrimary">
                      {user.displayName || user.email}
                    </span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={
                        user.photoURL ||
                        "https://avatarfiles.alphacoders.com/127/thumb-127739.png"
                      }
                      alt=""
                    />
                  </button>
                </div>

                <div
                  id="toggleProfileOptions"
                  className="hidden origin-top-right absolute right-0 mt-4 w-32 rounded-md shadow-lg py-1 bg-bgPrimary ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <button
                    onClick={logOut}
                    to="/"
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sm:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/home"
            
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </NavLink>

          <NavLink
            to="/gallery"
            
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Gallery
          </NavLink>
          {!user.email && 
          <NavLink
             to="/login"
            
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
             Log In
          </NavLink>
}
        </div>
      </div>
    </nav>
  );
};

export default Header;
