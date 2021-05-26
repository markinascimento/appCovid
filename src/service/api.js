import axios from 'axios';

const api = axios.create({
    baseURL: 'https://covid19-brazil-api.vercel.app/'
});

export default api;

//https://covid19-brazil-api.vercel.app/api/report/v1/brazil - BRASIL

// https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/pb - PARAIBA