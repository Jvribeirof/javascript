class Carro{
    constructor(v1, v2, v3){
        this.marca = v1;
        this.modelo = v2;
        this.ano = v3;
    }
}

const uno = new Carro('fiat','uno',2010);
const duster = new Carro('renought','duster',2020);


class Consecionaria{
    constructor(c1,c2){
        carro1 = c1;
        carro2 = c2;
    }
}

const barraka = new Consecionaria(duster,uno)

console.log(barraka)