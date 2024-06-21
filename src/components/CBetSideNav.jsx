import React from "react";

import iconCard from "./assets/icon_card.png";
import iconBlockChain from "./assets/icon_block_chain.png";
import iconFootball from "./assets/icon_football.png";
import iconJackpot from "./assets/icon_jackpot.png";
import iconLottery from "./assets/icon_lottery.png";
import iconHot from "./assets/ic_cc_bet.png";
import { GiCash } from "react-icons/gi";
import eventBackground from "./assets/event_background.png";
import agentBackground from "./assets/agent_background.png";
import vipBackground from "./assets/vip_background.png";
import { FaQuestionCircle } from "react-icons/fa";
import { MdArrowForwardIos, MdSupportAgent } from "react-icons/md";
import { BsDoorClosed } from "react-icons/bs";
import { AiTwotoneCloseCircle } from "react-icons/ai";

export const CBetSideNav = ({handleCloseSideNav}) => {
  return (
    <div className=" w-full backdrop-blur-sm h-full  flex flex-col ">
      <div className="w-[300px] bg-slate-800  rounded-bl-lg rounded-br-lg p-2  overflow-auto justify-center">
      <AiTwotoneCloseCircle className="w-[40px] h-[40px] " onClick={handleCloseSideNav}/>

        <div className="flex flex-row justify-evenly items-center">
          <div className="bg-slate-600 w-[120px] items-center p-4 flex flex-col rounded-lg">
            <img src={iconCard} className="w-[20px]  h-[20px]"></img>

            <label className="text-white text-[16px] font-sans ">Hot</label>
          </div>
          <div className="bg-slate-600 w-[120px] px-4 py-4 flex flex-col rounded-lg items-center ">
            <img src={iconCard} className="w-[20px]  h-[20px]"></img>
            <label className="text-white text-[16px] font-sans ">Cards</label>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center mt-5">
          <div className="bg-slate-600 w-[120px] items-center p-4 flex flex-col rounded-lg">
            <img src={iconJackpot} className="w-[20px]  h-[20px]"></img>

            <label className="text-white text-[16px] font-sans ">Slots</label>
          </div>
          <div className="bg-slate-600 w-[120px] px-4 py-4 flex flex-col rounded-lg items-center ">
            <img src={iconFootball} className="w-[20px]  h-[20px]"></img>
            <label className="text-white text-[16px] font-sans ">Sports</label>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center mt-5">
          <div className="bg-slate-600 w-[120px] items-center p-4 flex flex-col rounded-lg">
            <img src={iconHot} className="w-[20px]  h-[20px]"></img>

            <label className="text-white text-[16px] font-sans ">Fishing</label>
          </div>
          <div className="bg-slate-600 w-[120px] px-4 py-4 flex flex-col rounded-lg items-center ">
            <img src={iconBlockChain} className="w-[20px]  h-[20px]"></img>
            <label className="text-white text-[16px] font-sans ">
              Block Chain
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center mt-5">
          <div className="bg-slate-600 w-[120px] items-center p-4 flex flex-col rounded-lg">
            <img src={iconLottery} className="w-[20px]  h-[20px]"></img>

            <label className="text-white text-[16px] font-sans ">Lottery</label>
          </div>
          <div className="bg-slate-600 w-[120px] px-4 py-4 flex flex-col rounded-lg items-center ">
            <img src={iconBlockChain} className="w-[20px]  h-[20px]"></img>
            <label className="text-white text-[16px] font-sans ">Collect</label>
          </div>
        </div>
        <div className="mt-5 bg-slate-700 flex flex-col rounded-lg py-2  justify-center items-center">
          <GiCash color="yellow" className="w-[25px] h-[25px]" />
          <label className="text-white font-sans "> Bet Records</label>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="relative w-[130px] h-[80px] mt-5">
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={eventBackground}
              alt="Event Background"
            />
            <label className="absolute m-2 flex items-center justify-center text-white">
              Event
            </label>
          </div>
          <div className="relative w-[130px] h-[80px] mt-5">
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={vipBackground}
              alt="Event Background"
            />
            <label className="absolute m-2 flex items-center justify-center text-white">
              VIP
            </label>
          </div>
        </div>
        <div className="relative w-[250px] items-center justify-center h-[80px] mt-5 ml-4">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={agentBackground}
            alt="Event Background"
          />
          <label className="absolute m-2 flex items-center justify-center text-white">
            Agent
          </label>
        </div>
        <div class="bg-slate-900 p-3 mt-2 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <MdSupportAgent class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Customer Support</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 mt-2 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <FaQuestionCircle class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">About</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        
      </div>
    </div>
  );
};

export default CBetSideNav;
