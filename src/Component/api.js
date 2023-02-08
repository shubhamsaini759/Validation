import axios from "axios";
// import Endpoints from "./Endpoints";

const URL = "https://www.google.com/image1/";

export const Api = axios.create({
  baseURL: URL,
});

// Api.post(Endpoints.IMAGE1).then((res) => res.data);
