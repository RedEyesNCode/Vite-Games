import React from 'react';
import  markImage from './assets/ic_mark.png'
import oneToken from './assets/ic_one_token.png'
import zeroToken from './assets/ic_zero_token.png'
import twoToken from './assets/ic_two_token.png'
import threeToken from './assets/ic_three_token.png'
import fourToken from './assets/ic_four_token.png'
import fiveToken from './assets/ic_five_token.png'
import sixToken from './assets/ic_six_token.png'
import sevenToken from './assets/ic_seven_token.png'
import eightToken from './assets/ic_eight_token.png'
import nineToken from './assets/ic_nine_token.png'
function GameCard() {
  return (
    <div className=" bg-gradient-to-b from-custom-yellow to-custom-brown rounded-[20px] p-2 shadow-md flex justify-between items-center w-[470px] mt-2 mx-2 px-3">

      {/* Left Side - How to Play */}

      <div className='flex flex-col'>
      <button className="bg-transperant px-10 rounded-xl text-sm flex items-center border-[1px] border-amber-900">
        <img src={markImage} className='w-[17px] h-[17px]'></img>
         <h2 className='text-semibold font-sans text-[13px]'>How to Play</h2>
      </button>
      {/* Center - Game Details */}
      <div className="text-center space-y-1 items-start">
        <p className=" text-[13px]  text-start text-amber-900">Win Go 1 Min</p>
        <div className="flex space-x-2 justify-center">
          {['1', '5', '0', '1', '0'].map((num, index) => (
            <img className='w-[30px] h-[30px] ' src={oneToken}></img>
          ))}
        </div>
      </div>
      </div>
      

      

      {/* Right Side - Time Remaining */}
      <div className="text-right">
        <p className="text-amber-900 text-sm font-semibold mb-2">Time Remaining</p>
        <div className='flex flex-row w-fit text-center'>
        <p className="text-[#DDB085] text-2xl p-2 font-semibold bg-[#B46D24] rounded-xl">00</p>
        <p className='text-white m-2'>:</p>
        <p className="text-[#DDB085] text-2xl p-2 font-semibold bg-[#B46D24] rounded-xl">00</p>
        <p className='text-white text-center m-2'>:</p>

        <p className="text-[#DDB085] text-2xl p-2 font-semibold bg-[#B46D24] rounded-xl">37</p>

        </div>
        <p className="text-amber-900 text-xs tracking-[0.25em] font-bold mt-2">202406010974</p>
      </div>

    </div>
  );
}

export default GameCard;