import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../data-job/jobContext";
import NavLanding from "./nav";

export default function VacancySec() {
  const { jobList, functions } = useContext(JobContext);
  const { fetchData } = functions;
  const [fetchStatus, setFetchStatus] = useState(true);

  //Fetch Data
  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  return (
    <>
      <NavLanding />

      <nav className="md:left-0 md:block md:fixed md:top-20 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-black flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto text-white ">
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded "
            }
          >
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-sm flex flex-col list-none">
              <li className="items-center">
                <div className="pt-2 relative mx-auto text-gray-600">
                  <input
                    className="border-2 border-gray-300 bg-white h-10 px-3 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4"
                  >
                    <svg
                      className="text-gray-600 h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 56.966 56.966"
                      style={{ enableBackground: "new 0 0 56.966 56.966" }}
                      xmlSpace="preserve"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </li>

              <li className="items-center">
                <br />
                <i className="hover:text-pink-500 text-xs uppercase py-3 font-bold block">
                  filter
                </i>

                <div>
                  <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    type="button"
                  >
                    Jobs{" "}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefault"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        {/* Card stats */}

        <div className="container max-w-full bg-gray-200 flex flex-wrap justify-between mx-auto p-5">
          {jobList !== null && (
            <>
              {jobList.map((j, keys) => {
                return (
                  <Link key={j.id} to={`/Vacancy-detail/${j.id}`}>
                    <div className="max-w-md content-center flex flex-col justify-center mx-auto bg-white m-[10vh] rounded-lg border transform transition duration-500 hover:scale-105 border-gray-200 shadow-md dark:bg-white dark:border-gray-700 ">
                      <div className=" h-40 rounded-t-lg bg-contain bg-no-repeat bg-[url(https://www.linkpicture.com/q/Rectangle-6.png)]  flex flex-col justify-end pl-20 pr-20 pt-52  max-w-[24rem]">
                        <img
                          className="object-cover h-48 w-96"
                          src={j.company_image_url}
                          alt="logo"
                        />
                      </div>
                      <div className="flex flex-col pb-10 text-center">
                        <h1 className="text-3xl text-black font-semibold ">
                          {j.title}
                        </h1>
                        <div className="mb-2 mt-2">
                          <h1 className="text-base text-black font-semibold">
                            {j.company_name}
                          </h1>
                        </div>
                        <div className="mb-2 mt-2">
                          <h1 className="text-base text-black font-semibold">
                            Details :
                          </h1>

                          <div className="mt-2 flex items-center ml-4">
                            <img
                              className="w-5"
                              src="https://cdn.iconscout.com/icon/free/png-256/location-1541-675770.png"
                              alt="logo"
                            />
                            <h1 className="text-base text-black ml-5 font-semibold">
                              {j.company_city}
                            </h1>
                          </div>

                          <div className="mt-2 flex items-center ml-4">
                            <img
                              className="w-5"
                              src="https://cdn.iconscout.com/icon/free/png-64/workers-1841985-1564902.png"
                              alt="logo"
                            />
                            <h1 className="text-base text-black ml-5 font-semibold">
                              {j.job_type}
                            </h1>
                          </div>

                          <div className="mt-2 flex items-center ml-4">
                            <img
                              className="w-5"
                              src="https://cdn.iconscout.com/icon/free/png-64/office-bag-1851149-1569214.png"
                              alt="logo"
                            />
                            <h1 className="text-base text-black ml-5 font-semibold">
                              {j.job_tenure}
                            </h1>
                          </div>

                          <div className="mt-2 flex items-center ml-4">
                            <img
                              className="w-5"
                              src="https://cdn.iconscout.com/icon/free/png-256/quality-badge-4352239-3607208.png"
                              alt="logo"
                            />
                            <h1 className="text-base text-black ml-5 font-semibold">
                              {j.job_qualification}
                            </h1>
                          </div>

                          <div className="mt-2 flex items-center ml-4">
                            <img
                              className="w-5"
                              src="https://cdn.iconscout.com/icon/free/png-64/coin-781-1093492.png"
                              alt="logo"
                            />
                            <h1 className="text-base text-blackml-5 font-semibold ml-5">
                              Rp. {j.salary_min} - {j.salary_max}
                            </h1>
                          </div>

                          <div className="mt-2 flex items-center ml-4">
                            <img
                              className="w-5"
                              src="https://cdn.iconscout.com/icon/free/png-64/task-list-1405858-1184738.png"
                              alt="logo"
                            />
                            <h1 className="text-base text-blackml-5 font-semibold ml-5">
                              {j.job_status === 0 ? "unavailable" : "available"}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </div>

        <footer className="block py-4">
          <div className="container mx-auto px-4">
            <hr className="mb-4 border-b-1 border-blueGray-200" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                  >
                    Jord
                  </a>
                </div>
              </div>
              <div className="w-full md:w-8/12 px-4">
                <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                  <li>
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://blog.creative-tim.com"
                      className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md"
                      className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
