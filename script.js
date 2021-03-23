"use strict";

const cislo1 = document.getElementById("kalkulacka");
const cislo2 = document.getElementById("kalkulacka2");
const secti = document.getElementById("secti");
const vysledek = document.getElementById("vysledek");

secti.onclick = () => {
  const sum = Number(cislo1.value) + Number(cislo2.value);
  vysledek.innerHTML = sum;
};

const x = 5;

if (x === 10) {
  console.log("x je 10");
} else {
  console.log("není 10");
}
let i = 1;
while (i < 10) {
  console.log ("while " + i);
  i += 1;
}

for (let j = 1; j < 10; j += 7) {
  console.log("for " + j);
}