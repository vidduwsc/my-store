import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:5000/api/"
      : "https://server-my-store.herokuapp.com/api/",
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
