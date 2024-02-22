export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // programação defensiva, evitar mudar a datas
        const data = new Date(this._data.getTime());
        return data;
    }
    // get quantidade(): number {
    //     return this._quantidade;
    // }
    // get valor(): number {
    //     return this._valor;
    // }
    get volume() {
        return this.valor * this.quantidade;
    }
}
