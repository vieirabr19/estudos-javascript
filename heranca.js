/**
 * Classe é um recurso utilizado na programação orientada a objetos para instanciar objetos.
 * Herança
 */

function PessoaES5(nome, cpf) {
  //propriedades
  this.nome = nome;
  this.cpf = cpf;
}

PessoaES5.prototype.nomeUpper = function () {
  return this.nome.toUpperCase();
};

function Funcionario(nome, cpf, matricula) {
  PessoaES5.call(this, nome, cpf);
  this.matricula = matricula;
}

Funcionario.prototype = Object.create(PessoaES5.prototype);
Funcionario.prototype.constructor = Funcionario;

const funcionario1 = new Funcionario("Marta", "3455566", "123");
console.log("funcionario 1:", funcionario1);
console.log("funcionario 1:", funcionario1.nomeUpper());

// const pessoa1ES5 = new PessoaES5("Luiz", "1233455");
// const pessoa2ES5 = new PessoaES5("Maria", "5666664");

// console.log("pessoa1ES5:", pessoa1ES5);
// console.log("pessoa1ES5.nomeUpper():", pessoa1ES5.nomeUpper());
// console.log("pessoa2ES5:", pessoa2ES5);
// console.log("pessoa2ES5.nomeUpper():", pessoa2ES5.nomeUpper());

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

class FuncionarioES6 extends PessoaES6 {
  constructor(nome, cpf, matricula) {
    super(nome, cpf);
    this.matricula = matricula;
  }

  matriculaPessoa() {
    return `${this.matricula} - ${this.nome.toUpperCase()}`;
  }
}

const obj1Funcionario = new FuncionarioES6("Antonio", "134555", "3483");
console.log("obj1Funcionario.nome:", obj1Funcionario.nome);
console.log("obj1Funcionario.cpf:", obj1Funcionario.cpf);
console.log("obj1Funcionario.matricula:", obj1Funcionario.matricula);
console.log("obj1Funcionario.nomeUpper():", obj1Funcionario.nomeUpper());
console.log(
  "obj1Funcionario.matriculaPessoa():",
  obj1Funcionario.matriculaPessoa()
);

// const pessoa1ES6 = new PessoaES6("Pedro", "3344433");
// const pessoa2ES6 = new PessoaES6("Carla", "5444455");

// console.log("pessoa1ES6:", pessoa1ES6);
// console.log("pessoa1ES6:", pessoa1ES6.nomeUpper());
// console.log("pessoa2ES6:", pessoa2ES6);
// console.log("pessoa2ES6:", pessoa2ES6.nomeUpper());
