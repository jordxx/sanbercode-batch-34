import React from "react";
import { Link } from "react-router-dom";
import Gambar from "../img/logo.png";

const NavTw = () => {
  return (
    <>
      <div>
        <nav class="bg-white dark:bg-gray-800  ">
          <div class="max-w-10xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
              <div class=" flex items-center">
                <a class="flex-shrink-0" href="/">
                  <img
                    class="h-15 w-30 place-items-start"
                    src={Gambar}
                    alt="Workflow"
                  />
                </a>
                <div class="hidden md:block">
                  <ul class="ml-10 flex items-baseline space-x-10">
                    <li class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas10">Tugas 10</Link>
                    </li>
                    <li class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas11">Tugas 11</Link>
                    </li>
                    <li class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas12">Tugas 12</Link>
                    </li>
                    <li class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas13">Tugas 13</Link>
                    </li>
                    <li class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas14">Tugas 14</Link>
                    </li>
                    <li class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <Link to="/Tugas15">Tugas 15</Link>
                    </li>
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
