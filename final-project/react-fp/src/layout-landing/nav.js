import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const NavLanding = () => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="text-3xl font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Jobseek
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/Home">Home</Link>
              </li>

              {!Cookies.get("token") && (
                <li className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                  <Link to="/Login"> Login</Link>
                </li>
              )}

              {Cookies.get("token") && (
                <li
                  onClick={() => {
                    Cookies.remove("token");
                    window.location = "/Login";
                  }}
                  className="nav-item px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <Link to="/Logout">Logout</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavLanding;
