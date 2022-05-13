import React from "react";
import Gambar from "../img/logo.png";
import "../Tugas10/check.css"

function MyForm() {
  return (
    <>
      <div className="App">
        <div className="cardCheckBox">
          <img src={Gambar} alt="sanbercode"></img>
          <h1 className="titleThings">THINGS TO DO</h1>
          <p className="titleTodo">During bootcamp in Sanbercode</p>
          <hr className="lineTitle" />
          <div className="containerCheckBox">
            <form>
              <input
                type="checkbox"
                id="check1"
                name="GITCLI"
                value="GITandCLI"
              />
              <label>
                Belajar GIT & CLI
                <hr className="garis" />
                <br />
              </label>

              <input
                type="checkbox"
                id="check2"
                name="htmlcss"
                value="htmlcss"
              />
              <label>
                Belajar HTML & CSS
                <hr className="garis" />
                <br />
              </label>

              <input type="checkbox" id="check3" name="js" value="javascript" />
              <label>
                Belajar Javascript
                <hr className="garis" />
                <br />
              </label>

              <input
                type="checkbox"
                id="check4"
                name="reactdasar"
                value="reactdasar"
              />
              <label>
                Belajar ReactJS Dasar
                <hr className="garis" />
                <br />
              </label>

              <input
                type="checkbox"
                id="check5"
                name="reactadvance"
                value="reactadvance"
              />
              <label>
                Belajar ReactJS Advance
                <hr className="garis" />
                <br />
              </label>

              <input type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyForm