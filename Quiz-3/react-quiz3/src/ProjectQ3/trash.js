import React from "react";
import "../assets/css/style.css";
import Avlogo from "../assets/img/avbg.jpeg";

function Trash() {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link href="./assets/css/style.css" rel="stylesheet" />
        <div className="row">
          <div className="section">
            <div className="card">
              <div>
                <h2>Avengers</h2>
                <h5>Release Year : 2018</h5>
                <img
                  classname="fakeimg"
                  style={{ width: "50%", height: "100%", objectFit: "cover" }}
                  src={Avlogo}
                  alt="Avlogo"
                />
                <br />
                <br />
                <div>
                  <strong>Price: price</strong>
                  <br />
                  <strong>Rating: rating</strong>
                  <br />
                  <strong>Size: size</strong>
                  <br />
                  <strong style={{ marginRight: "10px" }}>
                    Platform : Android &amp; IOS
                  </strong>
                  <br />
                </div>
                <p>
                  <strong style={{ marginRight: "10px" }}>Description :</strong>
                  {"{"}item.description{"}"}
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <h5>© Quiz 3 ReactJS Sanbercode</h5>
        </footer>
      </div>
      ;
      {/* <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        <div className="py-8">
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
                      Name
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
                              <p className="text-gray-900 whitespace-no-wrap">
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
                                {m.rating}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {m.is_android_app}
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm m-right">
                              <button className="mr-2 relative inline-block px-3 py-1 font-semibold text-white-900 leading-tight">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Edit</span>
                              </button>
                              <button className="relative inline-block px-3 py-1 font-semibold text-white-900 leading-tight">
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
      </div> */}
    </>
  );
}

export default Trash;
