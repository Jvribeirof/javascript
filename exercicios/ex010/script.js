var idade = 66
console.log(`Você tem ${idade} anos`)
if (idade <= 16){
    console.log('Não vota')
} else{
    if(idade>=18){
        if(idade >= 65){
            console.log('Voto Opcional')
        } else {
            console.log('Voto Obrigatório')
        }
    } else {
        console.log('Voto Opcional')
    }
}