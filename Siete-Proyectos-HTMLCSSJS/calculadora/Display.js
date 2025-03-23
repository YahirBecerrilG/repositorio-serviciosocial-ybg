class Display{
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipodeOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: "x",
            restar: '-',
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipodeOperacion = undefined;
        this.imprimirValores();

    }

    computar(tipo){
        this.tipodeOperacion !== 'igual' && this.calcular();
        this.tipodeOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }

    agregarNumero (numero){
        if(numero === '0' && this.valorActual.includes('0')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();

    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipodeOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorctual = parseFloat(this.valorActual);

        if( isNaN (valorctual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipodeOperacion](valorAnterior, valorctual);


    }
}