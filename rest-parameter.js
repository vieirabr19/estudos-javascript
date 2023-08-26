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

mostraNome("Luiz", "Vieira", "Brasil");

function mostraNomeResParameter(...nomes) {
  let nomeCompleto = "";
  nomes.forEach((nome) => (nomeCompleto += nome + " "));
  console.log(nomeCompleto);
}

mostraNomeResParameter("Luiz", "Vieira", "Brasil");
