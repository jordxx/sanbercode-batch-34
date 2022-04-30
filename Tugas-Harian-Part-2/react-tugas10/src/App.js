import React from "react";
import Gambar from "./img/logo.png";
import MyForm from "./checkbox";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="card">
          <img src={Gambar} alt="sanbercode"></img>
          <h1 className="titleThings">THINGS TO DO</h1>
          <p className="titleTodo">During bootcamp in Sanbercode</p>
          <hr className="lineTitle" />
          <div className="container">
            <MyForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
