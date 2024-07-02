import React, { useState, useEffect } from "react";
import { fetchWingoContestTime, placeWingoBet } from "../../api/api_wingo";
import LocalStorageManager from "../../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../../session/Constants";
import { ToastContainer, toast } from "react-toastify";

function BetDialog({ onClose, betNumber }) {
  const [select7, setSelect7] = useState(7);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(10.0);
  const [lotAmount, setLotAmount] = useState(10);
  const [agree, setAgree] = useState(true);

  const [ contestData, setContestData ] = useState(null);
  const userSession = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.LOGIN_RESPONSE);
  const isRealWallet = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.IS_REAL_WALLET);


  const handleLotAmountChange = (e) => {
    const newLotAmount = parseInt(e, 10); // Parse the value to a number

    if (!isNaN(newLotAmount)) {
      // Check if the parsed value is a valid number
      setTotalAmount(newLotAmount * quantity);
      setLotAmount(newLotAmount);
      // setQuantity(quantity);  // This line seems unnecessary, as you're not changing the quantity
    }
  };
  const handleLotQuantiyChange = (e) => {
    const totalBetAmount = e.target.value * lotAmount;
    setLotAmount(e.target.value);
    setQuantity(e.target.value);

    setTotalAmount(totalBetAmount);
  };

  // Calculate totalAmount whenever select7 or quantity changes
  useEffect(() => {
    // Your logic to calculate totalAmount based on select7 and quantity
    // For example:
    // const newTotalAmount = select7 * quantity * basePrice;
    // setTotalAmount(newTotalAmount);
  }, [select7, quantity]);

  const handleSelect7Change = (event) => {
    setSelect7(parseInt(event.target.value, 10));
  };
  useEffect(() => {
    setTotalAmount(lotAmount * quantity);
  }, [lotAmount, quantity]);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };
  const handleClose = () => {
    onClose(); // Call the onClose prop function to close the dialog
  };
  const handlePlaceBetClick = () => {
    callPlaceBetApi();

  }

  const callPlaceBetApi = async () => {
    try {
      const rawJson = {
        userId : userSession.data._id,
        contestId : contestData.contestId,
        color : betNumber,
        number : betNumber,
        betAmount : totalAmount,
        isDemoBalance : isRealWallet,

        


      };
      const placeBetResponse = await placeWingoBet(rawJson);
      if(placeBetResponse.code ==400){
        toast.warn(placeBetResponse.message);

      }else{
        toast.warn(placeBetResponse.message);

        onClose();


      }



    }catch(error){
      alert(
        "An error occurred while fetching contest timer. Please try again later." +
          error
      );
    }


  }

  const callContestTimeAPI = async () => {
    try {

      const fetchContestTimings = await fetchWingoContestTime();
      console.log("Contest Time Response >", fetchContestTimings);

      const contestData = fetchContestTimings.data;

      // Option 1: Loop through contests
      for (const contestId in contestData) {
        const contest = contestData[contestId];
        console.log(`Contest ${contestId}:`, contest);
        // Do something with contest.contestName, contest.remainingTime, etc.
      }

      // Option 2: Access specific contests directly
      const contest3 = contestData["3"];
      console.log("Contest 3 details:", contest3);

      setContestData(contest3);
    } catch (error) {
      alert(
        "An error occurred while fetching contest timer. Please try again later." +
          error
      );
    }
  };
  useEffect(() => {
    callContestTimeAPI();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      
      <ToastContainer/>
      {contestData && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:max-w-md">
          <h2 className="text-yellow-400 text-2xl mb-4">Win Go 3 Min</h2>

          {/* Select 7 */}
          <div className="mb-4">
            <label htmlFor="select7" className="block text-white mb-2">
              Select {betNumber}
            </label>
            <label htmlFor="select7" className="block text-white mb-2">
              Contest ID : {contestData.contestId}
            </label>
           

            <h2
              type="number"
              id="select7"
              className="w-full bg-gray-700 text-white rounded-md p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={betNumber}
              onChange={handleSelect7Change}
              min="1"
            >
              {betNumber}
            </h2>
          </div>

          {/* Amount Buttons */}
          <div className="flex flex-row">
            <label
              htmlFor="quantity"
              className="block text-white mr-2 mt-2 text-center justify-center"
            >
              Balance
            </label>

            <div className="mb-4 flex space-x-2">
              {[10, 50, 100, 1000].map((amount) => (
                <button
                  key={amount}
                  className={`bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 ${
                    lotAmount === amount ? "bg-yellow-500" : "" // Yellow if selected
                  }`}
                  onClick={(e) => handleLotAmountChange(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4 flex items-center">
            <div className="mb-4 flex items-center">
              <label htmlFor="quantity" className="block text-white mr-2">
                Quantity
              </label>
              <button
                className="bg-gray-700 text-white rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                className="w-12 bg-gray-700 text-white text-center rounded-none p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={quantity}
                onChange={(e) => handleLotQuantiyChange(e)}
                readOnly
              />
              <button
                className="bg-gray-700 text-white rounded-r-md px-3 py-2 focus:outline-none focus:ring-blue-500"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* X Buttons */}
          <div className="mb-4 flex space-x-2">{/* ... X buttons ... */}</div>

          {/* Agreement Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="agree"
              className="mr-2 accent-blue-500 focus:outline-none focus:ring-blue-500"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <label htmlFor="agree" className="text-white text-sm">
              I agree{" "}
              <a href="#" className="text-blue-500">
                (Pre-sale rules)
              </a>
            </label>
          </div>

          {/* Total Amount Button */}

          <div className="flex flex-col">
            <button
              className={`bg-yellow-500 text-white rounded-md px-6 py-3 w-full focus:outline-none focus:ring-yellow-600 ${
                !agree && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => handlePlaceBetClick()}
              disabled={!agree}
            >
              PLACE BET AMOUNT: ₹{totalAmount.toFixed(2)}
            </button>

            <button
              className="bg-slate-700  text-white text-lg m-2 p-1 rounded-2xl focus:outline-none"
              onClick={handleClose} // Call the handleClose function on click
            >
              Close
            </button>
          </div>

          {/* Close Button */}
          {/* Close Button */}
        </div>
      )}
    </div>
  );
}

export default BetDialog;
