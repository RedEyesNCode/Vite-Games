import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import iconCard from '../assets/icon_card.png'
import iconBlockChain from '../assets/icon_block_chain.png'
import iconFootball from '../assets/icon_football.png'
import iconJackpot from '../assets/icon_jackpot.png'
import iconLottery from '../assets/icon_lottery.png'

function GameSlideMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    { name: 'Cards', icon : iconCard},
    { name: 'Block chain', icon : iconBlockChain},
    { name: 'Football', icon : iconFootball},
    { name: 'Jackpot', icon : iconJackpot},
    { name: 'Lottery', icon : iconLottery},

  ];

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % menuItems.length);
  };

  return (
    <div className="relative overflow-hidden bg-gray-800 rounded-lg shadow-md items-center w-[80%]">
      <div
        className="flex transition-transform duration-300 ease-in-out whitespace-nowrap items-center justify-center"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col w-1/5 p-2 text-center text-white font-bold items-center justify-center ${
              index === activeIndex ? 'bg-gray-700' : ''
            }`}
          >
            <img
            src={item.icon}
            alt='game_icon'
            className='w-[26px] h-[26px]  justify-center items-center object-cover'
            ></img>
            
            <div className='text-white font-normal text-[11px] '>
            {item.name}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-700 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <BiRightArrow className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default GameSlideMenu;
