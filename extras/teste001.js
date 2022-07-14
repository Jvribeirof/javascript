let valor = []
var x = 1

switch(x){
    case 1:
        valor.push(3)
        break

    case 2:
        valor.push(22)
        break

    default:
        break
}
var x = 2

switch(x){
    case 1:
        valor.push(3)
        break

    case 2:
        valor.push(22)
        break

    default:
        break
}

var soma = valor[0] + valor[1]

console.log(valor)
console.log(soma)