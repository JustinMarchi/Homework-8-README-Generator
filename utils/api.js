const axios = require("axios");

const api = {
 async getUser(username) {
    const res = await axios({url: `https://api.github.com/users/${username}?access_token=821e9a6165e945f26d29c07b572aece96049fe89`, method: 'GET'}) 
    const user = res.data
    console.log(user);
    return user;
    
  }
};

module.exports = api;
