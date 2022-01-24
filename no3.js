const { request, response } = require('express');
let express = require('express');

//inisialisasi
let app = express();

//endpoint pertama(konversi desimal)
app.get('/konversi/desimal/:d', (request, response) => {
  let d = request.params.d;

  let b = Number(d).toString(2);
  let o = Number(d).toString(8);
  let h = Number(d).toString(16);

  return response.json({
    Decimal: d,
    result: `Binary = ${b}, Octal = ${o}, Hexadecimal = ${h}`,
  });
});

//endpoint kedua(konversi binary)
app.get('/konversi/binary/:b', (request, response) => {
  let b = request.params.b;

  let d = parseInt(b, 2);
  let o = d.toString(8);
  let h = d.toString(16);

  return response.json({
    Binary: b,
    result: `Decimal = ${d}, Octal = ${o}, Hexadecimal = ${h}`,
  });
});

//endpoint ketiga(konversi octal)
app.get('/konversi/octal/:o', (request, response) => {
  let o = request.params.o;

  let d = parseInt(o, 8);
  let b = d.toString(2);
  let h = d.toString(16);

  return response.json({
    Octal: o,
    result: `Decimal = ${d}, Binary = ${b}, Hexadecimal = ${h}`,
  });
});

//endpoint keempat(konversi hexadecimal)
app.get('/konversi/hexadecimal/:h', (request, response) => {
  let h = request.params.h;

  let d = parseInt(h, 16);
  let b = d.toString(2);
  let o = d.toString(8);

  return response.json({
    Hexadecimal: h,
    result: `Decimal = ${d}, Binary = ${b}, Octal = ${o}`,
  });
});

app.listen(8000, () => {
  console.log(`Server run on port 8000`);
});
