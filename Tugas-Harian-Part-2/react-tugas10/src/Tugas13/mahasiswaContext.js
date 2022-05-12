import axios from "axios";
import React, { createContext, useState } from "react";

export const MahasiswaContext = createContext();

export const MahasiswaProvider = (props) => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });

  const fetchData = async () => {
    let result = await axios.get(
      `https://backendexample.sanbercloud.com/api/student-scores`
    );
    let data = result.data;
    let output = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        score: e.score,
        course: e.course,
      };
    });
    setMahasiswa(output);
  };

  
  const functionSubmit = () => {
    axios
      .post(`https://backendexample.sanbercloud.com/api/student-scores`, {
        name: input.name,
        course: input.course,
        score: input.score,
      })
      .then((res) => {
        setMahasiswa([
          ...mahasiswa,
          {
            id: res.data.id,
            name: res.data.name,
            course: res.data.course,
            score: res.data.score,
          },
        ]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const functionEdit = (idMahasiswa) => {
    axios
      .get(
        `http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`
      )
      .then((res) => {
        let data = res.data;
        let Obj = {
          name: data.name,
          course: data.course,
          score: data.score,
        };

        setCurrentIndex(data.id);
        setInput(Obj);
      });
  };

  const functionUpdate = (currentIndex) => {
    axios
      .put(
        `https://backendexample.sanbercloud.com/api/student-scores/${currentIndex}`,
        {
          name: input.name,
          course: input.course,
          score: input.score,
        }
      )
      .then((res) => {
        let updatedItem = mahasiswa.find((e) => e.id === currentIndex);
        updatedItem.name = input.name;
        updatedItem.course = input.course;
        updatedItem.score = input.score;
        setMahasiswa([...mahasiswa]);
      });
  };

  const functionDelete = (index) => {
     axios
       .delete(
         `https://backendexample.sanbercloud.com/api/student-scores/${index}`
       )
       .then(() => {
         let newMahasiswa = mahasiswa.filter((e) => {
           return e.id !== index;
         });
         setMahasiswa(newMahasiswa);
       })
  };

  const functions = {
    fetchData,
    functionDelete,
    functionSubmit,
    functionUpdate,
    functionEdit
  };

  return (
    <MahasiswaContext.Provider
      value={{
        mahasiswa,
        setMahasiswa,
        currentIndex,
        setCurrentIndex,
        input,
        setInput,
        functions
      }}
    >
      {props.children}
    </MahasiswaContext.Provider>
  );
};
