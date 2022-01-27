const { response } = require('express');
const express = require('express');
const app = express();

// set to read a request data from JSON format
app.use(express.json());

// JSON is STRING

app.post('/score', (request, response) => {
  // store the request data
  let data = request.body.score;
  let lulus = [];
  let tidak_lulus = [];
  let nilai_rata_rata = 0;

  for (let i = 0; i < data.length; i++) {
    nilai_rata_rata += (data[i].math + data[i].english) / 2;
  }
  let kkm = nilai_rata_rata / 4;

  for (let i = 0; i < data.length; i++) {
    let kkm_siswa = (data[i].math + data[i].english) / 2;
    if (kkm_siswa >= kkm) {
      lulus.push(data[i].name);
    }
    if (kkm_siswa < kkm) {
      tidak_lulus.push(data[i].name);
    }
  }

  //   give a response data
  return response.json({
    lulus: lulus,
    tidak_lulus: tidak_lulus,
    nilai_rata_rata: kkm,
  });
});

app.listen(8000, () => {
  console.log(`Server run on port 8000`);
});
