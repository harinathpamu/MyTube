import axios from 'axios'

const KEY = 'api-key-goes-here';

const axs = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 8,
        key: KEY
    }
});

export default axs;
