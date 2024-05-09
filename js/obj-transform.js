'use strict';

// initial data
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

// code (changing the values of an object into the new object)
let updatedPriceData = {};
for (const [key, value] of Object.entries(priceData)) {
  updatedPriceData[key.toLowerCase()] = Number(value).toFixed(2);
}

console.log(updatedPriceData);