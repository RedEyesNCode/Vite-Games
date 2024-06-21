

import React from 'react'

export const WingoDashboard = (props) => {
    return (
        <div>
             <div>
          <div className="bg-slate-800">
          

          

              {/* Minutes and Seconds TextViews */}
             
              <div className="">
                <div className="h-[20px]"></div>
                  <GameCard />
                </div>

              {/* Bet Buttons */}
              <div className="flex flex-col items-center bg-black m-4 p-2 rounded-[28px]">
              <div className="flex flex-row text-center m-2 space-x-4 justify-evenly">
                <div
                  className="text-white text-center bg-green-500 px-10 py-2 rounded-tr-[10px] rounded-bl-[10px]"
                  onClick={() => handleColorClick("GREEN")}
                >
                  Green
                </div>

                <div
                  className="text-white text-center bg-violet-500 px-10 py-2 rounded-3xl "
                  onClick={() => handleColorClick("VIOLET")}
                >
                  Violet
                </div>
                <div
                  className="text-white text-center bg-red-500 px-10 py-2 rounded-tl-[10px] rounded-br-[10px]"
                  onClick={() => handleColorClick("RED")}
                >
                  Red
                </div>
              </div>

              {/* Number Buttons */}
              <div className="items-center bg-slate-800 p-2 rounded-3xl">
              <div className="flex flex-col item items-center">
                <div className="flex flex-row space-x-2">
                  <img src={zeroToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(0)}

                  ></img>
                  <img src={oneToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(1)}

                  ></img>
                  <img src={twoToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(2)}

                  ></img>

                  <img src={threeToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(3)}

                  ></img>
                  <img src={fourToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(4)}

                  ></img>
                </div>

                <div className="flex flex-row space-x-2">
                  <img
                    src={fiveToken}
                    onClick={() => handleNumberClick(5)}
                    className="w-[74px] h-[74px]"
                  ></img>
                  <img src={sixToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(6)}

                  ></img>
                  <img src={sevenToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(7)}

                  ></img>
                  <img src={eightToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(8)}

                  ></img>
                  <img src={nineToken} className="w-[74px] h-[74px]"
                                      onClick={() => handleNumberClick(9)}

                  ></img>
                </div>
              </div>

              </div>
              
              </div>
             

              <div className="flex flex-row space-x-4 m-5 justify-center">
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
              <div className="flex flex-col p-[1.2px] bg-slate-800 rounded-xl  border-[1px] w-[460px] mx-2">
                <div className="flex flex-row justify-between gap-4 items-center bg-[#1f2937] p-2 rounded-md text-white font-semibold text-[18px]">
                  <div className="p-2 text-[15px]">Period</div>
                  <div className="flex-1 text-center p-2 text-[15px]">
                    Number
                  </div>
                  <div className="px-2 text-[15px]">Color</div>
                </div>
              </div>
              <div className="w-[450px] m-4">
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
        </div>
        </div>

    );
}

export default WingoDashboard