import React from "react";
import offerBanner1 from "../assets/offer_one_banner.jpg";
import offerBanner2 from "../assets/offer_two_banner.png";
import offerBanner3 from "../assets/offer_three_banner.png";
import logo from "../assets/ic_cc_bet.png";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { SiTinyletter } from "react-icons/si";
import { BsPerson } from "react-icons/bs";
import { PiConfettiDuotone } from "react-icons/pi";

export const CbetOffers = (props) => {
  return (
    <div className="bg-slate-900 flex flex-row h-screen">
      <div className="flex flex-col">
        <button className="bg-yellow-400 flex flex-col   items-center justify-center m-1 px-6  text-[11px] text-brown-600 font-semibold rounded-xl font-mono shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          <PiConfettiDuotone className="items-center h-[25px] w-[25px]" />
          Welcome
        </button>
        <button className="bg-yellow-400 flex flex-col   items-center justify-center m-1 px-6  text-[11px] text-brown-600 font-semibold rounded-xl font-mono shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          <SiTinyletter className="items-center h-[25px] w-[25px]" />
          Referal Program
        </button>
        <button 

className="bg-yellow-400    m-1 px-6  text-[11px] text-brown-600 font-semibold rounded-xl font-mono shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
      History
    </button>
      </div>
      
      <div className="flex flex-col">
      <img
      className="h-[120px] p-2 w-full rounded-2xl"
      src={offerBanner1}
      >
      </img>
      <img
      className="h-[120px] p-2 w-full  rounded-2xl"
      src={offerBanner2}
      >
      </img>
      <img
      className="h-[120px] p-2 w-full  rounded-2xl"
      src={offerBanner3}
      >
      </img>

      </div>
      
    </div>
  );
};

export default CbetOffers;
