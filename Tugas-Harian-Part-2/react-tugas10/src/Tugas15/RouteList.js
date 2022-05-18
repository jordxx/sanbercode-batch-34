import React, { useContext, useEffect } from "react";
import { RouteContext } from "./RouteContext";
import { Link } from "react-router-dom";

const RouteMahasiswaListtw = () => {
  const { mahasiswa, functions } = useContext(RouteContext);
  const { fetchData, functionDelete, functionEdit } = functions;

  useEffect(() => {
    fetchData();
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
    console.log(idMahasiswa)
  };

  const handleDelete = (ev) => {
    let index = parseInt(ev.target.value);
    
    functionDelete(index);
    console.log(index)
  };

  return (
    <>
      <div className="m-10">
        <Link to="Tugas14/create">
          <input
            type="button"
            className="m-auto w-4/6 block rounded-sm font-medium border rounded-full cursor-pointer text-center text-sm py-4 px-4 text-white bg-gray-900 border-gray-900 hover:bg-black hover:border-black align-midle"
            value="Input data mahasiswa"
          />
        </Link>
      </div>
      <table className="tableMahasiswa">
        <thead>
          <tr>
            <th>NORE</th>
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
                      <button
                        onClick={handleEdit}
                        value={val.id}
                        type="button"
                        className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-sm py-2 px-4 text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-white "
                      >
                        Update
                      </button>

                      <button
                        className="inline-block m-5 rounded-sm font-medium border border-solid cursor-pointer text-center text-sm py-2 px-4 text-red-400 bg-transparent border-red-400 hover:bg-red-400 hover:text-white "
                        onClick={handleDelete}
                        value={val.id}
                      >
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
    </>
  );
};

export default RouteMahasiswaListtw;
