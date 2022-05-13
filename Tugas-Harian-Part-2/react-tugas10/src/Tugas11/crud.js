import React, { useState } from "react";
import "../Tugas11/crud.css";

const Tugas11 = () => {
  const [daftarBuah, setDaftarBuah] = useState([
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
  ]);

  let [input, setInput] = useState({
    nama: "",
    hargaTotal: 0,
    beratTotal: 0,
  });

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleChange = (ev) => {
    let inputName = ev.target.name;
    let inVal = ev.target.value;

    setInput({ ...input, [inputName]: inVal });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let { nama, hargaTotal, beratTotal } = input;

    let newData = daftarBuah;

    if (currentIndex === null) {
      newData = [...daftarBuah, { nama, hargaTotal, beratTotal }];
    } else {
      newData[currentIndex] = input;
    }

    setDaftarBuah([...newData]);
    setInput({
      nama: "",
      hargaTotal: 0,
      beratTotal: 0,
    });
  };

  const handleEdit = (ev) => {
    let index = parseInt(ev.target.value);
    let editItem = daftarBuah[index];

    setInput(editItem);
    setCurrentIndex(index);
  };

  const handleDelete = (ev) => {
    let index = parseInt(ev.target.value);
    let deletedItem = daftarBuah[index];
    let newData = daftarBuah.filter((e) => {
      return e !== deletedItem;
    });

    setDaftarBuah(newData);
  };

  return (
    <>
      <h1 className="h1Crud"> Daftar Harga Buah</h1>
      <table className="tableCrud">
        <thead className="thCrud">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Buah</th>
            <th>Berat Total</th>
            <th>Harga /kg</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {daftarBuah !== null && (
            <>
              {daftarBuah.map((daftar, index) => {
                let beratKg = daftar.beratTotal / 1000;
                let totalHarga = daftar.hargaTotal / beratKg;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{daftar.nama}</td>
                    <td>{daftar.hargaTotal}</td>
                    <td>{beratKg} kg</td>
                    <td>{totalHarga}</td>
                    <td>
                      <button onClick={handleEdit} value={index}>
                        update
                      </button>
                      <button onClick={handleDelete} value={index}>
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
      <div className="containerCrud">
        <div className="divCrud">
          <form method="POST" onSubmit={handleSubmit}>
            <label>
              Form Daftar Harga Buah
              <br />
              <br />
            </label>
            <label>
              Nama :
              <input
                name="nama"
                placeholder=" . . . "
                onChange={handleChange}
                value={input.nama}
                type="text"
              />
              <br />
              <br />
            </label>

            <label>
              Harga Total :
              <input
                name="hargaTotal"
                placeholder=" . . . "
                onChange={handleChange}
                value={input.hargaTotal}
                type="number"
              />
              <br />
              <br />
            </label>

            <label>
              Berat Total (gr) :
              <input
                name="beratTotal"
                placeholder=" . . . "
                onChange={handleChange}
                value={input.beratTotal}
                type="number"
              />
              <br />
              <br />
            </label>

            <input className="inputCrud" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Tugas11;
