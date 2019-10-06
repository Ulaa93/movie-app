import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.themoviedb.org/3',
    params: { 
        api_key: '5236ddbc013048df15c4d8048f0dd82e',
    }
   })