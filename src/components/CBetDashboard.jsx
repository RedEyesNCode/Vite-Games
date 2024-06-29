import React, { useState } from "react";
import CBetNav from "./CBetNav";
import { ToastContainer, toast } from "react-toastify";
import CBetBanner from "./subcomponents/CBetBanner";
import jackpotbanner from "./assets/jackpot_image.png";
import { PiSpeakerHighFill } from "react-icons/pi";
import { TbMessage2Code } from "react-icons/tb";
import GameSlideMenu from "./subcomponents/GameSlideMenu";
import GameMenuCard from "./subcomponents/GameMenuGrid";
import wingo from "./assets/wingo_image.png";
import five_d from "./assets/5d_image.png";
import fortunetiger from "./assets/fortune_tiger_image.png";
import luckyhit from "./assets/lucky_hit_image.jpg";
import dragontigerImage from "./assets/dragon_tiger_image.jpg";
import gorushImage from "./assets/gorush_image.png";
import jackpotfishing from "./assets/jackpot_fishing.png";
import minesImage from "./assets/mines_image.png";
import colorGameImage from "./assets/color_game_image.jpg";
import iconCard from "./assets/icon_card.png";

import euroutlette from "./assets/roulette_eu_image.png";
import ludoquick from "./assets/ludo_quick_image.png";
import sevenupdown from "./assets/seven_up_down_image.png";
import teenpatti from "./assets/teen_patti_image.png";
import lottoseven from "./assets/lotto_7_image.png";
import teenpattifourseven from "./assets/teen_patti_ak_image.png";

import ganeshagold from "./assets/ganesha_gold_image.png";
import fortuneox from "./assets/fortune_ox_image.png";
import fortunerabbit from "./assets/fortune_rabbit_image.png";
import fortunemouse from "./assets/fortune_mouse.png";
import doublefortune from "./assets/double_fortune_image.png";
import bombingfishing from "./assets/bombing_fishing_image.png";
import boomlegend from "./assets/boom_legend_image.png";
import chinagame from "./assets/china_game_image.png";
import pheonix from "./assets/pheonix_rises.png";
import circleDelight from "./assets/circle_delight_image.png";
import { useNavigate } from "react-router-dom";

import megafishing from "./assets/mega_fishing_image.png";
import royalfishing from "./assets/royal_fishing_image.png";
import fishingallstar from "./assets/fishing_all_star.png";
import dinoFortune from "./assets/dragon_fortune.png";
import DynamicGameMenuCard from "./subcomponents/DynamicGameMenuCard ";
import CBetBottomNav from "./CBetBottomNav";
import CbetOffers from "./subcomponents/CbetOffers";
import happyfishing from "./assets/happy_fish_image.png";
import dinotycoon from "./assets/dinasuar_tycoon.png";

import hilo from "./assets/hilo_image.png";
import wheel from "./assets/wheel_imaeg.png";
import tower from "./assets/tower_image.png";
import minesgold from "./assets/mines_gold_image.png";
import limbo from "./assets/limbo_image.png";
import plinko from "./assets/plinko_image.png";
import aviator from "./assets/aviator_image.jpg";
import CBetProfile from "./CBetProfile";
import dashboardbackground from "./assets/dashboard_background.png";
import sport from "./assets/sports_image.jpg";
import CBetFooter from "./CBetFooter";
import CBetSideNav from "./CBetSideNav";
import GlobalLoginDialog from "./subcomponents/GlobalLoginDialog";
import GlobalRegisterDialog from "./subcomponents/GlobalRegisterDialog";
import PhaserGame from "../phaser/PhaserGame";
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";
const imageUrls = [
  wingo,
  five_d,
  fortunetiger,
  luckyhit,
  dragontigerImage,
  gorushImage,
  jackpotfishing,
  minesImage,
  colorGameImage,
];
const cardGamesUrl = [
  luckyhit,
  dragontigerImage,
  colorGameImage,
  euroutlette,
  ludoquick,
  sevenupdown,
  teenpatti,
  lottoseven,
  teenpattifourseven,
];
const slotGameUrls = [
  fortunetiger,
  ganeshagold,
  fortuneox,
  fortunemouse,
  fortunerabbit,
  doublefortune,
  pheonix,
  circleDelight,
  chinagame,
];
const fishingGameUrls = [
  jackpotfishing,
  royalfishing,
  bombingfishing,
  dinotycoon,
  dinoFortune,

  megafishing,
  boomlegend,
  happyfishing,
  fishingallstar,
];
const blockChainGames = [
  minesImage,
  gorushImage,
  aviator,
  plinko,
  tower,
  hilo,
  limbo,
  wheel,
  minesgold,
];
const lotteryGames = [wingo, five_d];
const sportsGames = [sport];

export const CBetDashboard = (props) => {
  const [isOfferFrame, setOfferFrame] = useState(false);
  const [isHomeFrame, setHomeFrame] = useState(true);
  const [isProfileFrame, setProfileFrame] = useState(false);
  const [isSideNavFrame, setSideNavFrame] = useState(false);
  const [isLoginDialog, setLoginDialog] = useState(false);

  const [isRegisterDialog, setRegisterDialog] = useState(false);

  const [isDragonTigerGame,setDragonTigerGame] = useState(false);
  const navigate = useNavigate();

  const userSession = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.LOGIN_RESPONSE);



  const handleShowRegisterDialog = () => {
    setRegisterDialog(true);
  };
  const handleGameShow = (url) => {
    if(url=="/src/components/assets/wingo_image.png"){
      //wingo_dashboard
      window.alert(userSession.data.demoAmount);

      navigate('/wingodashboard')
    }else if(url=="/src/components/assets/dragon_tiger_image.jpg"){
      //dragon-tiger
      navigate('/dragontiger')
    }
    

  };

  const handleShowLoginDialog = () => {
    setLoginDialog(true);
  };

  const handleNavChange = (label) => {
    if (label == "Offers") {
      setOfferFrame(true);
      setHomeFrame(false);
      setProfileFrame(false);
    } else if (label == "Home") {
      setOfferFrame(false);
      setHomeFrame(true);
      setProfileFrame(false);
    } else if (label == "Profile") {
      setOfferFrame(false);
      setHomeFrame(false);
      setProfileFrame(true);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 overflow-hidden mx-auto flex items-center justify-center">
      <main className="flex flex-col w-screen bg-slate-800 h-screen mx-auto relative">
        <ToastContainer />

        {isSideNavFrame && (
          <div className="absolute top-0 left-0 w-[250px] h-full z-50">
            <CBetSideNav handleCloseSideNav={() => setSideNavFrame(false)} />
          </div>
        )}

        {isLoginDialog && (
          <div className="absolute top-0 left-0 w-[250px] h-full z-50">
            <GlobalLoginDialog handleClose={() => setLoginDialog(false)} />
          </div>
        )}
        {isRegisterDialog && (
          <div className="absolute top-0 left-0 w-[250px] h-full z-50">
            <GlobalRegisterDialog handleClose={() => setRegisterDialog(false)} />
          </div>
        )}

        <div
          className="flex-grow overflow-y-auto h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${dashboardbackground})` }}
        >
          {isHomeFrame && !isOfferFrame && (
            <div className="flex-grow overflow-y-auto relative">
              <CBetNav
                handleClickNav={() => setSideNavFrame(true)}
                handleLoginDialog={handleShowLoginDialog}
                handleRegisterDialog={handleShowRegisterDialog}
              />
              <CBetBanner />
              <div className="relative">
                <img
                  src={jackpotbanner}
                  alt="Jackpot Banner"
                  className="h-[120px] w-[380px] mt-2 mx-2"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-normal font-mono rounded-xl bg-slate-800 px-3 py-1 text-[11px]">
                  JACKPOT
                </div>
                <div className="absolute top-1/2 mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-yellow-400 font-normal font-mono rounded-xl px-3 py-1 text-[18px]">
                  2,23,24,990
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-1">
                <PiSpeakerHighFill
                  color="white"
                  className="w-[25px] h-[25px] m-1"
                />
                <div className="text-slate-500 font-bold text-[10px] font-sans">
                  Download the APP and start playing games to make money
                </div>
                <TbMessage2Code
                  color="white"
                  className="w-[25px] h-[25px] m-1"
                />
              </div>
              <GameSlideMenu />
              <DynamicGameMenuCard imageUrls={imageUrls} handleGameClick={(url) =>handleGameShow(url)} />

              <div className="w-full h-[2px] bg-slate-600 mt-2"></div>

              <div className="flex flex-row m-2 items-center p-2">
                <img
                  src={iconCard}
                  alt="game_icon"
                  className="w-[26px] h-[26px] justify-center items-center object-fit"
                />
                <div className="ml-1 text-white font-sans font-medium text-[14px]">
                  Cards
                </div>
              </div>
              <DynamicGameMenuCard imageUrls={cardGamesUrl} />

              <div className="flex flex-row m-2 items-center p-2">
                <img
                  src={iconCard}
                  alt="game_icon"
                  className="w-[26px] h-[26px] justify-center items-center object-fit"
                />
                <div className="ml-1 text-white font-sans font-medium text-[14px]">
                  Slots
                </div>
              </div>
              <DynamicGameMenuCard imageUrls={slotGameUrls} />

              <div className="flex flex-row m-2 items-center p-2">
                <img
                  src={iconCard}
                  alt="game_icon"
                  className="w-[26px] h-[26px] justify-center items-center object-fit"
                />
                <div className="ml-1 text-white font-sans font-medium text-[14px]">
                  Sports
                </div>
              </div>
              <DynamicGameMenuCard imageUrls={sportsGames} />

              <div className="flex flex-row m-2 items-center p-2">
                <img
                  src={iconCard}
                  alt="game_icon"
                  className="w-[26px] h-[26px] justify-center items-center object-fit"
                />
                <div className="ml-1 text-white font-sans font-medium text-[14px]">
                  Fishing
                </div>
              </div>
              <DynamicGameMenuCard imageUrls={fishingGameUrls} />

              <div className="flex flex-row m-2 items-center p-2">
                <img
                  src={iconCard}
                  alt="game_icon"
                  className="w-[26px] h-[26px] justify-center items-center object-fit"
                />
                <div className="ml-1 text-white font-sans font-medium text-[14px]">
                  Blockchain
                </div>
              </div>
              <DynamicGameMenuCard imageUrls={blockChainGames} />

              <div className="flex flex-row m-2 items-center p-2">
                <img
                  src={iconCard}
                  alt="game_icon"
                  className="w-[26px] h-[26px] justify-center items-center object-fit"
                />
                <div className="ml-1 text-white font-sans font-medium text-[14px]">
                  Lottery
                </div>
              </div>
              <DynamicGameMenuCard imageUrls={lotteryGames} />

              <CBetFooter />
            </div>
          )}

          {isOfferFrame && (
            <div className="flex flex-col overflow-hidden">
              <CBetNav handleClickNav={() => setSideNavFrame(true)} />
              <CbetOffers />
            </div>
          )}

          {isProfileFrame && (
            <div className="flex flex-col overflow-hidden">
              <CBetNav handleClickNav={() => setSideNavFrame(true)} />
              <CBetProfile />
            </div>
          )}
          {isDragonTigerGame && (
            <PhaserGame/>
          )}
        </div>

        <CBetBottomNav handleItemClick={handleNavChange} />
      </main>
    </div>
  );
};

export default CBetDashboard;
