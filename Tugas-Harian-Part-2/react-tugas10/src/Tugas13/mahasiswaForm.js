import React, { useContext } from "react";
import { MahasiswaContext } from "./mahasiswaContext";

const MahasiswaForm = () => {
    const{ currentIndex, setCurrentIndex, input, setInput, functions} = useContext(MahasiswaContext)
    const {functionUpdate, functionSubmit } = functions

    const handleChange = (event) => {
      let inputName = event.target.name;
      let inValue = event.target.value;

      setInput({ ...input, [inputName]: inValue });
    };
    
    const handleSubmit = (ev) => {
    ev.preventDefault();

    if (currentIndex === -1) {
      functionSubmit()
    } else {
      functionUpdate(currentIndex);
    }
    setInput({
      name: "",
      course: "",
      score: 0,
    });

    setCurrentIndex(-1);
  }

    return (
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
              placeholder=" 0 "
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
    );
}

export default MahasiswaForm