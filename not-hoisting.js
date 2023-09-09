/**
 * Classe não sofre hoisting, é preciso declarar a classe antes de usar.
 */

// const objVeiculo = new Veiculo("Carro"); //ReferenceError: Cannot access 'Veiculo' before initialization

class Veiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }

  tipoUpper() {
    console.log(`Tipo: ${this.tipo.toUpperCase()}`);
  }
}

const objVeiculo = new Veiculo("Carro");
objVeiculo.tipoUpper();

/**
 * Expressão para criar classe - class expression
 */

console.log("=====================================");

const Carro = class extends Veiculo {
  constructor(tipo, placa) {
    super(tipo);
    this.placa = placa;
  }

  getVeiculo() {
    console.log(`Tipo: ${this.tipo} - Placa: ${this.placa}`);
  }
};

const objCarro = new Carro("Carro", "DUE-1D04");
objCarro.getVeiculo();
