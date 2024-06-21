import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import ccbet from "../assets/ic_cc_bet.png";
import Input from "./Input";
import PhoneInput from "./PhoneInput";
import "react-toastify/dist/ReactToastify.css";

function GlobalRegisterDialog({ handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
    upiId: "",
    paymentMode: "",
  });
  const navigate = useNavigate();

  const handleClickLogin = () => {
    const { name, number, password, confirmPassword, upiId, paymentMode } = formData;

    if (!name || !number || !password || !confirmPassword || !upiId || !paymentMode) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Simulate Login (Replace with your actual login logic)
    setTimeout(() => {
      toast.success("Login successful!");
      navigate("/cbet");
    }, 1000);
  };

  return (
    <div className="fixed top-1/2 h-screen left-1/2 transform flex flex-col items-center justify-center -translate-x-1/2  w-screen -translate-y-1/2 backdrop-blur-sm shadow-lg rounded-md p-6">
      <div className="w-fit h-screen bg-slate-900 border-[1px] border-white rounded-md  mx-auto flex flex-col  p-7">
      
     
        <ToastContainer position="top-center" autoClose={3000} />

        <h2 className="text-white text-[17px] font-semibold text-center mt-4">Register</h2>
        <div className="h-[20px]"></div>

        <div className="flex flex-col items-start text-white w-full">
          <label>Name</label>
          <Input
            handleTextValue={(e) => setFormData({ ...formData, name: e })}
            placeholder="Enter your name"
          />
        </div>
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

        <div className="flex flex-col items-start text-white w-full">
          <label>Confirm Password</label>
          <Input
            handleTextValue={(e) => setFormData({ ...formData, confirmPassword: e })}
            placeholder="Confirm your password"
            type="password"
          />
        </div>
        <div className="h-[20px]"></div>

        <div className="flex flex-col items-start text-white w-full">
          <label>UPI ID</label>
          <Input
            handleTextValue={(e) => setFormData({ ...formData, upiId: e })}
            placeholder="Enter your UPI ID"
          />
        </div>
        <div className="h-[20px]"></div>

        <div className="flex flex-col items-start text-white w-full">
          <label>Payment Mode</label>
          <select
            className="w-full p-2 rounded-md bg-gray-700 text-white mt-2"
            onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
          >
            <option value="" disabled selected>Select payment mode</option>
            <option value="GPay">GPay</option>
            <option value="Paytm">Paytm</option>
            <option value="PhonePe">PhonePe</option>
          </select>
        </div>
        <div className="h-[20px]"></div>

        <div className="flex flex-col justify-center items-center bg-slate-900 w-full mt-2">
          <button
            onClick={handleClickLogin}
            className="bg-yellow-400 w-full text-brown-600 font-semibold rounded-xl shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Register Account
          </button>
          <div
      className=" justify-center  items-center w-full flex flex-col mt-4 "
      >
        <AiTwotoneCloseCircle
        className="w-[40px] h-[40px] "
        onClick={handleClose}
      />

      </div>
      
         
        </div>
        
      </div>
      
    </div>
  );
}

export default GlobalRegisterDialog;
