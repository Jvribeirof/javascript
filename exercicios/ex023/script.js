let vetor = []
let res = document.querySelector('#res')

function adicionar(){
    let txtinpt = document.querySelector('#inpt')
    let inpt = Number(txtinpt.value)

    if(inpt.length == 0){
        alert('Preencha algo antes de clicar')
    } else if(inpt < 1 || inpt > 100){
        alert('Insira um valor entre 1 e 100') 
    } else {

        // COMEÇA AQUI

        vetor.push(inpt)

        let tab = document.querySelector('#tab')
        let item = document.createElement('option')
        item.innerHTML = `Valor ${inpt} adicionado!`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    txtinpt.value =''
    txtinpt.focus()
    return vetor
}

function med(){

}

function finalizar(){
    if(vetor.length == 0){
        alert('Adicione os valores primeiro')
    } else{

        //MAIOR E MENOR
        let maior = vetor[0]
        let menor = vetor[0]
        for (let i in vetor){
            if(vetor[i]>maior){maior = vetor[i]}
            if(vetor[i]<menor){menor = vetor[i]}
        }

        //SOMA
        let soma = 0
        for(let i in vetor){
            soma += vetor[i]
        }

        //MÉDIA
        let media = soma/vetor.length

        res.innerHTML += `<p>Ao todo, são <strong>${vetor.length}</strong> cadastros.</p>`
        res.innerHTML += `<p>O maior valor informado é: <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor informado é: <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma dos valores informados é: <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média dos valores informados é: <strong>${media}</strong></p>`
    }
}