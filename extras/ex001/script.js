let res = document.querySelector('#res')

function somar(x,y){
    let result = Number(x + y)
    return result
}

function clicar(x){
    let tela = x
    res.innerHTML += `${tela}`
}

function limpar(){
    res.innerHTML = ''
}

function deletar(){
    let resultado = res.innerHTML
    res.innerHTML = resultado.substring(0,resultado.length -1)
}

function calcular(){
    let result = res.innerHTML
    if(result.length == 0){
        alert('Insira uma conta para ser resolvida')
    } else{
        res.innerHTML = eval(result)
    }
}
    





function operações(x,y,op){
    switch(op){
        case '+':
            valor = x+y
            break

        default:
            break
}
}
