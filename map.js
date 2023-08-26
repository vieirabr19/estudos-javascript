/*
- Novas estruturas para armazenamento de dados.
- O Javascript até o ES5 contava apenas com matriz Array para armazenar de dados de forma organizada.
- Desta forma o  array e objetos eram usados em conjunto para resolver qualquer tipo de problema envolvendo dados.
- Com a chegada do ES6, foram incluídas 4 novas estruturas de dados (Map, Set, WeakSet e WeakMap).

- Map é uma estrutura de mapa de dados organizadas por conjunto de pares de chaves e valores.
- Permite adicionar dados informando uma chave personalizada e seu respectivo valor.
- Qualque tipo de dados pode ser usado com cheva ou valor, ex: string, number, object ou funcition.
- Um objeto Map é facilmente interável.
- Podemos recuperar um elemento do mapa pela chave.
- É possível deletar um elemento ou limpar todo o mapa.
- Existe um recurso para verificar se existe uma chave.
*/

/* Propriedade de metodos
 * Map.prototype.set()
 * Map.prototype.size
 * Map.prototype.get()
 * Map.prototype.delete()
 * Map.prototype.has()
 * Map.prototype.clear()
 * Map.prototype.forEach()
 * Map.prototype.entries()
 * Map.prototype.keys()
 * Map.prototype.valores()
 */

const nomeString = "Pedro";
const numero = 25.3;
const booleano = true;
const array = ["a", "b", "c"];
const funcao = function () {
  console.log("minha funcao");
};
const objeto = { produto: "teste" };
const regExp = /teste/gi;
