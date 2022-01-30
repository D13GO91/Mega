const number = [];
const moreShow = [
  02, 11, 17, 18, 22, 33, 34, 35, 37, 38, 40, 41, 42, 51, 53, 56, 58, 22,
];
const neverShow = [
  02, 11, 17, 18, 22, 33, 34, 35, 37, 38, 40, 41, 42, 51, 53, 56, 58, 22,
];

for (i = 0; i < 60; i++) {
  number[i] = i + 1;
}

function getRandom() {
  return Math.random();
}

console.log(number);

function searchNumber(numeros) {
  const result = [];
  let i = 0;

  while (i < 6) {
    let aleatorio = Math.floor(getRandom() * 61);

    if (result[i] !== aleatorio) {
      result.push(aleatorio);
      i++;
    }
  }
  return result;
}

console.log(searchNumber(number));
