// setup axios
import axios from "axios";

// create a axios instance
export const axiosInstance = axios.create({
  headers: {
    credentials: "include",
    method: "POST",
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});