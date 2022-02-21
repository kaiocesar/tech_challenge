const axios = require("axios");

const options = {
  method: 'POST',
  url: 'http://localhost:3000/dev/graph',
  headers: {'Content-Type': 'application/json'},
  data: {
    query: `
      query {
        song(id: 321) {
          id
          song
        }
      }`
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});