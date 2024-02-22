export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): Array<Negociacao> {
    //     return [...this.negociacoes]; //pega cada item da lista para colocar na nova lista
    // }
    lista() {
        return this.negociacoes;
    }
    lista2() {
        return this.negociacoes;
    }
}
