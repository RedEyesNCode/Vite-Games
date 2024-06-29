import React, { useEffect, useRef, useState } from 'react';
import  markImage from '../assets/ic_mark.png'
import oneToken from '../assets/ic_one_token.png'
import zeroToken from '../assets/ic_zero_token.png'
import twoToken from '../assets/ic_two_token.png'
import threeToken from '../assets/ic_three_token.png'
import fourToken from '../assets/ic_four_token.png'
import fiveToken from '../assets/ic_five_token.png'
import sixToken from '../assets/ic_six_token.png'
import sevenToken from '../assets/ic_seven_token.png'
import eightToken from '../assets/ic_eight_token.png'
import nineToken from '../assets/ic_nine_token.png'
import { fetchContestHistoryByDuration, fetchWingoContestTime } from '../../api/api_wingo';
function GameCard() {
  const [wingoLastFiveData, setWingoLastFiveData] = useState(null);
  const [contestData,setContestData] = useState(null);
  const [contestHistoryData,setContestHistoryData] = useState(null);
  const[resultNumbersHistory,setResultNumbersHistory] = useState(null);

  const timeRemainingRef = useRef(null);
  const tokenImages = {
    0: zeroToken,
    1: oneToken,
    2: twoToken,
    3 : threeToken,
    4 : fourToken,
    5 : fiveToken,
    6 : sixToken,
    7 : sevenToken,
    8 : eightToken,

    9: nineToken,
  };

  const intervalRef = useRef(null); // Ref to store the interval ID

  const callContestTimeAPI = async () => {
    try {
      console.log();

      const fetchContestTimings = await fetchWingoContestTime();
      console.log("Contest Time Response >", fetchContestTimings);

      const contestData = fetchContestTimings.data;

      // Option 1: Loop through contests
      for (const contestId in contestData) {
        const contest = contestData[contestId];
        console.log(`Contest ${contestId}:`, contest); 
        // Do something with contest.contestName, contest.remainingTime, etc.
      }

      // Option 2: Access specific contests directly
      const contest3 = contestData["3"];
      console.log("Contest 3 details:", contest3);

      setContestData(contest3);


      

     
    } catch (error) {
      alert(
        "An error occurred while fetching contest timer. Please try again later." + error
      );
    }
  };

  const callContestHistoryAPI = async ()=> {
    try {
      const rawJson = {contestDuration : 3};

      const contestHistoryByDurationResponse = await fetchContestHistoryByDuration(rawJson);
      const resultNumbers = contestHistoryByDurationResponse.data
      .map(contest => contest.resultNumber)
      .filter(resultNumber => resultNumber !== null)
      .slice(0, 5); // Get first 5 non-null values

      setResultNumbersHistory(resultNumbers);

      setContestHistoryData(contestHistoryByDurationResponse);
      


    }catch(error){
      console.log(error);

    }


  }

  useEffect(() => {
    callContestTimeAPI();
    callContestHistoryAPI();

    intervalRef.current = setInterval(callContestTimeAPI, 10000); 

    return () => {
      clearInterval(intervalRef.current);
    };
    
  }, []);
  useEffect(() => {
    const timerElement = timeRemainingRef.current; 

    if (timerElement && contestData) {
      function updateTimeRemaining() {
        const remainingTime = contestData.remainingTime;  
        const hours = Math.floor(remainingTime / 3600000); 
        const minutes = Math.floor((remainingTime % 3600000) / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        timerElement.innerHTML = `
          <p class="text-[#DDB085] text-2xl p-2 font-semibold bg-[#B46D24] rounded-xl">${String(hours).padStart(2, '0')}</p>
          <p class='text-white m-2'>:</p>
          <p class="text-[#DDB085] text-2xl p-2 font-semibold bg-[#B46D24] rounded-xl">${String(minutes).padStart(2, '0')}</p>
          <p class='text-white text-center m-2'>:</p>
          <p class="text-[#DDB085] text-2xl p-2 font-semibold bg-[#B46D24] rounded-xl">${String(seconds).padStart(2, '0')}</p>
        `;

        contestData.remainingTime -= 1000;
        if (contestData.remainingTime >= 0) {
          setTimeout(updateTimeRemaining, 1000); 
        }
      }
      
      updateTimeRemaining();
    }
  }, [contestData]);







  return (
    <div className=" w-screen mt-2  bg-gradient-to-b  from-custom-yellow to-custom-brown rounded-[20px] p-2 shadow-md flex flex-row justify-between items-center">

      {/* Left Side - How to Play */}

      <div className='flex flex-col'>
      <button className="bg-transperant px-10 rounded-xl text-sm flex items-center border-[1px] border-amber-900">
        <img src={markImage} className='w-[17px] h-[17px]'></img>
         <h2 className='text-semibold font-sans text-[13px]'>How to Play</h2>
      </button>
      {/* Center - Game Details */}
      <div className="text-center space-y-1 items-start">
        <p className=" text-[13px]  text-start text-amber-900">Win Go 3 Min</p>
        <div className="flex space-x-2 justify-center">
          {resultNumbersHistory!=null && resultNumbersHistory.map((num, index) => (
            <img className='w-[30px] h-[30px] ' src={tokenImages[num]}></img>
          ))}
        </div>
      </div>
      </div>
      

      

      {/* Right Side - Time Remaining */}
      
      
      
      <div className="text-right">
      <p className="text-amber-900 text-sm font-semibold mb-2 text-center">Time Remaining</p>

      <div className="flex flex-row w-full text-center justify-center" ref={timeRemainingRef}>
        <p className="text-[#DDB085] text-2xl p-2 font-semibold bg-[#B46D24] rounded-xl">00</p>
        {/* ... (Rest of your initial time display) */}
      </div>
        
        {contestData && (<p className="text-amber-900 text-xs tracking-[0.05em] font-bold mt-2">{contestData.contestId}</p>)}
      </div>

    </div>
  );
}

export default GameCard;