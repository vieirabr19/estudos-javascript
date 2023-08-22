/*Callback é um recurso no qual uma função é passada via argumento para outra função no
ato da invocação, desta forma a função que recebe a função callback como argumento 
pode chamar o callback durante sua execução em um processo síncrono ou assíncrono*/
/*-Processo síncrona significa que cada instrução será executada mediante a finalização da 
instrução anterior.*/
/*Processo assíncrono significa que durante a execução da aplicação pode haver instruções 
que serão executadas mediante resposta de algum processo, mas não interromperá o fluxo 
principal da aplicação não sendo comprometido.*/

//exemplo 1
function mostrarCliente(nome) {
  console.log("Cliente", nome);
}

function realizarVenda(callback) {
  callback("Pedro");
  console.log("1 - Item 1");
  console.log("2 - Item 2");
  console.log("3 - Item 3");
  console.log("Total X");
}

// realizarVenda(mostrarCliente);

//exemplo 2 - sincrono
function contador() {
  const num = 10000;
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

function iniciar(callback) {
  console.log("Inicio");
  callback();
  console.log("Fim");
}

// iniciar(contador);

//exemplo 3 - assicrono
function propaganda(tempo) {
  setTimeout(function () {
    console.log("Propaganda ====>>>>>");
  }, tempo);
}

function rodar(callback) {
  console.log("Inicio");
  callback(6000);
  console.log("App rodando");
}

rodar(propaganda);
