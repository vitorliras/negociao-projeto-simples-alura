export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor)
    }


    update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<scrpt><\/scrpt>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;



}