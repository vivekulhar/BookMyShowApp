// setup axios
import axios from "axios";

// create a axios instance
export const axiosInstance = axios.create({
  headers: {
    credentials: "include",
    method: "POST",
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});