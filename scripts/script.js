const numerosDaMega = [];
const maisSorteadosMV = [
  02, 11, 17, 18, 22, 33, 34, 35, 37, 38, 40, 41, 42, 51, 53, 56, 58, 22,
];
const nuncaSorteadosMV = [
  02, 11, 17, 18, 22, 33, 34, 35, 37, 38, 40, 41, 42, 51, 53, 56, 58, 22,
];

for (i = 0; i < 60; i++) {
  numerosDaMega[i] = i + 1;
}

function getRandom() {
  return Math.random();
}

console.log(number);

function searchNumber(numeros) {
  const result = [];
  let i = 0;

  while (i < 6) {
    let aleatorio = Math.floor(getRandom() * numeros.length);
    let newNumber = numeros[aleatorio];

    console.log(result.indexOf(newNumber));

    if (result.indexOf(newNumber) < 0) {
      result.push(newNumber);
      i++;
    }
  }
  return result;
}

console.log(searchNumber(numerosDaMega));
