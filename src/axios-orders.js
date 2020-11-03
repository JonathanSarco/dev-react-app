import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-90c6d.firebaseio.com'
});

export default instance;