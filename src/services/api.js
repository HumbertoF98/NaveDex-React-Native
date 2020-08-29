import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
// baseURL API
const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1",
});

/**
Here the Axios interceptors were used,
 as the name suggests it intercepts a request before it actually happens,
  at that moment it is checked if there is a token in the localStorage,
   and if it exists, it adds the Authorization Header to the request.
 */
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
