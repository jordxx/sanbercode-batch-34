import React from "react";
import ReactBG from "../assets/img/reactbg.png"

const About = () => {
    return (
      <>
        <div className="bg-white">
          <div className=" max-w-4xl rounded overflow-hidden shadow-lg m-auto mt-10">
            <img
              className="object-cover h-48 w-full m-auto"
              src={ReactBG}
              alt="React Wallpaper"
            />
            <div className="px-10 py-4">
              <div className="font-bold text-xl mb-2">
                Data Peserta Bootcamp Sanbercode - React JS
              </div>
              <ul className="text-black-700 text-base">
                <li>1. Nama : Daniel Jordan</li>
                <li>2. Email : danieljordan553@gmail.com</li>
                <li>3. Sistem Operasi : MacOS Monterey</li>
                <li>4. Akun Gitlab : gitlab.com/jordxx</li>
                <li>5. Akun Telegram : Daniel Jordan - 0818 699 152</li>
              </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #coding
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #reactJS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #bootcamp
              </span>
            </div>
          </div>
        </div>
      </>
    );
}

export default About