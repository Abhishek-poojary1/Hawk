import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

import logo from "./images/sb-logo.png";
import banner from "./images/xyz2.jpg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { email, password, updateEmail, updatePassword } = useAuth();
  // const [cred, setcred] = useState(false);
  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const loginsubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (email === "ZXC@gmail.com" && password === "zxczxc") {
      // setcred(true);
      // localStorage.setItem("cred", "true");
      sessionStorage.setItem("cred", "true");
      navigate("/Dashboard");
    } else {
      alert("invalid details");
    }
  };

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Clicked on Register");
  };
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    // <section className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="bg-[#caf0f8] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
      <div className="md:w-1/2 px-8 md:px-16 grid ">
        {/* <h2 className="font-bold text-2xl text-[#002D74]">Login</h2> */}
        <div className="w-11 flex justify-self-center">
          <img src={logo} alt="SmartBuild" />
        </div>
        <p className="text-lg  justify-self-center font-bold mt-3 text-[#002D74]">
          Welcome back!
        </p>

        <form className="flex flex-col gap-4" onSubmit={loginsubmit}>
          <div className="mt-4 text-black">
            <p className="text-sm">
              Email <span className="text-red-500">*</span>
            </p>
            <input
              className="p-1 rounded-xl border"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your mail address"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />
          </div>

          <div className="relative  text-black">
            <p className="text-sm">
              Password <span className="text-red-500">*</span>
            </p>

            <input
              className="p-1 rounded-xl border"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              onClick={showpass}
              className="bi bi-eye absolute mt-2.5 top-1/2 right-6 -translate-y-1/2 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </div>

          <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-800 mx-auto w-[120px]">
            Login
          </button>
          <div className=" text-xs border-[#002D74] py-2 text-[#002D74]">
            <a href="/  ">Forgot your password?</a>
          </div>
        </form>

        <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>

        <div className="mt-3 text-sm flex justify-between items-center text-[#002D74]">
          <p>Don't have an account?</p>
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={handleRegister}
          >
            Register
          </span>
        </div>
      </div>
      <div className="md:block hidden w-1/2" style={{ height: "500px" }}>
        <img className="rounded-2xl h-full" src={banner} alt="Login" />
      </div>
    </div>
    // </section>
  );
};

export default LoginPage;
