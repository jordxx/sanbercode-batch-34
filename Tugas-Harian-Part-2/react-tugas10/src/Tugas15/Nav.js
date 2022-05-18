import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import Gambar from "../img/logo.png";

const NavTw = () => {
  return (
    <>
      <div>
        <nav className="bg-white dark:bg-gray-800  ">
          <div className="max-w-10xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img
                    className="h-15 w-30 place-items-start"
                    src={Gambar}
                    alt="Workflow"
                  />
                </a>
                <div className="hidden md:block">
                  <ul className="ml-10 flex items-baseline space-x-10">
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas10">Tugas 10</Link>
                    </li>
                    <li className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas11">Tugas 11</Link>
                    </li>
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas12">Tugas 12</Link>
                    </li>
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas13">Tugas 13</Link>
                    </li>
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas14">Tugas 14</Link>
                    </li>
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas15">Tugas 15</Link>
                    </li>
                    <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Register">Register</Link>
                    </li>
                    {!Cookies.get("token") && (
                      <li className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/Login">Login</Link>
                      </li>
                    )}

                    {Cookies.get("token") && (
                      <li
                        onClick={() => {
                          Cookies.remove("token");
                          // history.push('/Login')
                          window.location = "/Login";
                        }}
                        className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        <Link to="/Logout">Logout</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavTw;
