import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./moviesContext";

const MoviesList = () => {
  // let history = useHistory()
  const { movieList, functions } = useContext(MovieContext);
  const { fetchData, functionEdit, functionDelete } = functions;
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => { 
    if(fetchStatus){
      fetchData();
      setFetchStatus(false)
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const handlePlatform = (param) => {
    if (param.is_android_app === 1 && param.is_ios_app === 1) {
      return (
        <span>
          {" "}
          Android <br /> iOS
        </span>
      );
    }

    if (param.is_ios_app === 1) {
      return "iOS";
    } else if (param.is_android_app === 1) {
      return "Android";
    }
  };

  const handleEdit = (ev) => {
    let ID_MOBILE_APPS = parseInt(ev.currentTarget.value);
    // history.push(`/Movies/edit/${ID_MOBILE_APPS}`)
    functionEdit(ID_MOBILE_APPS);
  };

  const handleDelete = (ev) => {
    let index = parseInt(ev.currentTarget.value);
    functionDelete(index);
    // console.log(ev.target);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 max-w-full">
        <div className="py-8">
          <h1 className="text-center font-bold text-2xl">MOVIE LIST</h1>
          <Link to="/Movies/create">
            <input
              type="button"
              className="m-auto w-4/6 block rounded-full font-medium border cursor-pointer text-center text-sm py-4 px-4 text-white bg-gray-900 border-gray-900 hover:bg-black hover:border-black align-midle"
              value="Input data movies"
            />
          </Link>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Release Year
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Size
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Image URL
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Platform
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-bold"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {movieList !== null && (
                    <>
                      {movieList.map((m) => {
                        return (
                          <tr key={m.id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {m.id}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {m.name}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {m.category}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="overflow-hidden truncate w-40 text-gray-900 whitespace-no-wrap">
                                {m.description}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {m.release_year}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {m.size}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {m.price}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {m.rating} / 5
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="overflow-hidden truncate w-20 text-gray-900 whitespace-no-wrap">
                                {m.image_url}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {handlePlatform(m)} <br />
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm m-right">
                              <button
                                className="mr-2 relative inline-block px-3 py-1 font-semibold text-white-900 leading-tight"
                                onClick={handleEdit}
                                value={m.id}
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Edit</span>
                              </button>

                              <button
                                onClick={handleDelete}
                                value={m.id}
                                className="mr-2 relative inline-block px-3 py-1 font-semibold text-white-900 leading-tight"
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Delete</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
