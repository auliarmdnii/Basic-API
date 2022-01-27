const { response } = require('express');
const express = require('express');
const app = express();

// set to read a request data from JSON format
app.use(express.json());

// JSON is STRING

app.post('/discount', (request, response) => {
  // store the request data
  let shop = request.body.shop;
  let total = 0;
  let total_item = 0;
  let disc = 0;

  for (let i = 0; i < shop.length; i++) {
    let total_belanja = shop[i].price * shop[i].qty;
    if (shop[i].qty >= shop[i].min_discount) {
      total_belanja = (1 - shop[i].discount) * total_belanja;
    }
    total += Number(total_belanja);
    total_item += shop[i].qty;
  }

  //   give a response data
  return response.json({
    total: total,
    total_item: total_item,
  });
});

app.listen(8000, () => {
  console.log(`Server run on port 8000`);
});
