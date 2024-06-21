import React from 'react';
import { FaHome, FaGift, FaUserTie, FaHeadset, FaUser } from 'react-icons/fa';

const CBetBottomNav = ({handleItemClick}) => {

  const changeNav = (label) => {
    handleItemClick(label);
  }
  const navItems = [
    { icon: <FaHome />, label: 'Home', path: '/' },
    { icon: <FaGift />, label: 'Offers', path: '/offers' },
    { icon: <FaUserTie />, label: 'Agent', path: '/agent' },
    { icon: <FaHeadset />, label: 'Service', path: '/service' },
    { icon: <FaUser />, label: 'Profile', path: '/profile' },
  ];

  return (
        <div className=" min-w-fit mb-5  left-0 w-screen    bg-gray-800 p-2 flex justify-around">
        {navItems.map((item, index) => (
            <a
            key={index}
            onClick={() => changeNav(item.label)}
            className="text-gray-300 hover:text-yellow-400 flex flex-col items-center space-y-1" // Added space-y-1
            >
            <div className="text-xl">{item.icon}</div>
            <span className="text-xs">{item.label}</span>
            </a>
        ))}
        </div>
  );
};

export default CBetBottomNav;
