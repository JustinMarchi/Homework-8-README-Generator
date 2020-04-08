const axios = require("axios");

const api = {
 async getUser(username) {
    const res = await axios({url: `https://api.github.com/users/${username}`, method: 'GET'}) 
    const user = res.data
    console.log(user);
    return user;
    
  }
};

module.exports = api;
