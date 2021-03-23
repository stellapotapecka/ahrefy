const cislo1 = document.getElementById("kalkulacka");
const cislo2 = document.getElementById("kalkulacka2");
const secti = document.getElementById("secti");
const vysledek = document.getElementById("vysledek");

const size = 40;

secti.onclick = () => {
  const sum = Number(cislo1.value) + Number(cislo2.value);
  vysledek.innerHTML = sum;
};
