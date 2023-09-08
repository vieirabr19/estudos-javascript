/**
 * Destructuração de array.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [um, dois, tres, , , , , , nove, dez] = array;
console.log(um, dois, tres, nove, dez);

console.log("===========================");

let pessoas = [
  { name: "maria", telefone: "223333333" },
  { name: "luiz", telefone: "224444444" },
];

let [, { name, telefone }] = pessoas;
console.log(`Nome: ${name} - Telefone: ${telefone}`);

// Destruturação de valores investidos
let x = 10;
let y = 20;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);
