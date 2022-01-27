// load library express
const { request, response } = require('express');
let express = require('express');

// inisiasi objek baru dari express
let app = express();

// endpoint pertama Kubus
app.get('/hitungVolumeLuasKubus/:sisi', (request, response) => {
  // tampung data yg dikirimkan
  let sisi = request.params.sisi;

  let volume = null;
  let luas = null;

  volume = sisi * sisi * sisi;
  luas = 6 * sisi * sisi;

  return response.json({
    message: `Volume Kubus =  ${volume}, Luas Permukaan Kubus = ${luas}`,
  });
});

// endpoint kedua Balok
app.get('/hitungVolumeLuasBalok/:tinggi/:panjang/:lebar', (request, response) => {
  // tampung data yg dikirimkan
  let tinggi = request.params.tinggi;
  let panjang = request.params.panjang;
  let lebar = request.params.lebar;

  let volume = null;
  let luas = null;

  volume = panjang * lebar * tinggi;
  luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

  return response.json({
    message: `Volume Balok =  ${volume}, Luas Permukaan Balok = ${luas}`,
  });
});

// endpoint ketiga Tabung
app.get('/hitungVolumeLuasTabung/:tinggi/:jari2/:diameter', (request, response) => {
  // tampung data yg dikirimkan
  let tinggi = request.params.tinggi;
  let jari2 = request.params.jari2;
  let diameter = request.params.diameter;

  let volume = null;
  let luaspermukaan = null;
  let luasselimut = null;
  let luasalas = null;
  let phi = 3.14;

  volume = phi * jari2 * jari2 * tinggi;
  luaspermukaan = 2 * phi * jari2 * (jari2 + tinggi);
  luasselimut = phi * diameter * tinggi;
  luasalas = phi * jari2 * jari2;

  return response.json({
    message: `Volume Tabung = ${volume}
     Luas Permukaan Tabung = ${luaspermukaan}
     Luas Selimut Tabung = ${luasselimut}
     Luas Alas Tabung = ${luasalas}`,
  });
});

// endpoint keempat Bola
app.get('/hitungVolumeLuasBola/:jari2/:diameter', (request, response) => {
  // tampung data yg dikirimkan
  let jari2 = request.params.jari2;
  let diameter = request.params.diameter;

  let volume = null;
  let luas = null;
  let phi = 3.14;

  volume = (4 * phi * jari2 * jari2 * jari2) / 3;
  luas = 4 * phi * jari2 * jari2;

  return response.json({
    message: `Volume Bola = ${volume}
     Luas Permukaan Bola = ${luas}`,
  });
});

app.listen(8000, () => {
  console.log(`Server run on port 8000`);
});
