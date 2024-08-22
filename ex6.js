// Classe mãe Produtos
class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false; // Inicialmente desligado
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.nome} ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.nome} desligado.`);
    }
}

// Classe filha Fritadeira
class Fritadeira extends Produtos {
    ajustarTemperatura(temp) {
        if (this.ligado) {
            console.log(`Fritadeira ${this.nome} ajustada para ${temp}°C.`);
        } else {
            console.log("A fritadeira deve estar ligada para ajustar a temperatura.");
        }
    }
}

// Classe filha Televisao
class Televisao extends Produtos {
    ajustarTemperatura(canal) {
        if (this.ligado) {
            console.log(`TV ${this.nome} ajustada para o canal ${canal}.`);
        } else {
            console.log("A TV deve estar ligada para ajustar o canal.");
        }
    }
}

// Classe filha ArCondicionado
class ArCondicionado extends Produtos {
    ajustarTemperatura(temp) {
        if (this.ligado) {
            console.log(`Ar-condicionado ${this.nome} ajustado para ${temp}°C.`);
        } else {
            console.log("O ar-condicionado deve estar ligado para ajustar a temperatura.");
        }
    }
}

// Exemplo de uso
const fritadeira = new Fritadeira("Fritadeira Turbo", 1, 300, "Bluetooth", 1500);
const tv = new Televisao("Televisão LED", 1, 1200, "Wi-Fi", 200);
const arCondicionado = new ArCondicionado("Ar Condicionado Split", 1, 2500, "Infrared", 2000);

fritadeira.ligar();
fritadeira.ajustarTemperatura(180);

tv.ligar();
tv.ajustarTemperatura(5); // Ajustar para canal 5

arCondicionado.ligar();
arCondicionado.ajustarTemperatura(22);
