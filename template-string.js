/*
Tagget template string
*/

//exemplo marcação ou tag(tagget template string)
const nome = "Maria";
const sobrenome = "Silva";

function caixaAlta(arrayTexto, ...args) {
  let str = "";
  arrayTexto.forEach((texto, index) => {
    str += `${texto} ${args[index] ? args[index].toUpperCase() : ""}`;
  });

  return str;
}

console.log(caixaAlta`Olá ${nome}, seu sobrenome é ${sobrenome}?`);
console.log("======================");

//função geradora ES6
objES6 = {
  msg() {
    console.log("Olá!");
  },
  somar(a, b) {
    console.log("Somar a + b =", a + b);
  },
  *geradora(i) {
    yield i + 1;
  },
};

objES6.msg();
objES6.somar(10, 20);
console.log(objES6.geradora(2).next().value);
