import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };

  const handleReg = (event) => {
    event.preventDefault();
    let { name, email, password } = input;

    axios
      .post(`https://backendexample.sanbersy.com/api/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let { data } = res;

        Cookies.set("token", data.token, { expires: 1 });
        history.push("/Tugas15");
      })
      .catch((error) => {
        let { data } = error.response;
        let { status } = error.response;
        if (status === 400) {
          alert(data.error);
        }
      });

    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="containerMahasiswa">
        <div className="divMahasiswa">
          <h1>register</h1>
          <form onSubmit={handleReg} method="POST">
            <label>
              Name :
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={input.name}
              />
              <br />
              <br />
            </label>

            <label>
              Email :
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={input.email}
              />
              <br />
              <br />
            </label>

            <label>
              Password :
              <input
                type="password"
                name="password"
                placeholder=" . . . "
                onChange={handleChange}
                value={input.password}
              />
              <br />
              <br />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
