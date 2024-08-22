// Classe Livros
class Livros {
    constructor(nome, quantidade, preco, autor, numeroEdicao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.autor = autor;
        this.numeroEdicao = numeroEdicao;
    }

    emprestar() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log(`Livro "${this.nome}" emprestado. Quantidade restante: ${this.quantidade}.`);
        } else {
            console.log(`Não há mais exemplares de "${this.nome}" disponíveis para emprestar.`);
        }
    }

    devolver() {
        this.quantidade++;
        console.log(`Livro "${this.nome}" devolvido. Quantidade disponível: ${this.quantidade}.`);
    }
}

// Exemplo de uso
const livro1 = new Livros("O Hobbit", 5, 45.00, "J.R.R. Tolkien", 1);

livro1.emprestar(); // Empresta um exemplar do livro
livro1.devolver(); // Devolve um exemplar do livro
