let valores = [4,6,7,2,1,9,0]

valores.sort()

/*
for(let n = 0; n < valores.length; n++){
    console.log(valores[n])
}
*/

for(let i in valores){
    console.log(valores[i])
}


let v = 6
let pos = valores.indexOf(v)

if (pos ==-1){
    console.log('Não existe o valor que procurou!')
} else {
    console.log(`O valor ${v} está na posição ${pos}`)
}
