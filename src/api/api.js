import axios from 'axios';

export const userSignUp = async (user) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth", user);
    return response.data; // Assuming your API returns some data upon successful sign-up
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Rethrow the error to be handled where the function is called
  }
};


export const userLogin = async (user) => {
  try {
    const response = await axios.post("http://www.localhost:5000/api/auth/login", user);
    return response.data; // Assuming your API returns some data upon successful sign-up
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Rethrow the error to be handled where the function is called
  }
};


export const ChartData = async () => {
  try {
    const response = await axios.get("http://www.localhost:5000/data");
    return response.data; // Assuming your API returns some data upon successful sign-up
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Rethrow the error to be handled where the function is called
  }
};



export const userdata = async () => {
  try {
    const response = await axios.get("http://www.localhost:5000/product");
    return response.data; // Assuming your API returns some data upon successful sign-up
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Rethrow the error to be handled where the function is called
  }
};

export const LineChartData = async () => {
  try {
    const response = await axios.get("http://www.localhost:5000/data");
    return response.data; // Assuming your API returns some data upon successful sign-up
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; // Rethrow the error to be handled where the function is called
  }
};

