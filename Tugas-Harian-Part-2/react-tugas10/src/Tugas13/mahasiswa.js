import React from "react";
import { MahasiswaProvider } from "./mahasiswaContext";
import MahasiswaForm from "./mahasiswaForm";
import MahasiswaList from "./mahasiswaList";

const Mahasiswa = () => {
    return (
      <MahasiswaProvider>
        <MahasiswaList />
        <MahasiswaForm/>
      </MahasiswaProvider>
    );
}

export default Mahasiswa