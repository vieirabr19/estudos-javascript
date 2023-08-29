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
