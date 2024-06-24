

import React, {useState,useEffect} from 'react'
import GameCard from './GameCard'
import { useNavigate } from "react-router-dom";

import BetDialog from './BetDialog'
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
import { MdArrowBackIos } from 'react-icons/md'
export const WingoDashboard = (props) => {
  const [enterContestDialogOpen, setEnterContestDialogOpen] = useState(false);
  const [chosenColor, setChosenColor] = useState(""); // State for chosen color
  const [chosenNumber, setChosenNumber] = useState(""); // State for chosen number
  const [selectedOption, setSelectedOption] = useState(null); // Initially, no option is selected
  const navigate = useNavigate();

  const colors = ["red", "green", "violet"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const tableData = [
    { period: "06011192", number: "1", color: "Red" },
    { period: "06011192", number: "8", color: "Yellow" },
    { period: "06011192", number: "12", color: "Blue" },
    { period: "06011192", number: "12", color: "Blue" },
    { period: "06011192", number: "12", color: "Blue" },
    { period: "06011192", number: "12", color: "Blue" },
    { period: "06011192", number: "12", color: "Blue" },
    { period: "06011192", number: "12", color: "Blue" },
    // ... add more data items as needed
  ];
  const items = [
    { name: "Game History" },
    { name: "Chart History" },
    { name: "My History" },
  ];

  const handleClick = (itemName) => {
    setSelectedOption(itemName); // Update the selected option on click
  };

  const handleNumberClick = (number) => {
    // Open the EnterContestDialog and set user ID, contest ID, and chosen number
    // setUserId(userDetailData.data.userId); // Assuming userDetailData contains user ID
    // setContestId(redContestData.data[0].contest_id);
    setChosenNumber(number);
    setChosenColor("");

    // Set the contest ID
    setEnterContestDialogOpen(true);
  };
  const navigateHome = () => {
    navigate('/cbet');
  }

  const handleColorClick = (color) => {
    // Open the EnterContestDialog and set user ID, contest ID, and chosen color
    // setUserId(userDetailData.data.userId); // Assuming userDetailData contains user ID
    // setChosenNumber(color);
    // setChosenColor(color);
    // setContestId(redContestData.data[0].contest_id); // Set the contest ID
    setEnterContestDialogOpen(true);
  };
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-slate-900 overflow-hidden mx-auto flex items-center justify-center">
             <div>
          <div className="bg-slate-800 w-screen h-screen overflow-auto overflow-x-hidden">
          

          

              {/* Minutes and Seconds TextViews */}
             
              <div className="flex flex-col">
                <div className="p-6 bg-slate-500 flex flex-row items-center justify-start" onClick={navigateHome}>
                  <MdArrowBackIos color='white'/>
                  <label className='ml-2 text-[18px] text-white  font-thin'>Go Back</label>



                </div>
                  <GameCard />
                </div>

              {/* Bet Buttons */}
              <div className="flex flex-col items-center bg-black m-2 rounded-[28px]">
              <div className="flex flex-row text-center p-2  space-x-2 justify-evenly">
                <div
                  className="text-white text-center bg-green-500 px-7 py-2 rounded-tr-[10px] rounded-bl-[10px]"
                  onClick={() => handleColorClick("GREEN")}
                >
                  Green
                </div>

                <div
                  className="text-white text-center bg-violet-500 px-7 py-2 rounded-3xl "
                  onClick={() => handleColorClick("VIOLET")}
                >
                  Violet
                </div>
                <div
                  className="text-white text-center bg-red-500 px-7 py-2 rounded-tl-[10px] rounded-br-[10px]"
                  onClick={() => handleColorClick("RED")}
                >
                  Red
                </div>
              </div>

              {/* Number Buttons */}
              <div className="items-center bg-slate-800 p-5 m-2 rounded-3xl">
              <div className="flex flex-col item items-center">
                <div className="flex flex-row space-x-2">
                  <img src={zeroToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(0)}

                  ></img>
                  <img src={oneToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(1)}

                  ></img>
                  <img src={twoToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(2)}

                  ></img>

                  <img src={threeToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(3)}

                  ></img>
                  <img src={fourToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(4)}

                  ></img>
                </div>

                <div className="flex flex-row space-x-2">
                  <img
                    src={fiveToken}
                    onClick={() => handleNumberClick(5)}
                    className="w-[54px] h-[54px]"
                  ></img>
                  <img src={sixToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(6)}

                  ></img>
                  <img src={sevenToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(7)}

                  ></img>
                  <img src={eightToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(8)}

                  ></img>
                  <img src={nineToken} className="w-[54px] h-[54px]"
                                      onClick={() => handleNumberClick(9)}

                  ></img>
                </div>
              </div>

              </div>
              
              </div>
             

              <div className=" w-screen flex flex-row space-x-4 justify-center">
                {items.map((item) => (
                  <div

                    key={item.name}
                    className={`rounded-[10px] px-4 py-3 ${
                      selectedOption === item.name
                        ? "bg-gradient-to-t from-custom-yellow to-custom-brown text-amber-900"
                        : "bg-[#28292E] text-white" // White text on gray background
                    }`}
                    onClick={() => handleClick(item.name)} // Trigger handleClick on click
                  >
                    <h2
                      className={`${
                        selectedOption === item.name
                          ? "text-[15px] font-bold"
                          : "text-[15px] font-regular" // White text on gray background
                      }`}
                    >
                      {item.name}
                    </h2>
                  </div>
                ))}
              </div>
              <div className="flex flex-col  p-1 mt-2 bg-slate-800 rounded-xl  border-[1px]  w-full">
                <div className="flex flex-row justify-between gap-4 items-center bg-[#1f2937] p-2 rounded-md text-white font-semibold text-[18px]">
                  <div className="p-2 text-[15px]">Period</div>
                  <div className="flex-1 text-center p-2 text-[15px]">
                    Number
                  </div>
                  <div className="px-2 text-[15px]">Color</div>
                </div>
              </div>
              <div className="w-screen">
                {tableData.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row justify-between gap-4 items-center bg-[#1f2937] p-2 rounded-md text-white m-1"
                  >
                    <div className="text-center font-thin tracking-[0.1em]">
                      {item.period}
                    </div>
                    <div className="flex-1 text-center  font-bold text-[21px]">
                      {item.number}
                    </div>
                    <div className="flex gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#ef4444" }} /* Red circle */
                      ></div>
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#3b82f6" }} /* Blue circle */
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          {enterContestDialogOpen && (<BetDialog betNumber={chosenNumber} onClose={() => setEnterContestDialogOpen(false)}/>)}

        </div>

        </div>

    );
}

export default WingoDashboard