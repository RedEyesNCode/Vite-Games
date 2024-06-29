import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import ccbet from './assets/ic_cc_bet.png'
import PhoneInput from "./subcomponents/PhoneInput";
import Input from "./subcomponents/Input";
import { ToastContainer, toast } from "react-toastify";
import { registerRedUser } from "../api/api_interface";


const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    telephoneNumber: "",
    password: "",
    email: "",
    withdrawUpi: "",
    paymentMode : "",

  });
  const navigate = useNavigate(); // Initialize useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const registerUser = async (formData) => {
    try {
      console.log(formData);

      const registerUserResponse = await registerRedUser(formData);
      console.log("Regsiter Response >", registerUserResponse);
      if (registerUserResponse.code == 200) {
        navigate("/");
      }
      window.alert(registerUserResponse.message);
    } catch (error) {
      console.error("Error creating route  data:", error);
      alert(
        "An error occurred while logging in. Please try again later." + error
      );
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if(formData.telephoneNumber.length===0){
      toast.error("Please enter number !", {
        position: "top-center"
      });
    }else if(formData.email.length===0){
      toast.error("Please enter email !", {
        position: "top-center"
      });
    }else if(formData.fullName.length===0){
      toast.error("Please enter name !", {
        position: "top-center"
      });
    }else if(formData.password.length===0){
      
      toast.error("Please enter password !", {
        position: "top-center"
      });
    }else if(formData.withdrawUpi.length===0){
      toast.error("Please enter UPI ID. !", {
        position: "top-center"
      });
    }else{
      await registerUser(formData);

    }
  };
  return (
    <div className="fixed max-w-[480px] top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-slate-900 overflow-hidden flex items-center justify-center">
      
      <div className=" border-[1px] border-slate-600 flex flex-col items-center justify-center bg-slate-800 p-2">
      <img className="items-center ml-5 pl-2 translate-x-8" src={ccbet}></img>
      <ToastContainer className={'snap-center'}/>

        <h2 className="text-white text-[17px] font-semibold text-center">Create New Account</h2>
        <div className="h-[20px]"></div>

       <PhoneInput handleTextValue={(e) => setFormData({...formData, telephoneNumber : e})}/>
       <div className="h-[20px]"></div>
       <Input placeholder='Enter your name' handleTextValue={(e) => setFormData({...formData, fullName : e})}type="text"/>
       <div className="h-[20px]"></div>

       <Input placeholder='Enter your email'handleTextValue={(e) => setFormData({...formData, email : e})} type="email"/>
       <div className="h-[20px]"></div>

       <Input placeholder='Enter your password' handleTextValue={(e) => setFormData({...formData, password : e})} type="password"/>
       <div className="h-[20px]"></div>

       <Input placeholder='Enter your UPI' handleTextValue={(e) => setFormData({...formData, withdrawUpi : e})} type="text"/>
       <h2 className="text-white font-thin text-[11px] mt-2">Note : This UPI ID will be used at the time of withdrawals</h2>
       <div className="flex flex-col items-start text-white w-fit">
          <label className="text-yellow-500 mt-2">Payment Mode</label>
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

       <div className="flex  flex-col justify-center items-center bg-slate-800">
<button 
onClick={handleSubmit}
className="bg-yellow-400 w-[210px] text-brown-600 font-semibold py-2 px-8 rounded-xl shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
      Register Account
    </button>
    <div className="h-[20px]"></div>
    <button 
    onClick={() => navigate("/")}
    className="border-[1px] border-yellow-400 w-[140px] text-black font-semibold py-2 px-8 rounded-xl shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
      Go Back
    </button>

</div>  
</div>

    </div>
    
  );
};

export default RegisterScreen;