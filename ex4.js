class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }

    pix(valor) {
        if (valor <= 0) {
            console.log("O valor do Pix deve ser positivo.");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para a transação.");
            return;
        }
        this.saldo -= valor;
        console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    emprestimo(valor) {
        if (valor <= 0) {
            console.log("O valor do empréstimo deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`Empréstimo de R$${valor.toFixed(2)} aprovado.`);
    }

    saque(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    extrato() {
        console.log(`Extrato - Nome: ${this.nome}`);
        console.log(`Profissão: ${this.profissao}`);
        console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
    }
}

// Função para interação com o usuário
function menu() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Criação de um cliente para exemplo
    const cliente = new Cliente("João Silva", "Desenvolvedor", 1000);

    function perguntar() {
        console.log("\nEscolha uma opção:");
        console.log("1. Pix");
        console.log("2. Empréstimo");
        console.log("3. Saque");
        console.log("4. Extrato");
        console.log("5. Sair");

        readline.question("Digite o número da opção: ", (opcao) => {
            switch (opcao) {
                case '1':
                    readline.question("Digite o valor do Pix: R$", (valor) => {
                        cliente.pix(parseFloat(valor));
                        perguntar();
                    });
                    break;
                case '2':
                    readline.question("Digite o valor do empréstimo: R$", (valor) => {
                        cliente.emprestimo(parseFloat(valor));
                        perguntar();
                    });
                    break;
                case '3':
                    readline.question("Digite o valor do saque: R$", (valor) => {
                        cliente.saque(parseFloat(valor));
                        perguntar();
                    });
                    break;
                case '4':
                    cliente.extrato();
                    perguntar();
                    break;
                case '5':
                    console.log("Saindo...");
                    readline.close();
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    perguntar();
                    break;
            }
        });
    }

    perguntar();
}

// Executa o menu
menu();
