import axios from "axios";

const KEY = "AIzaSyD6kHpv0RB_QEgn-WHyn1G6OBnaWD9r36g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
