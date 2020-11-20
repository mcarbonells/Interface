const axios_ = require('axios');
const apiUrl = require('./apiGraph').apiUrl;
const queries = require('./apiGraph').queries;

axios_.post(apiUrl, {
    query: queries.getUserByEmail
})
.then((res) => {
    console.log("Entre")
  console.log(res.data)
})
.catch((error) => {
    console.log(" NO Entre")
  console.error(error)
});