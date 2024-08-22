// Classe mãe Automovel
class Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas) {
        this.cor = cor || null;
        this.modelo = modelo || null;
        this.tipoDeCombustivel = tipoDeCombustivel || null;
        this.quantidadeDeRodas = quantidadeDeRodas || 0;
    }

    ligar() {
        console.log(`${this.modelo} está agora ligado.`);
    }

    desligar() {
        console.log(`${this.modelo} está agora desligado.`);
    }
}

// Classe filha Carro
class Carro extends Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas) {
        super(cor, modelo, tipoDeCombustivel, quantidadeDeRodas);
        this.vidroAberto = false; // Estado inicial do vidro
    }

    abrirVidro() {
        this.vidroAberto = true;
        console.log(`O vidro do ${this.modelo} está agora aberto.`);
    }

    descerVidro() {
        this.vidroAberto = false;
        console.log(`O vidro do ${this.modelo} está agora fechado.`);
    }
}

// Classe filha Moto
class Moto extends Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas) {
        super(cor, modelo, tipoDeCombustivel, quantidadeDeRodas);
    }

    // Moto não possui métodos adicionais relacionados a vidro
}

// Classe filha Caminhao
class Caminhao extends Automovel {
    constructor(cor, modelo, tipoDeCombustivel, quantidadeDeRodas) {
        super(cor, modelo, tipoDeCombustivel, quantidadeDeRodas);
    }

    // Caminhão não possui métodos adicionais relacionados a vidro
}

// Exemplo de uso das classes
const meuCarro = new Carro("Vermelho", "Fusca", "Gasolina", 4);
meuCarro.ligar();
meuCarro.abrirVidro();
meuCarro.descerVidro();
meuCarro.desligar();

const minhaMoto = new Moto("Preta", "CB500", "Gasolina", 2);
minhaMoto.ligar();
minhaMoto.desligar();

const meuCaminhao = new Caminhao("Azul", "Scania", "Diesel", 6);
meuCaminhao.ligar();
meuCaminhao.desligar();
