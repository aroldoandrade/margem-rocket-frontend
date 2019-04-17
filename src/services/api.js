import axios from 'axios';


const api = axios.create({
    baseURL:'https://margem-rocket-backend.herokuapp.com'
});



export default api;

