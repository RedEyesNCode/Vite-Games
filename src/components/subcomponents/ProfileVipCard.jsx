import React from "react";
import cardImage from "../assets/ic_vip.webp";
import vipFrame from "../assets/ic_vip_frame.png";
import { WiRefresh } from "react-icons/wi";
import { FaQuestionCircle } from "react-icons/fa";
const VipCard = () => {
  return (
    <div className="bg-yellow-300 p-2 w-full h-fit rounded-lg flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-row items-start">
          <div className="rounded-bl-lg rounded-tr-lg bg-cyan-700 px-2 py-1">
            <img className="w-[30px] h-[20px] " src={cardImage}></img>
          </div>

          <label className="text-yellow-800 text-[15px] font-sans font-semibold ml-2">
            Remaining VIP1 amount for deposit 400.0{" "}
          </label>
        </div>
        <div className="  w-full mt-2 flex flex-row items-center justify-center">
          <img className="w-[40px] h-[50px] " src={vipFrame}></img>

          <div className="flex flex-col ml-4">
            <div className="flex flex-row justify-center items-center">
              <label className="text-yellow-800 text-[11px] font-sans font-semibold text-start">
                Deposit for promotion
              </label>
              <div className="bg-yellow-600 h-[10px] rounded-2xl w-[260px]"></div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <label className="text-yellow-800 text-[11px] font-sans font-semibold text-start">
                Bet for promotion
              </label>
              <div className="bg-yellow-600 h-[10px] rounded-2xl w-[250px]"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default VipCard;
