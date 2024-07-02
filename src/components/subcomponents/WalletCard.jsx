import React, { useState,useEffect } from "react";
import { RiWallet3Line } from "react-icons/ri"; // Example icon
import LocalStorageManager from "../../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../../session/Constants";
import { getUserDetail } from "../../api/api_interface";

function WalletCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userDetails,setUserDetail] = useState(null);

  const userSession = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.LOGIN_RESPONSE);

  const callUserDetailAPI = async () => {
    try {
      const rawJson = { userId: userSession.data._id };

      const userDetailsResponse =
        await getUserDetail(rawJson);

        LocalStorageManager.setItem(LOCAL_STORAGE_KEY.LOGIN_RESPONSE,userDetailsResponse);



      setUserDetail(userDetailsResponse);
    } catch (error) {
      console.log(error);
    }

  }
   useEffect(() => {
    // Initial call when the component mounts
    callUserDetailAPI(); 

    // Set up the interval to call the API every 5 seconds
    const intervalId = setInterval(callUserDetailAPI, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once


  const flipCard = () => {
    LocalStorageManager.setItem(LOCAL_STORAGE_KEY.IS_REAL_WALLET,!isFlipped);

    setIsFlipped(!isFlipped);

  };
  return (


    <div>
        {userDetails ? (
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
      ) : (
        <p>Loading user details...</p>
      )}


    </div>
    
    
    
  );
}

export default WalletCard;
