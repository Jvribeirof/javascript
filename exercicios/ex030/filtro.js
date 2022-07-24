let list = document.querySelectorAll('.filter');
let itens = document.querySelectorAll('.item');

//SELECINAR
for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        list[i].classList.add('active');

//SELECIONAR ITENS
       let dataFilter = list[i].getAttribute('data-filter')

        for(let k = 0; k < itens.length; k++){
            //REMOVE TODOS OS ITENS DA TELA
            itens[k].classList.remove('item-active');
            itens[k].classList.add('item-hide');

            //RE-ADICIONA APENAS OS QUE SÃO DO FILTRO
            if(itens[k].getAttribute('data-item') == dataFilter || dataFilter == 'todos'){
                itens[k].classList.remove('item-hide');
                itens[k].classList.add('item-active');
            }
        }
    })
}