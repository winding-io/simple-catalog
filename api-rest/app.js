const express = require('express');
const app = express();
const phones = [
  {
    id: '2yhbdg36guldjb48',
    title: 'iPhone 7',
    description: 'La pantalla de iPhone más brillante y con más colores hasta la fecha.,Más velocidad y autonomía que nunca. Resistencia al agua y a las salpicaduras.Y altavoces estéreo.,Es una belleza. Es una bestia. Es el 7.',
    model: 'iPhone7',
    color: 'gold',
    vendor: 'Apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/IPhone_7_Jet_Black.svg/200px-IPhone_7_Jet_Black.svg.png',
    price: '529.0'
  },
  {
    id: 'jfeyhbey228bb2b8',
    title: 'Samsung Galaxy S7',
    description: 'El Samsung Galaxy, conocido como Samsung GT-I7500 en algunos países, es un teléfono móvil manufacturado por Samsung, siendo uno de los primeros que utiliza el sistema operativo de código abierto Android. Fue anunciado el 27 de abril de 2009.2​ Es sucedido por el Samsung i5700.',
    model: 'SamsungGalaxyS7',
    color: 'black',
    vendor: 'Samsung',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Samsung_Galaxy_S7_and_S7_Edge.png/245px-Samsung_Galaxy_S7_and_S7_Edge.png',
    price: '419.70'
  },
  {
    id: 'hdb2bbu278b2hdh9',
    title: 'bq aquaris x5',
    description: 'Es un smartphone con cuerpo de aluminio, ligero y ultrafino. Radicalmente diferente, pero fiel a BQ. Y, para hacer posible este reto hemos recurrido a técnicas de fabricación pioneras, como la fundición por inyección die casting y el Nano Moulding (NMT).',
    model: 'bqAquarisX5',
    color: 'white',
    vendor: 'BQ',
    image: 'https://store.bq.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/a/q/aquarisx5_platablanco_vistasplanas_4.jpg',
    price: '236.65'
  },
  {
    id: '3niu3yvw8rqmaydw',
    title: 'Honor 10',
    description: 'El Honor 10 cuenta con un procesador Kirin 970 de ocho núcleos y Android 8.1 + EMUI 8.1 Con su gran pantalla de 5.84” LTPS 19:9 disfrutarás de una experiencia visual increíble Cuenta con una cámara trasera dual de 16+24 Mpx F1.8 y una frontal de 24mpx F2.0 con las que obtendrás las mejores instantáneas posibles',
    model: 'Honor10',
    color: 'blue',
    vendor: 'Honor',
    image: 'https://cdn.shopify.com/s/files/1/0015/5720/0961/products/honor-v10-gallery-blue-01_db71988a-6120-4660-951b-377c3ce9fe0b_1024x1024.jpg?v=1524224544',
    price: '379.00'
  }
];


app.get('/phones', function (req, res) {
  res.send(phones);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});