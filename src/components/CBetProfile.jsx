import React from "react";
import profileBackground from "./assets/profile_bg.webp";
import { FaQuestionCircle, FaWallet } from "react-icons/fa"; // Example icon import
import { SlSupport } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { BsChatText, BsFileEarmarkPdf } from "react-icons/bs";
import userImg from "./assets/ic_profile_image.png";
import { VscCopy } from "react-icons/vsc";
import indiaflag from "./assets/ic_india.png";
import { FiRefreshCw } from "react-icons/fi";
import SvgSymbols from "./subcomponents/SvgSymbols";
import Icon from "./subcomponents/Icon";
import { PiCreditCardDuotone, PiHandDepositDuotone, PiUserSquareDuotone } from "react-icons/pi";
import { GiExitDoor, GiTakeMyMoney } from "react-icons/gi";
import { PiPiggyBankDuotone } from "react-icons/pi";
import ProfileVipCard from "./subcomponents/ProfileVipCard";
import { WiRefresh } from "react-icons/wi";
import { RiSpyLine } from "react-icons/ri";
import { MdArrowForwardIos, MdOutlineAccountBalance, MdTableRows } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";
import { TbMessageBolt } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiAboutdotme, SiLootcrate } from "react-icons/si";

export const CBetProfile = () => {
  const navigateWithdrawScreen = () => {

    navigate
  }
  return (
    <div className="relative overflow-x-hidden bg-slate-900 flex flex-col ">
      <SvgSymbols />

      {/* Background Section */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center h-1/3"
        style={{ backgroundImage: `url(${profileBackground})` }}
      />

      {/* Profile Information & Tabs (Overlayed Content) */}
      <div className="p-2 flex-col   w-screen z-10">
        <div className="flex flex-col items-end w-full">
          <div className="flex flex-row text-white">
            <div className="flex flex-col items-center justify-center">
              <SlSupport color="yellow" />
              <label className="text-[11px] p-1 text-white">Support</label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <BsChatText color="yellow" />
              <label className="text-[11px] p-1 text-white">Message</label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <CgProfile color="yellow" />
              <label className="text-[11px] p-1 text-white">Profile</label>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <img className="w-[35px] h-[35px] rounded-2xl" src={userImg}></img>
          <div className="flex flex-col m-2 text-white text-[11px]">
            <div className="flex flex-row">
              <label className="text-slate-400 font-sans">Account </label>
              <label className="ml-1 font-inter">62621319133</label>
            </div>
            <div className="flex flex-row items-center mt-2">
              <label className="text-slate-400 text-[15px] font-sans">
                ID:
              </label>
              <label className="ml-1 font-inter font-bold text-[15px]">
                2451
              </label>
              <VscCopy className="w-[18px] h-[18px] ml-2" color="yellow" />
              <div className=" h-[18px] mx-2 w-[1px] bg-slate-500"></div>
              <img
                className="w-[20px] h-[20px] rounded-xl"
                src={indiaflag}
              ></img>
              <label className="text-[15px] font-bold font-sans ml-2">0</label>
              <FiRefreshCw color="yellow" className="w-[18px] h-[18px] ml-2" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-evenly font-extralight font-sans">
          <div className="mt-8 w-fit p-4 flex flex-col justify-center items-center space-y-2">
            <FaWallet className="w-[20px] h-[20px]" color="yellow" />

            <span className="text-white font-monp text-[12px]">Withdraw</span>
          </div>
          <div className="mt-8 w-fit p-4 flex flex-col justify-center items-center space-y-2">
            <PiHandDepositDuotone
              className="w-[20px] h-[20px]"
              color="yellow"
            />
            <span className="text-white font-monp text-[12px]">Deposit</span>
          </div>
          <div className="mt-8 w-fit p-4 flex flex-col justify-center items-center space-y-2">
            <GiTakeMyMoney className="w-[20px] h-[20px]" color="yellow" />
            <span className="text-white font-monp text-[12px]">Interest</span>
          </div>
          <div className="mt-8 w-fit p-4 flex flex-col justify-center items-center space-y-2">
            <PiPiggyBankDuotone className="w-[20px] h-[20px]" color="yellow" />
            <span className="text-white font-monp text-[12px]">
              Provident Fund
            </span>
          </div>
        </div>
        <ProfileVipCard />
      </div>

      {/* Main Content (Overlayed Content) */}
      <div className="bg-slate-900 p-1 w-full   flex-grow z-10">
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <FaQuestionCircle class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Retrieve the balance</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>

        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <RiSpyLine class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Agent Passive Income</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div className="bg-slate-800 w-full h-[15px] rounded-sm"></div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <MdOutlineAccountBalance class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Account Details</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <BsFileEarmarkPdf class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Reports</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <CiViewTable class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Bet Records</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <TbMessageBolt class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Message Center</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div className="bg-slate-800 w-full h-[15px] rounded-sm"></div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2" onClick={navigateWithdrawScreen()}>
            <PiCreditCardDuotone class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Withdrawal Management</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <PiUserSquareDuotone class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Profile</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <AiFillSafetyCertificate class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Security Center</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div className="bg-slate-800 w-full h-[15px] rounded-sm"></div>

        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <SiLootcrate class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Feedback to get rewards</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <SiAboutdotme class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">About</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>
        <div class="bg-slate-900 p-3 rounded-md flex items-center justify-between hover:bg-gray-700">
          <div class="flex items-center space-x-2">
            <GiExitDoor class="text-yellow-400 text-lg" />
            <span class="text-white text-sm">Quit</span>
          </div>
          <MdArrowForwardIos color="grey" />
        </div>

      </div>
    </div>
  );
};

export default CBetProfile;
