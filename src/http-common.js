import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:13280/api',
    headers: {
        "Content-Type": "application/json"
    }
});