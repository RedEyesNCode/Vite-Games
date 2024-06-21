import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ccbet from "../assets/ic_cc_bet.png";
import Input from "./Input";
import PhoneInput from "./PhoneInput";
import { AiTwotoneCloseCircle } from "react-icons/ai";

function GlobalLoginDialog({ handleClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({ number: "", password: "" });
  const navigate = useNavigate();

  const handleClickLogin = () => {
    if (!formData.number || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate Login (Replace with your actual login logic)
    setTimeout(() => {
      toast.success("Login successful!");
      navigate("/cbet");
    }, 1000);
  };

  const handleLogin = () => {
    // Perform your authentication logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform flex  flex-col items-center justify-center -translate-x-1/2 h-screen w-screen -translate-y-1/2 backdrop-blur-sm shadow-lg rounded-md p-6">
      <div className="w-fit bg-slate-900 border-[1px]  border-white rounded-md h-fit mx-auto flex flex-col items-center   p-7">
        <ToastContainer position="top-center" autoClose={3000} />

        <h2 className="text-white text-[17px] font-semibold text-center mt-4">
          Login
        </h2>
        <div className="h-[20px]"></div>

        <div className="flex flex-col items-start text-white w-full">
          <label>Mobile Number</label>
          <PhoneInput
            handleTextValue={(e) => setFormData({ ...formData, number: e })}
          />
        </div>
        <div className="h-[20px]"></div>

        <div className="flex flex-col items-start text-white w-full">
          <label>Password</label>
          <Input
            handleTextValue={(e) => setFormData({ ...formData, password: e })}
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div class="flex items-center justify-between ">
          <div class="flex items-center p-2">
            <input type="checkbox" id="rememberMe" class="mr-2 rounded" />
            <label for="rememberMe" class="text-white">
              Remember Me
            </label>
          </div>

          <a href="#" class="text-yellow-500">
            Forgot Password?
          </a>
        </div>
        <div className="h-[20px]"></div>

        <div className="flex flex-col justify-center items-center bg-slate-900 w-full">
          <button
            onClick={handleClickLogin}
            className="bg-yellow-400 w-full text-brown-600 font-semibold  rounded-xl shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Login
          </button>
          <label className="text-yellow-500 font-bold font-sans text-[15px] mt-5">
            Register An Account
          </label>
        </div>
        
      </div>
      <AiTwotoneCloseCircle
        className="w-[40px] h-[40px] "
        onClick={handleClose}
      />
    </div>
  );
}

export default GlobalLoginDialog;
