import axios from 'axios';
//API_KEY
const KEY = "AIzaSyBpMtDVEF7vhZ13edQa1Z9UFdnlIhBB5iU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});