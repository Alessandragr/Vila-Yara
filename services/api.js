// import axios from 'axios';
const axios = require('axios');
console.log('entrou no axios que eu quero');

    const api = axios.create({
    baseURL: 'https://sisgest-vila-yara.herokuapp.com'
    });

module.exports = api;