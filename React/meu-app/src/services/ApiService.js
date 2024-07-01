// src/services/ApiService.js
import axios from 'axios';

const ApiService = axios.create({
  baseURL: "http://localhost:3005",
});

export default ApiService;
