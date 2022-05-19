import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  let history = useHistory();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;
    axios
      .post(`https://backendexample.sanbersy.com/api/user-login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let { data } = res;
        Cookies.set("token", data.token, { expires: 1 });
        history.push("/Home");
        alert("Login Success !");
      })
      .catch((error) => {
        let { data } = error.response;
        let { status } = error.response;
        if (status === 400) {
          alert(data.error);
        }
      });

    setInput({
      email: "",
      password: "",
    });
    console.log(input);
  };

  return (
    <>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage:
              "url('https://cdn.wallpapersafari.com/23/19/OAuMdh.jpg')",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <h1 className="text-center text-2xl">Login</h1>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold"></div>
                  <form onSubmit={handleLogin} method="POST">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email@example.com"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleChange}
                        value={input.email}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        onChange={handleChange}
                        value={input.password}
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        />
                        <Link to="/Register">
                          <span className="text-sm font-semibold text-blue-700"> Register</span>
                        </Link>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        value="Submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
