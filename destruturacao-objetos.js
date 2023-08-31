/**
 * Destructuring (desestruração de dados) é uma forma de extração de dados.
 * Destructuração de objetos.
 */

const objPessoa = {
  nome: "Luiz",
  idade: 22,
  email: "teste@teste.com",
  sexo: "Masculino",
  telefone: "1199999999",
  endereco: { rua: "Rua A", numero: 123, cidade: "São Paulo", estado: "SP" },
  site: undefined,
};

// console.log(objPessoa);

//ES5
const telefone = objPessoa.telefone;
const email = objPessoa.email;

console.log(`Telefone: ${telefone} - Email: ${email}`);

console.log("===================");

// ES6
const { nome, idade } = objPessoa;
console.log(`Nome: ${nome} - Idade: ${idade}`);

//Rotulo - alterando o nome da variável
const { nome: nomeCompleto, telefone: celular } = objPessoa;
console.log(`Nome completo: ${nomeCompleto} - Celular: ${celular}`);

console.log("===================");

// const { rua, numero, cidade, estado } = objPessoa.endereco;
const {
  endereco: { rua, numero, cidade, estado },
} = objPessoa;
console.log(rua, numero, cidade, estado);

console.log("===================");

// Valor padrão
let { escola, pais, site } = objPessoa;
pais = "Brasil";
site = "www.meusite.com";
console.log(escola, pais, site);
