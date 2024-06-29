import React, { useState } from "react";
import { RiWallet3Line } from "react-icons/ri"; // Example icon
import LocalStorageManager from "../../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../../session/Constants";

function WalletCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const userSession = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.LOGIN_RESPONSE);


  const flipCard = () => {
    LocalStorageManager.setItem(LOCAL_STORAGE_KEY.IS_REAL_WALLET,!isFlipped);

    setIsFlipped(!isFlipped);

  };
  return (
    <div
      className={`bg-gradient-to-b ${
        isFlipped
          ? "from-custom-brown to-custom-yellow"
          : "from-custom-yellow to-custom-brown"
      } rounded-lg p-4 shadow-md relative transition-transform duration-500 ${
        isFlipped ? "rotate-y-180" : ""
      }`}
    >
      <button onClick={() => flipCard()} className="absolute top-2 right-2">
        Change Wallet
      </button>

      {!isFlipped && (
          <div>
          <div className="flex items-center mb-2">
            <RiWallet3Line className="text-3xl mr-2" />
            <span className="text-lg font-semibold">INR Wallet balance</span>
          </div>
          <div className="text-3xl font-bold">₹{userSession.data.walletAmount || " 0.0"}</div>

          <div className="flex justify-between mt-4">
            <button className="bg-custom-yellow-light hover:bg-custom-yellow text-custom-brown py-2 px-4 rounded-md">
              Deposit
            </button>
            <button className="bg-custom-brown-light hover:bg-custom-brown text-custom-yellow py-2 px-4 rounded-md">
              Withdraw
            </button>
          </div>
        </div>
      )}

      {isFlipped && (
        <div>
          <div className="flex items-center mb-2">
            <RiWallet3Line className="text-3xl mr-2" />
            <span className="text-lg font-semibold">Demo Wallet balance</span>
          </div>
          <div className="text-3xl font-bold">₹{userSession.data.demoAmount}</div>

          
        </div>
      )}
    </div>
  );
}

export default WalletCard;
