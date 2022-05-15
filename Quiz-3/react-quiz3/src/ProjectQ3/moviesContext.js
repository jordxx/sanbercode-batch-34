import React, { createContext, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const RouteMovieProvider = (props) => {
  const [movieList, setMovie] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [input, setInput] = useState({
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

  // REST API Data
  const fetchData = async () => {
    let result = await axios.get(
      `https://backendexample.sanbercloud.com/api/mobile-apps`
    );
    let data = result.data;
    let output = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        category: e.category,
        description: e.description,
        release_year: e.release_year,
        size: e.size,
        price: e.price,
        rating: e.rating,
        image_url: e.image_url,
        is_android_app: e.is_android_app,
        is_ios_app: e.is_ios_app,
      };
    });

    setMovie(output);
  };

  //Handle submit
  const functionSubmit = () => {
      axios.post(`https://backendexample.sanbercloud.com/api/mobile-apps`, {
        name: input.name,
        category: input.category,
        description: input.description,
        release_year: input.release_year,
        size: input.size,
        price: input.price,
        rating: input.rating,
        image_url: input.image_url,
        is_android_app: input.is_android_app,
        is_ios_app: input.is_ios_app,
      })
      .then((res) => {
          setMovie([
            ...movieList,
            {
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
            },
          ]);
      })
      .catch((err) => {
          console.log(err.message)
      })

  };

  //Handle Edit
  const functionEdit = (ID_MOBILE_APPS) => {
      axios.get(
        `https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`
      )
      .then((res) => {
          let data = res.data
          let Obj = {
            name: data.name,
            category: data.category,
            description: data.description,
            release_year: data.release_year,
            size: data.size,
            price: data.price,
            rating: data.rating,
            image_url: data.image_url,
            is_android_app: data.is_android_app,
            is_ios_app: data.is_ios_app,
          };
          setCurrentIndex(data.id);
          setInput(Obj);
      })
  };

  //Handle Update
  const functionUpdate = (currentIndex) => {};

  //Handle Delete
  const functionDelete = (index) => {
      axios
        .delete(
          `https://backendexample.sanbercloud.com/api/mobile-apps/${index}`
        )
        .then(() => {
          let newMovie = movieList.filter((e) => {
            return e.id !== index;
          });
          setMovie(newMovie);
          console.log(index);
        });
  };

  const functions = {
    fetchData,
    functionDelete,
    functionEdit,
    functionUpdate,
    functionSubmit
  };

  return (
    <MovieContext.Provider
      value={{
        movieList,
        setMovie,
        currentIndex,
        setCurrentIndex,
        input,
        setInput,
        functions,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
