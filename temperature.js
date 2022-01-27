let express = require('express');

let app = express();

app.get('/convert/celcius/:C', (request, response) => {
  let C = request.params.C;

  let R = null;
  let F = null;
  let K = null;

  R = (4 / 5) * C;
  F = (9 / 5) * C + 32;
  K = C + 273;

  return response.json({
    Celcius: C,
    Result: {
      Reamur: R,
      Farenheit: F,
      Kelvin: K,
    },
  });
});

app.get('/convert/reamur/:R', (request, response) => {
  let R = request.params.R;

  let C = null;
  let F = null;
  let K = null;

  C = (5 / 4) * R;
  F = (9 / 4) * R + 32;
  K = (5 / 4) * R + 273;

  return response.json({
    Reamur: R,
    Result: {
      Celcius: C,
      Farenheit: F,
      Kelvin: K,
    },
  });
});

app.get('/convert/kelvin/:K', (request, response) => {
  let K = request.params.K;

  let C = null;
  let F = null;
  let R = null;

  C = K - 273;
  F = (K * 9) / 5 - 459.67;
  R = (4 / 5) * (K - 273);

  return response.json({
    Kelvin: K,
    Result: {
      Celcius: C,
      Farenheit: F,
      Reamur: R,
    },
  });
});

app.get('/convert/farenheit/:F', (request, response) => {
  let F = request.params.F;

  let C = null;
  let R = null;
  let K = null;

  C = (5 / 9) * (F - 32);
  R = (4 / 9) * (F - 32);
  K = ((F + 459.67) * 5) / 9;

  return response.json({
    Farenheit: F,
    Result: {
      Celcius: C,
      Reamur: R,
      Kelvin: K,
    },
  });
});

app.listen(8000, () => {
  console.log('Server run on port 8000');
});
