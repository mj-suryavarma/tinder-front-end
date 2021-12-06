import axios from 'axios';

const instance = axios.create({
    baseURL:"https://mj-tinder-app-backend.herokuapp.com/"
});

export default instance