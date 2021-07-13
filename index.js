const bigmacpriceUS = 3.57;

const bigmacpriceUK = 2.29;
let exchangerateuk = 2.0;

const bigmacpriceNZ = 6.8;
let exchangeratenz = 1.4;

const bigmacpriceTHAI = 128;
let exchangeratethai = 30;

const bigmacpriceBRZ = 21.9;
let exchangeratebrz = 5.5;

const ppp = bigmacpriceUS / bigmacpriceUK;

let exchange = (exchangerateuk - ppp) / ppp;

const Priceindex = (exchange * 100).toFixed();

console.log(Priceindex + "%");

const ppp2 = bigmacpriceUS / bigmacpriceNZ;

let exchange2 = (exchangeratenz - ppp2) / ppp2;

const Priceindex2 = (exchange2 * 100).toFixed();

console.log(Priceindex2 + "%");

const ppp3 = bigmacpriceUS / bigmacpriceTHAI;

let exchange3 = (exchangeratethai - ppp3) / ppp3;

const Priceindex3 = (exchange3 * 100).toFixed();

console.log(Priceindex3 + "%");

const ppp4 = bigmacpriceUS / bigmacpriceBRZ;

let exchange4 = (exchangeratebrz - ppp4) / ppp4;

const Priceindex4 = (exchange4 * 100).toFixed();

console.log(Priceindex4 + "%");