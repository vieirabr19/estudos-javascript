// Aninhamento de funções e encadeamento de escopo

const produto = "Produto A";

function orcamento() {
  const formaPagamento = "Dinheiro";
  const qtde = 3;
  const preco = 20;
  const total = qtde * preco;

  pedido();

  function pedido() {
    const numPedido = 12345;
    const entrega = true;
    const taxaEntrega = 2;
    const totalGeral = entrega ? total + taxaEntrega : total;

    notaFiscal();

    function notaFiscal() {
      const numNfe = 45678;

      console.log(`=> Forma pagamento: ${formaPagamento}`);
      console.log(`=> Nota: ${numNfe}`);
      console.log(`=> Produto: ${produto}`);
      console.log(`=> Qtde: ${qtde}`);
      console.log(`=> Preço R$: ${preco}`);
      console.log(`=> Total R$: ${total}`);
      entrega ? console.log(`=> Taxa entrega R$: ${taxaEntrega}`) : "";
      console.log(`=> Total + taxa entega R$: ${totalGeral}`);
    }
  }
}

orcamento();
