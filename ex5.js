// Classe mãe Maquinas
class Maquinas {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
        this.nome = nome;
        this.quantidadeEixos = quantidadeEixos;
        this.rotacoesPorMinuto = rotacoesPorMinuto;
        this.consumoEnergia = consumoEnergia;
        this.ligada = false; // Estado inicial da máquina
    }

    ligar() {
        this.ligada = true;
        console.log(`${this.nome} está agora ligada.`);
    }

    desligar() {
        this.ligada = false;
        console.log(`${this.nome} está agora desligada.`);
    }

    ajustarVelocidade(novaVelocidade) {
        if (this.ligada) {
            this.rotacoesPorMinuto = novaVelocidade;
            console.log(`A velocidade de rotação de ${this.nome} foi ajustada para ${novaVelocidade} RPM.`);
        } else {
            console.log(`${this.nome} deve estar ligada para ajustar a velocidade.`);
        }
    }
}

// Classe filha Furadeira
class Furadeira extends Maquinas {
    constructor(nome, rotacoesPorMinuto, consumoEnergia) {
        super(nome, 2, rotacoesPorMinuto, consumoEnergia); // Exemplo: 2 eixos para furadeira
    }

    // Métodos específicos podem ser adicionados aqui
}

// Exemplo de uso
const minhaFuradeira = new Furadeira("Furadeira Pro", 1500, 800);

minhaFuradeira.ligar();
minhaFuradeira.ajustarVelocidade(2000);
minhaFuradeira.desligar();
