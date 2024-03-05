import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { APP_URL } from "react-native-dotenv";

// create the interceptor
const api = axios.create({
    baseURL: `${APP_URL}`
})

api.interceptors.request.use(
    async (config) => {
    // Get the token from local storage, which im using async storage library for react native
      const token = await AsyncStorage.getItem("access_token");
  
    //   if the token is available, then set the auth with the token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
    //   then we return the config
      return config;
    },
    (err) => {
    // return the error if all the method above doesn't succeed
      return Promise.reject(err);
    }
  );

export default api