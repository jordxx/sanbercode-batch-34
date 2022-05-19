import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "./moviesContext";
import axios from "axios";

const MovieForm = () => {
  let {Id} = useParams();
  // console.log(Id)
  const { currentIndex, setCurrentIndex, input, setInput, functions } =
    useContext(MovieContext);

  const { functionUpdate, functionSubmit } = functions;

  useEffect(() => {
    if (Id !== undefined) {
      axios
        .get(`https://backendexample.sanbercloud.com/api/mobile-apps/${Id}`)
        .then((res) => {
          setInput({
            name: res.data.name,
            category: res.data.category,
            description: res.data.description,
            release_year: res.data.release_year,
            size: res.data.size,
            price: res.data.price,
            rating: res.data.rating,
            image_url: res.data.image_url,
            is_android_app: res.data.is_android_app,
            is_ios_app: res.data.is_ios_app,
          });
        });
    }
  }, [setInput, Id]);

  const handleChange = (event) => {
    let inputName = event.target.name;
    let inValue = event.target.value;

    setInput({ ...input, [inputName]: inValue });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (currentIndex === -1) {
      functionSubmit();
    } else {
      functionUpdate(currentIndex);
    }
    setInput({
      name: "",
      description: "",
      category: "",
      size: 0,
      price: 0,
      rating: 0,
      image_url: "",
      release_year: 0,
      is_android_app: 0,
      is_ios_app: 0,
    });

    setCurrentIndex(-1);
  };

  return (
    <>
      <div className="w-full font-sans bg-cover bg-landscape">
        <div className="container flex items-center justify-center flex-1 h-full mx-auto">
          <div className="w-full max-w-4xl">
            <div className="leading-loose">
              <form
                method="POST"
                onSubmit={handleSubmit}
                className="max-w-4xl p-10 m-auto bg-white bg-opacity-25 rounded shadow-2xl"
              >
                <p className="mb-8 text-2xl font-bold text-center text-black">
                  MOVIE FORM
                </p>

                <div className="mb-2">
                  <div className=" relative ">
                    Title :
                    <input
                      type="text"
                      name="name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Title"
                      value={input.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Category :
                    <input
                      type="text"
                      name="category"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Category"
                      value={input.category}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Description :
                    <textarea
                      rows="5"
                      name="description"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder=". . . . . ."
                      value={input.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Year :
                    <input
                      type="number"
                      name="release_year"
                      min="2007"
                      max="3000"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Release year"
                      value={input.release_year}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Size :
                    <input
                      type="number"
                      name="size"
                      min="1"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Size"
                      value={input.size}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Price :
                    <input
                      type="number"
                      name="price"
                      min="1"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Price"
                      value={input.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Rating :
                    <input
                      type="number"
                      name="rating"
                      min="1"
                      max="5"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Rating"
                      value={input.rating}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Image URL :
                    <textarea
                      rows="5"
                      name="image_url"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder=". . . . . ."
                      value={input.image_url}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="mb-2">
                  <div className=" relative ">
                    Platform :
                    <input
                      type="checkbox"
                      name="is_android_app"
                      checked={input.check}
                      onChange={(e) => {
                        handleChange({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                      className="ml-3"
                    />
                    Android
                    <br />
                    <input
                      type="checkbox"
                      name="is_ios_app"
                      checked={input.check}
                      onChange={(e) => {
                        handleChange({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                      className="ml-20"
                    />
                    IOS
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieForm;
