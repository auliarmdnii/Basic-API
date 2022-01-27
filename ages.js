const { response } = require('express');
const express = require('express');
const app = express();

// set to read a request data from JSON format
app.use(express.json());

// JSON is STRING

app.post('/ages', (request, response) => {
  // store the request data
  let data = request.body.ages;
  let jmlRemaja = 0,
    jmlTua = 0,
    jmlDewasa = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].umur >= 12 && data[i].umur <= 24) {
      jmlRemaja += 1;
    }

    if (data[i].umur >= 25 && data[i].umur <= 55) {
      jmlDewasa += 1;
    }

    if (data[i].umur > 55) {
      jmlTua += 1;
    }
  }

  //   give a response data
  return response.json({
    jumlah_remaja: jmlRemaja,
    jumlah_dewasa: jmlDewasa,
    jumlah_tua: jmlTua,
  });
});

app.listen(8000, () => {
  console.log(`Server run on port 8000`);
});
