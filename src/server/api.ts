import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333",
  // baseURL: "http://192.168.0.25:3333"
})