import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'X-RapidAPI-Key': '13fa0e6f58mshad85efe4236c653p18862cjsncf4fece98993',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
});
