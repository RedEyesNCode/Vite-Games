import apiService from "./api_service";

export const fetchWingoContestTime = async () => {
    try {
      const response = await apiService("fetch-wingo-with-time", "GET", );
      return response;
    } catch (error) { }
  };

  export const fetchContestHistoryByDuration = async (data) => {
    try {
      const response = await apiService("fetch-wingo-by-duration", "POST",data );
      return response;
    } catch (error) { }
  };

  export const placeWingoBet = async (data) => {
    try {
      const response = await apiService("place-wingo-bet", "POST",data );
      return response;
    } catch (error) { }
  };

  export const getUserGeneralTransactions = async (data) => {
    try {
      const response = await apiService("get-user-general-transactions", "POST",data );
      return response;
    } catch (error) { }
  };
