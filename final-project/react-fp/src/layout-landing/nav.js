import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const NavLanding = () => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container mx-3xl flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-40 lg:static lg:block lg:justify-start">
            <a
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Jobseek
            </a>
          </div>
          <div
            className="lg:flex flex-grow items-right"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item px-3 py-4 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/Home">Home</Link>
              </li>

              <li className="nav-item px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/Vacancy">Jobs</Link>
              </li>

              {!Cookies.get("token") && (
                <li className="nav-item px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
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
