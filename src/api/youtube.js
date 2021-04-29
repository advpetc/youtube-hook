import axios from "axios";
const KEY = "AIzaSyDe19Cs8wds3H78kwxefKMmg9n0s3cwucs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
