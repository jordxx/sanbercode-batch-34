import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Tugas12 = () => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [fetchStatus, setFecthStatus] = useState(true);

  useEffect(() => {
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
    fetchData();

    if (fetchStatus) {
      fetchData();
      setFecthStatus(false);
    }
  }, [fetchStatus, setFecthStatus]);

  const handleIndexNil = (param) => {
    if (param >= 80) {
      return "A";
    } else if (param >= 70 && param < 80) {
      return "B";
    } else if (param >= 60 && param < 70) {
      return "C";
    } else if (param >= 50 && param < 60) {
      return "D";
    } else if (param < 50) {
      return "E";
    }
  };

  let [input, setInput] = useState({
    name: "",
    score: 0,
    course: "",
  });

  const handleChange = (event) => {
    let inputName = event.target.name;
    let inValue = event.target.value;

    setInput({ ...input, [inputName]: inValue });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let { name, course, score } = input;

    if (currentIndex === -1) {
      axios
        .post(`https://backendexample.sanbercloud.com/api/student-scores`, {
          name,
          course,
          score,
        })
        .then((res) => {
          setFecthStatus(true);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {

    }
    setInput({
      name: "",
      score: 0,
      course: "",
    });

    setCurrentIndex(-1);
  };

  const handleEdit = (ev) => {
    let idMahasiswa = parseInt(ev.target.value)
    axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
      .then((res) => {
        setFecthStatus(true);
        let data = res.data
        
        setCurrentIndex(data.id);
        setInput(data)
        console.log(data);
      });
  }

  const handleDelete = (ev) => {
    let index = parseInt(ev.target.value);
    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${index}`
      )
      .then((res) => {
        setFecthStatus(true);
      });
  };

  return (
    <>
      <h1>Daftar Nilai Mahasiswa</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Index Nilai</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {mahasiswa !== null && (
            <>
              {mahasiswa.map((val, index) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.course}</td>
                    <td>{val.score}</td>
                    <td>{handleIndexNil(val.score)}</td>
                    <td>
                      <button onClick={handleEdit} value={val.id}>update</button>
                      <button onClick={handleDelete} value={val.id}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>

      <br />
      <br />

      <div className="container">
        <form method="POST" onSubmit={handleSubmit}>
          <label>
            <h1>Form Nilai Mahasiswa</h1>
            <br />
            <br />
          </label>
          <label>
            Nama :
            <input
              name="name"
              placeholder=" . . . "
              type="text"
              value={input.name}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>

          <label>
            Mata Kuliah :
            <input
              name="course"
              placeholder=" . . . "
              type="text"
              value={input.course}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>

          <label>
            Nilai :
            <input
              name="score"
              placeholder=" . . . "
              type="number"
              value={input.score}
              onChange={handleChange}
            />
            <br />
            <br />
          </label>

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Tugas12;
