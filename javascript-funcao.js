// Função literal
function funcaoLiteral(nome) {
  console.log(nome);
}

// espressão
const expressao = function (numero) {
  return numero * numero;
};
console.log("expressao(2):", expressao(2));

// console.log("==========================");

const objetoPedido = {
  qtde: 8,
  valor: 10,
  somar: function () {
    return this.qtde * this.valor;
  },
};

// console.log("objetoPedido:", objetoPedido);
// console.log("objetoPedido.somar():", objetoPedido.somar());

// passando mais argumentos que parametros
function nomesUpperCase(nome1, nome2, nome3) {
  let nomes = "";
  nome3 = nome3 || ""; // caso passar menos argumentos
  const arr = [];

  if (arguments.length > 3) {
    for (let indice in arguments) {
      arr.push(arguments[indice]);
      nomes += arguments[indice] + " - ";
    }
  } else {
    nomes += nome1 + " - " + nome2 + " - " + nome3;
  }

  console.log("Array:", arr);
  // console.log("Array Typeof:", typeof arr);
  // console.log(
  //   "Object.prototype.toString.call:",
  //   Object.prototype.toString.call(arr)
  // );
  for (let nome of arr) {
    console.log(nome);
  }

  return nomes.toUpperCase();
}

// console.log("nomesUpperCase(nome1, nome2):", nomesUpperCase("Luiz", "Tamires"));
// console.log("==========================");
// console.log(
//   "nomesUpperCase(nome1, nome2, nome3):",
//   nomesUpperCase("Luiz", "Tamires", "Pedro")
// );
// console.log("==========================");
// console.log(
//   "nomesUpperCase(nome1, nome2, nome3, nome4, nome5):",
//   nomesUpperCase("Luiz", "Tamires", "Pedro", "Maria", "Fernanda")
// );

console.log("==========================");

// Funções de priemira classe (First-class function).
// Cidadão de priemeira -classe (First-class citizen).
// As funções em javascript são tratardas como objeto/valor.
// Algumas coisa que podemos fazer com uma função javascript em JS:
// 1. Atribuir a função uma varaivel ou propriedade do objeto;
// 2. Passar uma função argumento para parametro para outra função;
// 3. Retornar a função como valor para um chamador de outra função;
// 4. Armazenar a função em uma estrutura de dados como o array ou objeto.

// 2. Passar uma função argumento para parametro para outra função.
function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function calculadora(fn, v1, v2) {
  return fn(v1, v2);
}

console.log("calculadora(somar, 10, 10):", calculadora(somar, 10, 10));
console.log("calculadora(sub, 100, 10):", calculadora(subtrair, 100, 10));

console.log("==========================");

// 3. Retornar a função como valor para um chamador de outra função;
function calculadora2(operacao) {
  if (operacao == "somar") {
    return somar;
  } else if (operacao == "subtrair") {
    return subtrair;
  } else {
    return "Operação inválida!";
  }
}

const oparacaoSomar = calculadora2("somar");
console.log("oparacaoSomar:", oparacaoSomar(10, 10));

const oparacaoSubtrair = calculadora2("subtrair");
console.log("oparacaoSomar:", oparacaoSubtrair(100, 10));

console.log("==========================");

// 4. Armazenar a função em uma estrutura de dados como o array ou objeto.
const myArray = [(nome) => nome];
console.log('myArray[0]("Luiz"):', myArray[0]("Luiz"));

const myObj = { msg: (nome) => nome };
console.log('myObj.msg("Brasil"):', myObj.msg("Brasil"));

console.log("==========================");

/*
Hoisting ou içamento é uma técnica que o iterpretador do javascript usa para elevar 
para elevar para o topo do escopo as declarações de variáveis e funções que estejam espalhado
pelo código.
Desta forma, podemos referênciar uma função ou variavel em determinada linha do código mesmo que as
referidas declarações estejam em linhas posteriores.

OBS.: O Hoisting eleva apenas a declaração da variavel ou função, desconsiderando a imicialização da mesma,
desta forma, tome cuidado ao usar valores de variavel ou função tenham sido atribuidas a uma varivel.
Boa prática, declarar tudo no inicio do codigo.
*/

// Com variáveis ================
//Exemplo 1
// console.log("Nome:", nome);
// const nome = "Luiz";
// console.log("Nome:", nome);

// Com funções ================
//Exemplo 1

// funcao();
// function funcao() {
//   console.log("Teste");
// }

//Propriedades e funções de função
// const funcao2 = function () {};
// console.log("typeof funcao2:", typeof funcao2);

//Exemplo de calculadora que grava histórico

// calculadoraV2.operacoes = [];
// calculadoraV2.contador = 0;

// function calculadoraV2(operacao, v1, v2) {
//   let resultado = 0;
//   if (operacao === "somar") {
//     resultado = somar(v1, v2);
//   } else if (operacao === "subtrair") {
//     resultado = subtrair(v1, v2);
//   } else {
//     resultado = "Operação inválida!!";
//   }

//   setaMemoriaCalculadora(operacao, v1, v2, resultado);

//   return resultado;
// }

// function setaMemoriaCalculadora(operacao, v1, v2, resultado) {
//   const objCalc = { operacao, v1, v2, resultado };
//   calculadoraV2.operacoes.push(objCalc);
//   calculadoraV2.contador++;
// }

// calculadoraV2.exbirOperacoesRealizadas = () => {
//   console.log(`#==== ${calculadoraV2.contador} operacoes realizadas ====#`);
//   for (const op of calculadoraV2.operacoes) {
//     const sinal = op.operacao === "somar" ? "+" : "-";
//     console.log(`${op.operacao} ${op.v1} ${sinal} ${op.v2} = ${op.resultado}`);
//   }
// };

// console.log("calculadoraV2('somar', 20, 30):", calculadoraV2("somar", 20, 30));
// console.log("calculadoraV2('somar', 10, 10):", calculadoraV2("somar", 10, 10));
// console.log(
//   "calculadoraV2('subtrair', 80, 30):",
//   calculadoraV2("subtrair", 80, 30)
// );

// calculadoraV2.exbirOperacoesRealizadas();

calculadoraV3.oparacoes = [];
calculadoraV3.contador = 0;

function calculadoraV3(operacao, v1, v2) {
  let resultado = 0;
  if (operacao === "somar") {
    resultado = somar(v1, v2);
  } else if (operacao === "subtrair") {
    resultado = subtrair(v1, v2);
  } else {
    resultado = "Opareção inválida!!";
  }

  setaMemoriaCalculadora(operacao, v1, v2, resultado);

  return resultado;
}

function setaMemoriaCalculadora(operacao, v1, v2, resultado) {
  const objCalc = { operacao, v1, v2, resultado };
  calculadoraV3.oparacoes.push(objCalc);
  calculadoraV3.contador++;
}

calculadoraV3.exibirOperacoesRealizadas = () => {
  console.log(`#===== ${calculadoraV3.contador} operações realizadas. ====#`);
  for (let op of calculadoraV3.oparacoes) {
    const sinal = op.operacao === "somar" ? "+" : "-";
    console.log(`${op.operacao}: ${op.v1} ${sinal} ${op.v2} = ${op.resultado}`);
  }
};

console.log(
  "calculadoraV3('dividir', 10, 20):",
  calculadoraV3("dividir", 10, 20)
);
console.log("calculadoraV3('somar', 10, 20):", calculadoraV3("somar", 10, 20));
console.log("calculadoraV3('somar', 40, 20):", calculadoraV3("somar", 40, 20));
console.log(
  "calculadoraV3('subtrair',30, 20):",
  calculadoraV3("subtrair", 30, 20)
);

calculadoraV3.exibirOperacoesRealizadas();
