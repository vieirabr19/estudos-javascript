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
// getStartWith();

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
  Number.isInteger(valor4) ? console.log(true) : console.log(false);
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
// getIsNaN();

// por construtor
const objPessoa2 = new Object();
objPessoa2.nome = "Maria";
// console.log(objPessoa2.nome);

//Object.create que irá criar um objeto com prototipo
const objPessoa3 = Object.create(Object.prototype);
objPessoa3.nome = "João";
// console.log(objPessoa3.nome);

//funções construtoras
const obj1 = new Object();
const obj2 = new Array(1, 2, 3);
const obj3 = new Date(); //Data atual
const obj4 = new Error("Ocorreu um erro");
const obj5 = new RegExp(/teste/);
const obj6 = new Function(
  "paramentroNome",
  "return' olá ' + paramentroNome + '!'"
);
// console.log(obj6("Francisca"));

//Criar objeto literal

function pessoaFn() {
  const objPessoa = {
    nome: "Maria",
    cpf: 123456778,
    dataNasc: new Date(1981, 3, 14),
    ativo: true,
    "teste prop": "teste",
    contatos: [1122334, 23456655, 565444324],
    endereco: {
      rua: "Rua A",
      numero: 1234,
      cep: 13433322,
    },
    saudacao: function () {
      return `Olá me chamo ${this.nome}`;
    },
  };

  for (let value of objPessoa.contatos) {
    console.log(value);
  }
  for (let key in objPessoa.endereco) {
    console.log(`${key}: ${objPessoa.endereco[key]}`);
  }

  console.log(objPessoa.saudacao());
}
// pessoaFn();

function verificaSeExistePropriedade() {
  //verifica se uma propriedade ou método existe no objeto em questão ou em sua cadeia de protótipos
  const pedido = new Object();
  pedido.total = 233.45;
  // console.log("Cliente in pedido:", "cliente" in pedido);
  // console.log("Cliente pedido:", pedido.cliente);
  // console.log("Cliente pedido:", pedido.cliente.none);
  // console.log("Total in pedido:", "total" in pedido);

  //o 'in' verifica se a propriedade ou método existe no objeto e na cadeia de prototipo
  // console.log("toString in pedido", "toString" in pedido);
  // console.log(
  //   "total in pedido com hasOwnProperty",
  //   pedido.hasOwnProperty("total")
  // );
  // console.log(
  //   "toString in pedido com hasOwnProperty",
  //   pedido.hasOwnProperty("toString")
  // );

  pedido.totalItem = 23;
  console.log(pedido);
  const itemDeletado = delete pedido.totalItem;
  console.log(itemDeletado); //retorna true
  console.log(pedido);
}
// verificaSeExistePropriedade();

function recebeNomeValoresComObjectKeys() {
  const produto = { nome: "teste", preco: 12, ativo: true };
  const chaves = Object.keys(produto);

  console.log("Object.keys(produto):", chaves);
  console.log("Tipo com typeof:", typeof chaves);
  console.log(
    "Object.prototype.toString.call(chaves):",
    Object.prototype.toString.call(chaves)
  );
  console.log("Verifica se é um Array com isArray:", Array.isArray(chaves));

  console.log("=================================");

  const valoresProps = Object.values(produto);
  console.log("Object.values(produto):", valoresProps);

  console.log("=================================");

  //recuperar as propriedades e valores do objeto
  const chavesValoresObjeto = Object.entries(produto);
  console.log("Object.entries(produto):", chavesValoresObjeto);
  for (let [nome, valor] of chavesValoresObjeto) {
    console.log(`${nome}: ${valor}`);
  }
}
// recebeNomeValoresComObjectKeys();

function propriedadeGetSetGetOwnPropertyDescriptor() {
  //criando propriedades de objeto de acesso e dado - atributos de propriedades - métodos acessores get e set.
  const folhaDePagamento = {
    _total: 0, //atributo privado
    preco: 0,
    set total(val) {
      this._total = val;
    },
    get total() {
      return this._total;
    },
  };

  folhaDePagamento.total = 33278.67;
  // console.log("Total folha pagamento: R$:", folhaDePagamento.total);
  console.log(
    "Atributos das propriedades do objeto - getOwnPropertyDescriptors:",
    Object.getOwnPropertyDescriptors(folhaDePagamento)
  );
  const getNamesProps = Object.getOwnPropertyNames(folhaDePagamento);
  console.log(
    "Atributos das propriedades do objeto - getOwnPropertyNames:",
    getNamesProps
  );
  for (let value of getNamesProps) {
    console.log(value);
  }
}
// propriedadeGetSetGetOwnPropertyDescriptor();

function definePropertyAndPropertyIsEnumerable() {
  //verificar se uma propriedade é interavel/enumeravel.
  let obj = { a: "valorA", b: "valorB", c: "valorC", d: "valorD" };
  // console.log("a in Obj:", "a" in obj);
  // console.log("obj.propertyIsEnumerable('a'):", obj.propertyIsEnumerable("a"));
  // console.log("obj.propertyIsEnumerable('toString'):", obj.propertyIsEnumerable("toString"));
  // console.log("obj.propertyIsEnumerable('length'):", obj.propertyIsEnumerable("length"));

  console.log("==========================");

  console.log(obj);

  for (let [k, val] of Object.entries(obj)) {
    console.log(k, "-", val);
  }

  // for (let k in Object.keys(obj)) {
  //   console.log("Keys In:", k);
  // }
  // for (let k of Object.keys(obj)) {
  //   console.log("Keys Of:", k);
  // }

  // for (let v in Object.values(obj)) {
  //   console.log("Values In:", v);
  // }
  // for (let v of Object.values(obj)) {
  //   console.log("Values Of:", v);
  // }

  console.log("==========================");

  Object.defineProperty(obj, "a", {
    enumerable: false,
    configurable: false,
  });

  for (let [k, val] of Object.entries(obj)) {
    console.log(k, "-", val);
  }

  console.log("Deletar propriedade:", delete obj.a);

  //tornar uma propriedade em não gravavel.
  obj.b = 10;
  Object.defineProperty(obj, "b", {
    writable: false,
  });

  obj.b = 20;
  console.log("obj.b:", obj.b);

  Object.defineProperty(obj, "c", {
    value: "valorC Aterado",
  });

  console.log("obj.c:", obj.c);
  console.log("obj:", obj);
}
// definePropertyAndPropertyIsEnumerable();

function definePropertiesAndAttributes() {
  const aluno = {};

  Object.defineProperties(aluno, {
    nome: {
      value: "Maria",
      enumerable: true,
      configurable: true,
      writable: true,
    },
    turma: {
      value: "A",
      enumerable: true,
      configurable: false,
      writable: false,
    },
  });

  // console.log(aluno);
  // aluno.turma = "B";
  // delete aluno.turma;
  // console.log(aluno);

  const aluno2 = {};
  Object.defineProperties(aluno2, {
    _nome: {
      value: "Luiz",
      enumerable: true,
      configurable: true,
      writable: true,
    },
    nome: {
      get: function () {
        return this._nome;
      },
      set: function (value) {
        this._nome = value;
      },
    },
  });

  console.log(aluno2);
  aluno2.nome = "João";
  console.log(aluno2);
}
// definePropertiesAndAttributes();

function getOwnPropertyDescriptorAndGetOwnPropertyDescriptors() {
  //recuperar as informações de atributos de propriedades
  const objCarro = { marca: "Fiat", cor: "preta" };

  console.log(
    "0 => Object.getOwnPropertyDescriptors(objCarro):",
    Object.getOwnPropertyDescriptors(objCarro)
  );
  console.log(
    "1 => Object.getOwnPropertyDescriptor(objCarro, 'marca'):",
    Object.getOwnPropertyDescriptor(objCarro, "marca")
  );

  console.log("===========================================");

  Object.defineProperty(objCarro, "cor", {
    enumerable: false,
    configurable: false,
    writable: false,
  });

  console.log(
    "2 => Object.getOwnPropertyDescriptors(objCarro):",
    Object.getOwnPropertyDescriptors(objCarro)
  );
  console.log(
    "3 => Object.getOwnPropertyDescriptor(objCarro, 'cor'):",
    Object.getOwnPropertyDescriptor(objCarro, "cor")
  );
  console.log(
    "3 => Object.getOwnPropertyDescriptor(objCarro, 'toString'):",
    Object.getOwnPropertyDescriptor(objCarro, "toString")
  );
  console.log(
    "3 => Object.getOwnPropertyDescriptor(objCarro, 'length'):",
    Object.getOwnPropertyDescriptor(objCarro, "length")
  );
  console.log(
    "3 => Object.getOwnPropertyDescriptor(objCarro, 'placa'):",
    Object.getOwnPropertyDescriptor(objCarro, "placa")
  );

  console.log("===========================================");

  const retorno = Object.getOwnPropertyDescriptor(objCarro, "marca");
  console.log(retorno);
  console.log(Object.prototype.toString.call(retorno));
}
// getOwnPropertyDescriptorAndGetOwnPropertyDescriptors();

function objPreventExtensionsAndIsExtensible() {
  //travar objeto para ficar não extensível - não permitir adicionar propriedade ao memso.
  const objMoto = { marca: "Honda", cor: "vermelha" };
  console.log(
    "Object.getOwnPropertyDescriptor(objMoto):",
    Object.getOwnPropertyDescriptors(objMoto)
  );
  console.log("Object.isExtensible(objMoto)", Object.isExtensible(objMoto));

  console.log("===========================================");

  // console.log(Object.preventExtensions(objMoto));
  objMoto.placa = "AAA-1234";
  objMoto.ligar = function () {
    return "Moto ligada!";
  };
  console.log(
    "Object.getOwnPropertyDescriptor(objMoto):",
    Object.getOwnPropertyDescriptors(objMoto)
  );
  console.log("Object.isExtensible(objMoto):", Object.isExtensible(objMoto));
  objMoto.cor = "preta";
  console.log(
    "Object.getOwnPropertyDescriptor(objMoto):",
    Object.getOwnPropertyDescriptors(objMoto)
  );

  console.log("===========================================");

  Object.defineProperty(objMoto, "chassi", { value: "12345678" });
  console.log("Object.isExtensible(objMoto):", Object.isExtensible(objMoto));
  console.log(
    "Object.getOwnPropertyDescriptor(objMoto):",
    Object.getOwnPropertyDescriptors(objMoto)
  );

  console.log("===========================================");

  console.log(objMoto);
}
// objPreventExtensionsAndIsExtensible();

function objectSealAndisSealed() {
  console.log("===========================================");
}
objectSealAndisSealed();
