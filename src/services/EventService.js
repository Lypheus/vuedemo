import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/Lypheus/mockdb/Lypheus/mockdb",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return api.get("/events");
  },
  getEventById(id) {
    return api.get( "/events?id=" + id );
  }
};
