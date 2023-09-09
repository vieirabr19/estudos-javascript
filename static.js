/**
 * A palavra-chave static, definie um método estático de uma classe.
 * Métodos estático são chamados sem a instaciação da sua classe e não podem ser chamados quando a classe é instaciada.
 * Metodos estático são geralmente usados para criar funções de utilidades por uma aplicação.
 */

class API {
  constructor(nome) {
    this.nome = nome;
    this.status = "offline";
  }

  conectar() {
    this.status = "online";
    console.log("API conectada...");
  }

  static getStatus(api) {
    console.log("Status:", api.status);
  }
}

objAPI = new API("vendas");
objAPI.conectar();
API.getStatus(objAPI);
