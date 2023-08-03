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

  console.log(Object.preventExtensions(objMoto));
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

function objectSealAndIsSealed() {
  // como selar um objeto - um objeto selado não é extensivel (não pode add prop)
  // e também as propriedades não são configuraveis (não é possivel deletar prop)
  const objLivro = { titulo: "Javascript", paginas: 1234 };

  console.log("Object.isExtensible(objLivro)?", Object.isExtensible(objLivro));
  console.log("Object.isSealed(objLivro)?", Object.isSealed(objLivro));

  console.log("===========================================");

  console.log(
    "Object.getOwnPropertyDescriptors(objLivro):",
    Object.getOwnPropertyDescriptors(objLivro)
  );

  console.log(
    "Selando o objeto (Object.seal(objLivro)):",
    Object.seal(objLivro)
  );

  console.log("Object.isExtensible(objLivro)?", Object.isExtensible(objLivro));
  console.log("Object.isSealed(objLivro)?", Object.isSealed(objLivro));

  console.log("===========================================");

  objLivro.ebook = true;

  console.log(
    "Add - objLivro.hasOwnProperty('ebook')?",
    objLivro.hasOwnProperty("ebook")
  );
  console.log("delete objLivro.titulo: ", delete objLivro.titulo);
  console.log(
    "objLivro.hasOwnProperty('titulo')",
    objLivro.hasOwnProperty("titulo")
  );

  console.log("===========================================");

  objLivro.paginas = 1498;
  console.log(
    "Object.getOwnPropertyDescriptors(objLivro):",
    Object.getOwnPropertyDescriptors(objLivro)
  );

  console.log("===========================================");

  console.log(
    Object.defineProperty(objLivro, "paginas", { configurable: true })
  );
}
// objectSealAndIsSealed();

function objectFreezeAndIsFrozen() {
  // congelando objecto, irá ficar: não extensivel, não configuravel e não será possivel gravar dados.
  // não pode ser adicionar propriedades, não deletar  propriedades e nem setar dados na propriedade.
  // o objeto será apenas leitura.
  // depois de congelado não pode reverter o processo
  // o congelamento afeta apenas o objeto em questão e não a cadeia de protótipos
  const objArtigo = { autor: "Luiz", titulo: "javascript" };

  console.log("Object.isFrozen(objArtigo)?", Object.isFrozen(objArtigo));
  console.log(
    "Object.isExtensible(objArtigo)?",
    Object.isExtensible(objArtigo)
  );
  console.log("Object.isSealed(objArtigo)?", Object.isSealed(objArtigo));

  console.log("===========================================");

  console.log(
    "Congelando o objeto (Object.freeze(objArtigo)):",
    Object.freeze(objArtigo)
  );

  console.log("Object.isFrozen(objArtigo)?", Object.isFrozen(objArtigo));
  console.log(
    "Object.isExtensible(objArtigo)?",
    Object.isExtensible(objArtigo)
  );
  console.log("Object.isSealed(objArtigo)?", Object.isSealed(objArtigo));

  console.log("===========================================");

  console.log(
    "Object.getOwnPropertyDescriptors(objArtigo)",
    Object.getOwnPropertyDescriptors(objArtigo)
  );

  console.log("===========================================");

  //add
  objArtigo.paginas = 10;
  objArtigo.titulo = "PHP";
  console.log("delete objArtigo.titulo:", delete objArtigo.titulo);
  console.log(
    "Object.getOwnPropertyDescriptors(objArtigo):",
    Object.getOwnPropertyDescriptors(objArtigo)
  );

  const arr = [];
  for (var key in objArtigo) {
    console.log(objArtigo[key]);
    arr.push(objArtigo[key]);
  }
  console.log(arr);
}
// objectFreezeAndIsFrozen();

function getArray() {
  const arr = [];
  arr.push(10, 20); //adiciona elementos no final do array
  // console.log(arr);

  arr.unshift(1, 2, 3, 4, 5); //adiciona elementos no inicio do array
  // console.log(arr);

  console.log("===========================================");

  arrB = ["a", "b", "c", "d", "e", "f", "g", "h"];
  console.log("ArrB:", arrB);
  console.log("ArrB.length:", arrB.length);

  console.log("=================== delete arrB[3] ========================");

  console.log("delete arrB[3]:", delete arrB[3]); // deleta o elemento, mas não deleta a posição, deixando a posição vazia.
  console.log("ArrB:", arrB);
  console.log("ArrB.length:", arrB.length);

  console.log("================== arrB.pop() ==========================");

  console.log("arrB.pop():", arrB.pop()); // deleta o ultimo elemento e posição do array.
  console.log("ArrB:", arrB);
  console.log("ArrB.length:", arrB.length);

  console.log("================== arrB.shift() =========================");

  console.log("arrB.shift():", arrB.shift()); // deleta o primeiro elemento e posição do array.
  console.log("ArrB:", arrB);
  console.log("ArrB.length:", arrB.length);

  console.log("=================== arrB.splice(2,1) ========================");

  console.log("arrB.splice(2,1):", arrB.splice(2, 1)); // deleta um elemento de uma posição especiafica do array.
  console.log("ArrB:", arrB);
  console.log("ArrB.length:", arrB.length);

  console.log("=================== arrC ========================");

  //modificando um array via propriedade length e bloqueando a mesma para gravação.
  //a propriedade length pode ser alterada seu valor.
  const arrC = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("arrC:", arrC);
  console.log("arrC.length:", arrC.length);

  console.log("=================== arrD ========================");

  //diferença entre proprieadades e elementos de um array.
  const arrD = [];
  arrD[0] = 0;
  arrD.push(1);
  console.log("arrD:", arrD);
  console.log("arrD.length:", arrD.length);

  console.log("===========================================");

  arrD["2"] = 2;
  console.log("arrD:", arrD);
  console.log("arrD.length:", arrD.length);

  console.log("===========================================");

  arrD[-3] = -3;
  arrD["quatro"] = 4;
  arrD.seis = 6;
  console.log("arrD:", arrD);
  console.log("arrD.length:", arrD.length);

  for (var index in arrD) {
    console.log(index, " = ", arrD[index]);
  }

  console.log("===========================================");

  Object.defineProperty(arrD, "-3", { enumerable: false });
  Object.defineProperty(arrD, "quatro", { enumerable: false });
  Object.defineProperty(arrD, "seis", { enumerable: false });

  for (var index in arrD) {
    console.log(index, " = ", arrD[index]);
  }

  console.log(
    "Object.getOwnPropertyDescriptors(arrD):",
    Object.getOwnPropertyDescriptors(arrD)
  );

  console.log("=================== myArray ========================");

  const myArray = [
    1,
    2,
    3,
    "a",
    "b",
    "c",
    [1, "a"],
    null,
    { nome: "Maria" },
    true,
    2.2,
    undefined,
  ];

  myArray.teste = "teste";
  myArray[-1] = "teste 2";

  // for tradicional
  for (var i = 0; i < myArray.length; i++) {
    console.log("Index:", i, "Valor:", myArray[i]);
    if (i === myArray.length - 1) {
      console.log("myArray.length:", myArray.length);
    }
  }

  console.log(
    "myArray[i] === null || myArray[i] === undefined ==========================================="
  );

  // não interar nos indices com valores (null e undefined)
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === null || myArray[i] === undefined) continue;

    console.log("Index:", i, "Valor:", myArray[i]);

    if (i === myArray.length - 1) {
      console.log("myArray.length:", myArray.length);
    }
  }

  console.log("!myArray[i] ===========================================");

  // não interar nos indices com valores (null e undefined)
  //valores que retornam false: (null, undefined, false, 0 e NaN)
  for (var i = 0; i < myArray.length; i++) {
    if (!myArray[i]) continue;

    console.log("Index:", i, "Valor:", myArray[i]);
    if (i === myArray.length - 1) {
      console.log("myArray.length:", myArray.length);
    }
  }

  console.log("for in ===========================================");

  for (const key in myArray) {
    //o for in também intera em propriedades herdadas.
    if (!myArray.hasOwnProperty(key)) continue;
    console.log("Key:", key, "- Valor:", myArray[key]);
  }

  console.log(
    "for in - !isNaN(key) ==========================================="
  );

  for (const key in myArray) {
    //o for in também intera em propriedades herdadas.
    if (!myArray.hasOwnProperty(key) || isNaN(key) || key < 0) continue;
    console.log("Key:", key, "- Valor:", myArray[key]);
  }

  console.log("=================== forEach ========================");
  //forEach metodo adicionado no ECMAScript 5 no array.prototype.
  const vendaItens = [
    { codico: 1, preco: 2.2, qtde: 2 },
    { codico: 2, preco: 7.99, qtde: 5 },
    { codico: 3, preco: 12, qtde: 3 },
  ];
  let totalVendas = 0;

  vendaItens.forEach((item, index, array) => {
    let subTotalVendas = item.qtde * item.preco;
    totalVendas += subTotalVendas;
    item.subTotalVendas = subTotalVendas;
  });

  console.log("totalVendas:", totalVendas);
  console.log("subTotalVendas:", vendaItens);

  console.log(
    "=================== array multidimencional ========================"
  );

  const produtos = [
    [{ condigo: 28, nome: "Camisa 1" }, ["Amarelo", "Azul", "Vermelho"]],
    [{ condigo: 29, nome: "Camisa 2" }, ["Branco", "Preto", "Vermelho"]],
  ];

  console.log(
    "Nome:",
    produtos[0][0].nome,
    "- Cores:",
    produtos[0][1].toString()
  );
  console.log(
    "Nome:",
    produtos[0][0].nome,
    "- Cores:",
    produtos[0][1].join(", ")
  );

  console.log(
    "=== converter em string - toString(), join() e toLocaleString('pt-BR') ==="
  );

  const arrAll = [1, "A", true, new Date()];
  console.log("arrAll:", arrAll);
  console.log("arrAll.toString():", arrAll.toString());
  console.log("arrAll.join():", arrAll.join());
  console.log("arrAll.toLocaleString():", arrAll.toLocaleString("pt-BR"));

  console.log("=================== Formatando Data ========================");

  var dataString = new Date();
  console.log(dataString);
  const ano = dataString.getFullYear();
  const mes = dataString.getMonth() + 1;
  const dia = dataString.getDate();
  const formattedDate =
    dia.toString().padStart(2, "0") +
    "/" +
    mes.toString().padStart(2, "0") +
    "/" +
    ano;
  console.log(formattedDate);

  console.log("=================== ARRAY.SORT ========================");
  // Array.sort() - método ordena os elementos de um array convertendo para string e
  // ordenando conforme a tabela unicode.
  const letras = ["q", "b", "h", "a", "i", "B", "c", "z", "e"];
  console.log(letras);
  console.log(
    letras.sort((x, y) => {
      const letraX = x.toLowerCase();
      const letraY = y.toLowerCase();
      if (letraX < letraY) return -1;
      if (letraX > letraY) return 1;
      return 0;
    })
  );

  console.log("=================== ARRAY.SLICE ========================");
  // Array.slice() - método que retorna parte de um array com base em um indice inicial e final.
  // ele não altera o array original, retornando um novo array.
  const arrProdutos = [
    "Produto 1",
    "Produto 2",
    "Produto 3",
    "Produto 4",
    "Produto 5",
    "Produto 6",
    "Produto 7",
    "Produto 8",
  ];
  console.log("arrProdutos:", arrProdutos);
  console.log("arrProdutos:", arrProdutos.slice(0, 3 + 1));
  console.log("arrProdutos:", arrProdutos.slice(3, arrProdutos.length));
  console.log("arrProdutos:", arrProdutos.slice(3));

  console.log("=================== ARRAY.SPLICE ========================");
  // Array.splice() - método permite adicionar novos elementos em um array e ao mesmo tempo remove elementos antigos.
  // :parametros (três).
  // 1 - indice para indicar a inserção de novos elementos
  // 2 - quantidade de elementos a serem removidos
  // 3 - novos elementos
  // Obs.: o splice alterar o array original e retorna apenas os elementos removidos

  let numSplice = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log("numSplice:", numSplice);
  console.log("numSplice.splice(2):", numSplice.splice(2)); //remove [ 3, 4, 5, 6, 7, 8 ] e retorna [ 1, 2 ]
  console.log("numSplice:", numSplice);

  console.log("===========================================");

  numSplice = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log("numSplice:", numSplice);
  console.log("numSplice.splice(2):", numSplice.splice(2, 5)); //remove [ 3, 4, 5, 6, 7 ] e retorna [ 1, 2, 8 ]
  console.log("numSplice:", numSplice);

  console.log("===========================================");

  console.log("numSplice:", numSplice.splice(0, 0, "a", "b", "c"));
  console.log("numSplice:", numSplice);

  console.log("numSplice:", numSplice.splice(4, 0, "d", "e", "f"));
  console.log("numSplice:", numSplice);

  console.log(
    "numSplice:",
    numSplice.splice(numSplice.length, 0, 3, 4, 5, 6, 7)
  );
  console.log("numSplice:", numSplice);

  console.log("=================== ARRAY.MAP ========================");
  // ECMAScript 5
  // Array.map() - método intera por todos os elementos de um array com valores atribuidos e que não sejam undefined.
  // recebe uma faução callback por parametro no qual é chamada para item/elemento do array.
  // a fução pode receber até 3 parametros.
  // 1 - valor - elemento array.
  // 2 - índice do elemento array
  // 3 - o proprio array.
  // em cada interação a função callback irá retornar um valor que irá compor um novo array retornado pelo map.
  // não modifica o array original.
  // para que o map intere no array, ele faz uma espécie de cópia temporária, caso seja adcionado ou
  // removido item do array depois do laço do map iniciar tais elementos não serão visível pelo map.

  const numerosMap = [2, 4, 8, 10, 12];
  console.log("numerosMap:", numerosMap);

  const novoArrayMap = numerosMap.map((item) => item * 2);
  console.log("novoArrayMap:", novoArrayMap);

  console.log("=================== ARRAY.FILTER ========================");
  // ECMAScript 5
  // Array.filter() - método intera por todos os elementos de um array com valores atribuidos e que não sejam undefined.
  // retorna um novo array com base em um retorno booleano (true) de cada interação.
  // recebe uma fanção callback por parametro no qual é chamada para cada elemento do array.
  // a função pode receber até 3 parametros.
  // 1 - valor - elemento array.
  // 2 - inidice do elemento
  // 3 - o proprio array.

  const numerosFilter = [2, 9, 5, 4, 1, 0, 7, 6, 15];

  const numerosFilterNovo = numerosFilter.filter((item) => item > 5);
  console.log("numerosFilterNovo:", numerosFilterNovo);
  console.log("numerosFilter:", numerosFilter);

  console.log("===========================================");
  const nomesFilter = [
    "Maria",
    "João",
    "Pedro",
    "Flávio",
    "Fernanda",
    "Carla",
    "Marta",
  ];
  console.log("nomesFilter:", nomesFilter);

  const regExp = new RegExp("A", "ig");

  const nomesPesquisa = nomesFilter.filter((nome) => regExp.test(nome));
  console.log("nomesPesquisa:", nomesPesquisa);
  console.log("nomesFilter:", nomesFilter);

  console.log("=================== ARRAY.EVERY ========================");
  // ECMAScript 5
  // Array.every() - método testa se todos os elementos do array passam pelo teste de implementação pela função fornecida.
  // retorna true ou false, sendo que irá retornar true somente se todos os testes retornarem true.
  // recebe uma fanção callback por parametro no qual é chamada para cada elemento do array.
  // a função pode receber até 3 parametros.
  // 1 - valor - elemento array.
  // 2 - inidice do elemento
  // 3 - o proprio array.

  const numerosEvery = [2, 9, 4, 3, 1, 0, 7, 6, 15, 20];
  console.log("numerosEvery:", numerosEvery);

  console.log(
    "numerosEvery.every((item):",
    numerosEvery.every((item) => item < 16)
  );

  console.log("=================== ARRAY.SOME ========================");
  // ECMAScript 5
  // Array.some() - método testa alguns dos elementos do array passam pelo teste de implementação pela função fornecida.
  // retorna true ou false, sendo que irá retornar true somente se pelo menos um elemento do array retornar true.
  // recebe uma fanção callback por parametro no qual é chamada para cada elemento do array.
  // a função pode receber até 3 parametros.
  // 1 - valor - elemento array.
  // 2 - inidice do elemento
  // 3 - o proprio array.

  const numerosSome = [2, 9, 4, 3, 1, 0, 7, 6, 15, 20];
  console.log("numerosEvery:", numerosSome);

  console.log(
    "numerosSome.some((item):",
    numerosSome.some((item) => item >= 21)
  );

  console.log(
    "=================== ARRAY.REDUCE E REDUCERIGHT ========================"
  );
  // ECMAScript 5
  // Array.reduce()/reduceRight - método intera por todos os elementos de um array, tendo como objetivo
  // principal tudo a um único valor no qual será o retorno da função.
  // recebe uma fanção callback e um valor inicial para o seu acumulador.
  // a função callback recebe 4 parametros na qual  é chamada para cada elemento do array.
  // 1 - acumulador, no qual irá reter o valor oriundo do retorno de cada interação.
  // 2 - valor do elemento
  // 3 - inidice do elemento no array
  // 4 - o proprio array.

  // OBS 1.: O valor inicial do acumulador na interação pode ser um vamor especifico que deve ser passado
  // como o segundo parametro junto a função callback para o método reduce.
  // Caso não seja informado, ele assumirá como valor inicial o valor presente no primeiro elemento da iteração.

  // OBS 2.: O reduceRight irá fazer o mesmo que o reduce, porém irá iniciar a interação na ordem inversa do array,
  // começando do último elemento para o primeiro.

  const numerosReduce = [1, 2, 3, 4, 5];
  console.log("numerosReduce:", numerosReduce);

  const retornoReduce = numerosReduce.reduce(
    (acumulador, elementoArry, indice, array) => {
      const arrNew = [];
      arrNew.push(acumulador + elementoArry);
      return arrNew;
    },
    0
  );

  console.log("retornoReduce:", retornoReduce);
}
getArray();
