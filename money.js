const { response } = require('express');
const express = require('express');
const app = express();

// set to read a request data from JSON format
app.use(express.json());

// JSON is STRING

app.post('/pecahan', (request, response) => {
  // store the request data
  let money = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
  let butuhUang = request.body.nominal;
  let hasil = [];

  for (let i = 0; i < money.length; i++) {
    if (nominal >= money[i]) {
      let count = Math.floor(nominal / money[i]);
      nominal = nominal % money[i];

      hasil.push({
        money: money[i],
        jumlah: count,
      });
    }
  }

  //   give a response data
  return response.json({
    hasil,
  });
});

app.listen(8000, () => {
  console.log(`Server run on port 8000`);
});
