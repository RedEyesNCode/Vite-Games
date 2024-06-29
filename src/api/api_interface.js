import apiService from "./api_service";




export const loginRedUser = async (loginData) => {
  try {
    const response = await apiService("login-user", "POST", loginData);
    return response;
  } catch (error) { }
};




export const registerRedUser = async (registerData) => {
  try {
    const response = await apiService(
      "register-user",
      "POST",
      registerData
    );
    return response;
  } catch (error) {
    console.log(error);

  }
};