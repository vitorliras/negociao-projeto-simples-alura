import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // lista(): Array<Negociacao> {
    //     return [...this.negociacoes]; //pega cada item da lista para colocar na nova lista
    // }

    lista(): readonly Negociacao[] {
        return this.negociacoes; 
    }

    lista2(): ReadonlyArray<Negociacao> {
        return this.negociacoes; 
    }
}

