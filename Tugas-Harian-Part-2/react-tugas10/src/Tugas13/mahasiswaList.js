import React, { useContext, useEffect } from "react";
import "./style.css";
import { MahasiswaContext } from "./mahasiswaContext";

const MahasiswaList = () => {
  const{ mahasiswa, functions} = useContext(MahasiswaContext)
  const {fetchData, functionDelete, functionEdit} = functions


  useEffect(() => {
    fetchData()
  }, []);

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

  const handleEdit = (ev) => {
    let idMahasiswa = parseInt(ev.target.value);
    functionEdit(idMahasiswa);
  };

  const handleDelete = (ev) => {
    let index = parseInt(ev.target.value);

    functionDelete(index)
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
                      <button onClick={handleEdit} value={val.id}>
                        update
                      </button>
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
      <br/><br/>
    </>
  );
};

export default MahasiswaList;
