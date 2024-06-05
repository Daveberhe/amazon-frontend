import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-9d854/us-central1/api",
  // deployed version of firebase function
  // baseURL: "http://localhost:5000",

  // deployed version of amazon server on render.com
  baseUrl: "https://amazon-api-deploy-fet3.onrender.com",
});

export { axiosInstance };
