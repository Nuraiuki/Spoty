import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SearchBar from './SearchBar'; // Импортируйте компонент для поиска

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { logout } = useAuth();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Spoty</span>
        </a>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLoggedIn ? (
            <>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="flex text-sm bg-white rounded-full md:me-0 ring-4 ring-dark-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://cdn3.iconfinder.com/data/icons/avatars-neutral/48/bl_816_avatar_race_neutral_man_empty_woman_male_female-512.png"
                  alt="user photo"
                />
              </button>
              <button
                onClick={handleLogout}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2" // Added margin-left ml-2
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a href="/login" className="text-sm text-blue-600 dark:text-blue-500">Login</a>
              <a href="/signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</a>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
            }`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="/albums"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Albums
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
