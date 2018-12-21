import axios from 'axios'

const KEY = 'AIzaSyDGGJ8ih_XBfaQYbFg-OZZ6ZjQQSvn_vcY';

const axs = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 8,
        key: KEY
    }
});

export default axs;