/**
 * Classe é um recurso utilizado na programação orientada a objetos para instanciar objetos.
 */

function PessoaES5(nome, cpf) {
  //propriedades
  this.nome = nome;
  this.cpf = cpf;
}

PessoaES5.prototype.nomeUpper = function () {
  return this.nome.toUpperCase();
};

const pessoa1ES5 = new PessoaES5("Luiz", "1233455");
const pessoa2ES5 = new PessoaES5("Maria", "5666664");

console.log("pessoa1ES5:", pessoa1ES5);
console.log("pessoa1ES5.nomeUpper():", pessoa1ES5.nomeUpper());
console.log("pessoa2ES5:", pessoa2ES5);
console.log("pessoa2ES5.nomeUpper():", pessoa2ES5.nomeUpper());

console.log("==========================");

//ES6
class PessoaES6 {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }

  nomeUpper() {
    return this.nome.toUpperCase();
  }
}

const pessoa1ES6 = new PessoaES6("Pedro", "3344433");
const pessoa2ES6 = new PessoaES6("Carla", "5444455");

console.log("pessoa1ES6:", pessoa1ES6);
console.log("pessoa1ES6:", pessoa1ES6.nomeUpper());
console.log("pessoa2ES6:", pessoa2ES6);
console.log("pessoa2ES6:", pessoa2ES6.nomeUpper());
