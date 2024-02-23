export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    static criaDe(dataTxt, quantidadeTxt, valorTxt) {
        const exp = /-/g;
        const date = new Date(dataTxt.replace(exp, ','));
        const quantidade = parseInt(quantidadeTxt);
        const valor = parseFloat(valorTxt);
        return new Negociacao(date, quantidade, valor);
    }
}
