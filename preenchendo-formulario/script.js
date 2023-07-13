function recebeDadosDoForm1(objForm1Elementos) {
  // console.log(Object.prototype.toString.call(objForm1Elementos));

  let objDados = new Object();
  objDados.nome = objForm1Elementos.nome.value;
  objDados.email = objForm1Elementos.email.value;
  objDados.promocao = objForm1Elementos.promocao.checked;
  objDados.contatoTel = objForm1Elementos.contatoTel.checked;
  objDados.contatoEmail = objForm1Elementos.contatoEmail.checked;
  objDados.estado = objForm1Elementos.estado.value;

  preencherForm2(objDados);
}

function preencherForm2(objDados) {
  const form2 = document.querySelector("#form2");

  form2.nome.value = objDados.nome;
  form2.email.value = objDados.email;
  form2.promocao.checked = objDados.promocao;
  form2.contatoTel.checked = objDados.contatoTel;
  form2.contatoEmail.checked = objDados.contatoEmail;
  form2.estado.value = objDados.estado;
}
