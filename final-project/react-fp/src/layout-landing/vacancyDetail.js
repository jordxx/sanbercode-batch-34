import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavLanding from "./nav";

const VacancyDetail = () => {
  let { slug } = useParams();
  const [jobList, setJob] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  //Fetch Data
  useEffect(() => {
    if (slug !== undefined) {
      const fetchData = async () => {
        let result = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${slug}`
        );
        let data = result.data;

        let {
          id,
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        } = data;

        setJob({
          id,
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        });
      };

      if (fetchStatus) {
        fetchData();
        setFetchStatus(false);
      }
    }
  }, [fetchStatus, slug]);

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
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-white hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Home
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="hover:text-pink-500 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Job Vacancy
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="hover:text-pink-500 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Add New Job
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              OPTIONS :
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className="hover:text-pink-500 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-css3-alt mr-2 text-blueGray-400 text-base"></i>{" "}
                  Setting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        {/* Card stats */}

        <div className="max-w-full m-10 object-center rounded overflow-hidden shadow-lg">
          <img
            className="w-md m-auto"
            src={jobList.company_image_url}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {jobList.title}
            </div>
            <div className="text-md mb-2 text-center">
              {jobList.company_name}
            </div>
            <p className="text-gray-700 text-base">{jobList.job_description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {jobList.company_city}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {jobList.job_type}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {jobList.job_status === 0 ? "unavailable" : "available" }
            </span>
          </div>
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
};

export default VacancyDetail;
