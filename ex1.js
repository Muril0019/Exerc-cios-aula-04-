class Carro {
    constructor(marca, modelo, ano) {
        // Inicializa os atributos do carro
        this.marca = marca || null;
        this.modelo = modelo || null;
        this.ano = ano || null;
        this.motorLigado = false;  // Inicialmente, o motor está desligado
    }

    ligarMotor() {
        this.motorLigado = true;
        console.log("O motor está agora ligado.");
    }

    desligarMotor() {
        this.motorLigado = false;
        console.log("O motor está agora desligado.");
    }

    statusMotor() {
        return this.motorLigado ? "O motor está ligado." : "O motor está desligado.";
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Motor ligado: ${this.motorLigado ? "Sim" : "Não"}`);
    }
}

// Exemplo de uso da classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 2021);
console.log(meuCarro.statusMotor()); // Verifica o status do motor inicialmente

meuCarro.ligarMotor(); // Liga o motor
console.log(meuCarro.statusMotor()); // Verifica o status do motor após ligar

meuCarro.desligarMotor(); // Desliga o motor
console.log(meuCarro.statusMotor()); // Verifica o status do motor após desligar

meuCarro.exibirInfo(); // Exibe as informações do carro
