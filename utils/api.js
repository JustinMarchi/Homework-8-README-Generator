const axios = require("axios");
require('dotenv').config();

const token = process.env.TOKEN;
const api = {
 async getUser(username) {
    const res = await axios({url: `https://api.github.com/users/${username}?access_token=${token}`, method: 'GET'}) 
    const user = res.data
    console.log(user);
    return user;
    
  }
};

module.exports = api;
