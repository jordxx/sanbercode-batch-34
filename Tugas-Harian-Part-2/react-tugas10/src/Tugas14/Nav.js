import React from "react";
import { Link } from "react-router-dom";
import "./Route.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Tugas10">Tugas 10</Link>
        </li>

        <li>
          <Link to="/Tugas11">Tugas 11</Link>
        </li>

        <li>
          <Link to="/Tugas12">Tugas 12</Link>
        </li>

        <li>
          <Link to="/Tugas13">Tugas 13</Link>
        </li>

        <li>
          <Link to="/Tugas14">Tugas 14</Link>
        </li>
      </ul>
    </nav>
    
  );
};

export default Nav;
