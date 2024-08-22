class Pessoa {
    constructor(nome, idade, profissao, salario) {
        // Inicializa os atributos da classe
        this.nome = nome || null;
        this.idade = idade || null;
        this.profissao = profissao || null;
        this.salario = salario || null;
    }

    // Método que exibe o nome da empresa e o tempo de trabalho
    exibirTrabalho(nomeEmpresa, tempoTrabalho) {
        console.log(`Nome da empresa: ${nomeEmpresa}`);
        console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
    }
}

// Exemplo de uso da classe Pessoa
const pessoa1 = new Pessoa("João Silva", 30, "Desenvolvedor", 5000);
pessoa1.exibirTrabalho("Tech Solutions", 5);
