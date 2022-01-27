const { response } = require('express');
const express = require('express');
const app = express();

// set to read a request data from JSON format
app.use(express.json());

// JSON is STRING

app.post('/cost', (request, response) => {
  // store the request data
  let data = request.body.cost;
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i].harga * data[i].jumlah;
    let ppn = (total * 10) / 100;
    total += ppn;
  }

  //   let ppn = (total * 10) / 100;
  //   total += ppn;

  //   give a response data
  return response.json({
    Total: total,
  });
});

app.listen(8000, () => {
  console.log(`Server run on port 8000`);
});
