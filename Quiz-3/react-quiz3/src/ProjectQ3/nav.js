import React from "react";
import { Link } from "react-router-dom";
import Gambar from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faSearch } from "@fortawesome/free-solid-svg-icons";

 
 const NavMobile = () => {
     const element = <FontAwesomeIcon icon={faSearch} />
    

    return (
    <>
      <div>
        <nav className="bg-neutral-900  ">
          <div className="max-w-10xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img
                    className="h-12 w-25 place-items-start"
                    src={Gambar}
                    alt="Workflow"
                  />
                </a>
                <div className="hidden md:block">
                  <ul className="ml-10 flex items-baseline space-x-10">
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Movies">Movies </Link>
                    </li>

                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/About">About</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <label className="relative block">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
        {element}
    </svg>
  </span>
  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavMobile;
