import axios from "axios";

export default axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: `098514718768480c837eb87b27dce845`,
  },
});
