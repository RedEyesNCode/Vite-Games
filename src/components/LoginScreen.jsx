import React, { useState } from "react";
import PhoneInput from "./subcomponents/PhoneInput";
import { ToastContainer, toast } from "react-toastify";
import ccbet from "./assets/ic_cc_bet.png";
import Input from "./subcomponents/Input";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling


const LoginScreen = () => {
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

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center">
      <div className="max-w-[480px]  border-[1px] border-slate-600 h-screen mx-auto flex flex-col items-center bg-slate-800 p-2">
        <ToastContainer 
          position="top-center"
          autoClose={3000} 
        />
        <img
          className="items-center ml-5 pl-2 translate-x-8"
          src={ccbet}
          alt="CC Bet Logo"
        />

        <h2 className="text-white text-[17px] font-semibold text-center mt-4">Login</h2>
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
        <div className="h-[20px]"></div>

        <div className="flex flex-col justify-center items-center bg-slate-800 w-full">
          <button
            onClick={handleClickLogin}
            className="bg-yellow-400 w-full text-brown-600 font-semibold py-2 px-8 rounded-xl shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Login
          </button>
          <div className="h-[20px]"></div>
          <button className="border-[1px] border-yellow-400 w-full text-white font-semibold py-2 px-8 rounded-xl shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
