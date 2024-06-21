import React from 'react';
import ccbet from './assets/ic_cc_bet.png'
import { SlMenu } from 'react-icons/sl';
import { BiMenu } from 'react-icons/bi';
const CBetNav = () => {
  return (
    <nav className="bg-slate-700 flex items-center justify-between p-2">
      <div className="flex items-center">
        <BiMenu className='w-[20px] h-[20px]' color='white'/>
        <img className="items-center w-[100px]" src={ccbet}></img>

        
      </div>
      <div className="flex">
      <button 
    onClick={(e) => handleClickLogin(e)}

className="bg-yellow-400    m-1 px-6  text-[11px] text-brown-600 font-semibold rounded-xl font-mono shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
      Login
    </button>
        
        <button
    className="border-[1px] bg-slate-700  m-1 px-6   text-[12px] border-yellow-400  text-white font-normal font-mono  rounded-xl shadow-md  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
      Register
    </button>
      </div>
    </nav>
  );
};

export default CBetNav;
