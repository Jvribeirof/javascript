let contador = 0
let input = document.querySelector('#inpt')
let btnAdd = document.querySelector('#btnadd');
let main = document.querySelector('#main-tasks')

function deletar(num){
    var tarefa = document.getElementById(num);
    tarefa.remove();
}

function marcarTarefa(num){
    var tarefa = document.getElementById(num);
    var classe = tarefa.getAttribute('class');

    var icone = document.getElementById('icone_'+num);
    console.log(icone);

    if(classe == 'item'){
        tarefa.classList.add('clicado');
        icone.classList.remove('mdi-checkbox-blank-circle-outline');
        icone.classList.add('mdi-check-circle');

        tarefa.parentNode.appendChild(tarefa);
    } else {
        tarefa.classList.remove('clicado');
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-checkbox-blank-circle-outline');
    }
}

function addTarefa(){
    //PEGAR VALOR DIGITADO NO INPUT
    let valorInput = input.value

    if((input.value !=="") && (input.value !== null) && (input.value !== undefined)){

        contador++;
        console.log(contador)

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-checkbox-blank-circle-outline"></i>
        </div>

        <div class="item-text">
            ${valorInput}
        </div>

        <div class="item-btn">
            <button onclick="deletar(${contador})" class="delete">
                <i class="mdi mdi-delete"></i>
                Deletar
            </button>
        </div>
    </div>`;

    main.innerHTML += novoItem;
    }
    input.value = "";
    input.focus();
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        btnAdd.click();
    }
})