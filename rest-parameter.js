/*
Rest parameter permite recuperar um numero indefinido de argumentos passado na chamada de uma função, 
transformnado-os em um único parametro recebido pela função no caso um array de valores.

É usado como o útimo argumento na definição da uma função e usa a sintaxe identica ao spread.
*/

function mostraNome() {
  let nomeCompleto = "";

  Array.prototype.forEach.call(arguments, (valor) => {
    nomeCompleto += valor + " ";
  });

  console.log(nomeCompleto);
}

mostraNome("Pedro", "Augusto", "Brasil");

function mostraNomeResParameter(...nomes) {
  let nomeCompleto = "";
  nomes.forEach((nome) => (nomeCompleto += nome + " "));
  console.log(nomeCompleto);
}

mostraNomeResParameter("João", "Vieira", "Silva");

console.log("==============");

function somarNumeros(...operandos) {
  let somar = operandos.reduce((acc, cur, index, arr) => {
    return (acc += cur);
  });

  console.log("operandos: ", operandos);
  console.log("SOMAR: ", somar);
}

const numeros = [10, 12, 20];

somarNumeros(...numeros);
somarNumeros(10, 12, 20);
