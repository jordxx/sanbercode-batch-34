import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavDashboard from "../layout-dashboard/navDashboard";
import { JobContext } from "./jobContext";

const JobForm = () => {
  let { Id } = useParams();

  const { currentIndex, setCurrentIndex, input, setInput, functions } =
    useContext(JobContext);
  const { functionUpdate, functionSubmit } = functions;

  useEffect(() => {
    if (Id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
        .then((res) => {
          setInput({
            title: res.data.title,
            job_description: res.data.job_description,
            job_qualification: res.data.job_qualification,
            job_type: res.data.job_type,
            job_tenure: res.data.job_tenure,
            job_status: res.data.job_status,
            company_name: res.data.company_name,
            company_image_url: res.data.company_image_url,
            company_city: res.data.company_city,
            salary_min: res.data.salary_min,
            salary_max: res.data.salary_max,
          });
        });
    }
  }, [setInput, Id]);

  const handleChange = (event) => {
    let inputName = event.target.name;
    let inValue = event.target.value;

    
    setInput({ ...input, [inputName]: inValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (currentIndex === -1) {
      functionSubmit();
    } else {
      functionUpdate(currentIndex);
    }
    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
    setCurrentIndex(-1);
    
  };

  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavDashboard />
        {/* Header */}
        <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full"></div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0  bg-slate-900">
                  <div className="flex flex-wrap items-center text-white">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Jobs Form
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <Link to="/Job">
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Back
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects form */}
                  <div className="items-center w-full bg-transparent border-collapse">
                    <div className="sm:mt-0">
                      <div className="md:grid md:grid-cols-3 md:gap-6">
                        <img
                          className="mt-10"
                          src="http://unblast.com/wp-content/uploads/2020/05/Job-Interview-Illustration.jpg"
                            alt="imageFormJob"
                        />
                        <div className="mt-5 md:mt-0 md:col-span-2">
                          <form onSubmit={handleSubmit} method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                              <div className="px-4 py-5 bg-gray-100 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="first_name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Title
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Job"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-500 rounded-md"
                                      name="title"
                                      value={input.title}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="first_name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Company
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Company"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-500 rounded-md"
                                      name="company_name"
                                      value={input.company_name}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="first_name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Description
                                    </label>
                                    <textarea
                                      name="job_description"
                                      rows="5"
                                      placeholder="description"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-500 rounded-md"
                                      value={input.job_description}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="first_name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Image
                                    </label>
                                    <textarea
                                      name="company_image_url"
                                      placeholder="url"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-500 rounded-md"
                                      value={input.company_image_url}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="first_name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Qualification
                                    </label>
                                    <input
                                      type="text"
                                      name="job_qualification"
                                      placeholder=" . . . "
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-500 rounded-md"
                                      value={input.job_qualification}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="first_name"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Type
                                    </label>
                                    <input
                                      type="text"
                                      name="job_type"
                                      autoComplete="given-name"
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-500 rounded-md"
                                      value={input.job_type}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-4">
                                    <label
                                      htmlFor="email_address"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Tenure
                                    </label>
                                    <input
                                      type="text"
                                      name="job_tenure"
                                      className="mt-1 shadow-20 focus:ring-indigo-500 focus:border-indigo-500 block w-60 shadow-md sm:text-sm border-gray-300 rounded-md"
                                      value={input.job_tenure}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-4">
                                    <label
                                      htmlFor="email_address"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Status
                                    </label>
                                    <input
                                      type="number"
                                      min="0"
                                      max="1"
                                      name="job_status"
                                      className="mt-1 w-10 shadow-20 focus:ring-indigo-500 focus:border-indigo-500 block shadow-md sm:text-sm border-gray-300 rounded-md"
                                      value={input.job_status}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-4">
                                    <label
                                      htmlFor="country"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      name="company_city"
                                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      value={input.company_city}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="email_address"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Minimum Salary
                                    </label>
                                    <input
                                      min="1000000"
                                      type="number"
                                      name="salary_min"
                                      value={input.salary_min}
                                      onChange={handleChange}
                                      placeholder="1.000.000"
                                      className="mt-1 shadow-20 focus:ring-indigo-500 focus:border-indigo-500 block w-60 shadow-md sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                    <label
                                      htmlFor="email_address"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Maximum Salary
                                    </label>
                                    <input
                                      type="number"
                                      max="30000000"
                                      name="salary_max"
                                      value={input.salary_max}
                                      onChange={handleChange}
                                      placeholder="30.000.000"
                                      className="mt-1 shadow-20 focus:ring-indigo-500 focus:border-indigo-500 block w-60 shadow-md sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                  type="submit"
                                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      </div>
    </>
  );
};

export default JobForm;
