import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "https://dummyjson.com",
});

export default BaseUrl;
