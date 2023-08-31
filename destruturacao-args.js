/**
 * Destructuração como argumentos.
 */

const objProduto = { descricao: "Livro JavaScript", preco: 79.52, pags: 1100 };
const objCliente = { nome: "Luiz" };

function venda({ nome }, { descricao, preco, pags: paginas }, qtde = 1) {
  console.log(`Cliente: ${nome}`);
  console.log(`Produto: ${descricao} - Paginas: ${paginas}`);
  console.log(`Qtde: ${qtde} - Preço: ${preco}`);
  console.log(`Total: ${preco * qtde}`);
}

venda(objCliente, objProduto, 2);
