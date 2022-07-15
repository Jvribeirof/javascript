var usuario1 ={
    nome: 'joao',
    idade: 19,
};

var extra1 = {
    sexo: 'M',
    altura:'1,87',
};




var usuario2 ={
    nome: 'joao',
    idade: 19,
};

var extra2 = {
    sexo: 'M',
    altura:'1,87',
};

/*Object.assign(usuario1, extra)

const total = Object.assign({}, usuario1, extra)*/

var total1 = {
    ...usuario1,
    ...extra1,
};



var total2 = {
    ...usuario2,
    ...extra2,
};



var geral = {
    total1,
    total2,
};

console.log(geral.total1)