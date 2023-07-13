function gerandoErroDeInteracao() {
  try {
    for (let i = 30, c = 0; i >= 0; i--, c++) {
      console.log(i + " - " + c);
      if (c === 22) {
        throw new Error("Ocorreu um erro na interação: " + c);
      }
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  } finally {
    console.log("Sempre será exutado!!!");
  }
}
// gerandoErroDeInteracao();

const nomeCompleto = "Maria da Silva Santarém";

function getName(name, bool) {
  name = name.split(" ");
  const nome = name[0];
  const sobrenome = name.slice(1).join(" ") || nome;
  return bool ? nome : sobrenome;
}

const objNomeSobrenome = {
  nome: getName(nomeCompleto, true),
  sobrenome: getName(nomeCompleto, false),
};

function getMath() {
  const texto = "Casa de papel de Madeira e de Ferro";
  const resultado = texto.match(/de/g); // realiza uma pesquisa com regex, retorna um (array ou null) caso não encontre nada.
  console.log("Tipo:", Object.prototype.toString.call(resultado));
  console.log(resultado);
}
// getMath();

function getSearch() {
  const texto = "Casa de papel de Madeira e de Ferro";
  const resultado = texto.search(/de/g); // realiza uma pesquisa com regex, retorna um (number ou -1) caso não encontre nada.
  console.log("Tipo:", Object.prototype.toString.call(resultado));
  console.log(resultado);
}
// getSearch();

function getStartWith() {
  const nome = "Maria de Souza";
  const resultado = nome.startsWith("Maria"); // verifica se começa com ?, retorna (true ou false).
  console.log("Tipo:", Object.prototype.toString.call(resultado));
  console.log(resultado);
}

function getTrim() {
  const nome = " Maria de Souza ";
  const resultado = nome.trim(); // remove os espaços antes de depois do texto.
  console.log("Tipo:", Object.prototype.toString.call(resultado));
  console.log(resultado);
}

function getValueOf() {
  const nome = new String("Maria");
  console.log(typeof nome);
  console.log(typeof nome.valueOf());
  console.log(nome.repeat(3));
}

function getToString() {
  const valor = new Number(3.456);
  console.log(valor, " - Type:", typeof valor);
  console.log(valor.toString(), " - Type:", typeof valor.toString());

  const novoValor = valor.toFixed(2);
  console.log(novoValor, " - Type:", typeof novoValor);

  const valorFlutuante = Number.parseFloat(valor.toFixed(2));
  console.log(valorFlutuante, " - Type:", typeof valorFlutuante);
}
// getStartWith();

function getConverterNumeroInteiro() {
  const valor = "3.456";
  const valorInteiro = Number.parseFloat(valor);
  console.log(valorInteiro, " - Type:", typeof valorInteiro);
}
// getConverterNumeroInteiro();

function getVerificaNumeroInteiro() {
  const valor1 = 3.456;
  const valor2 = "78";
  const valor3 = false;
  const valor4 = 43;
  // console.log(valor1, Number.isInteger(valor));
  // console.log(valor2, Number.isInteger(valor2));
  // console.log(valor3, Number.isInteger(valor3));
  // console.log(valor4, Number.isInteger(valor4));
  Number.isInteger(valor2) ? console.log(true) : console.log(false);
}
// getVerificaNumeroInteiro();

function getIsNaN() {
  const a = "abc";
  const b = "12";
  const c = 23;
  const d = NaN;

  // console.log(Number.isNaN(a));
  // console.log(Number.isNaN(b));
  // console.log(Number.isNaN(c));
  // console.log(Number.isNaN(d));

  const numero = 2345.34567893456;
  // console.log(
  //   numero + " - ",
  //   numero.toPrecision(6),
  //   " - Type: " + typeof numero.toPrecision(6)
  // );

  //retorna o valor primitivo do dado.
  const numeroX = new Number(32334343);
  console.log(numeroX, typeof numeroX);
  console.log(numeroX.toString(), typeof numeroX.toString());
  console.log(numeroX.valueOf(), typeof numeroX.valueOf());
}
getIsNaN();
