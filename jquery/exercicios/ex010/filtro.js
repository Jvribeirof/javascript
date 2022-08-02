$(document).ready(function(){
    let list = $('.filter');
    let itens = $('.item');

    //SELECINAR
    for(let i = 0; i < list.length; i++){
        $(list[i]).click(function(){
            if(i == 0){
                $(list).removeClass('active');
                $(list[0]).addClass('active');
            } else {
                $(list[0]).removeClass('active');
                $(list[i]).toggleClass('active');
            }

            //SELECIONAR ITENS
            let dataFilter = $(list[i]).attr('data-filter');

            //REMOVE TODOS OS ITENS DA TELA
            //$(itens).hide();

            /*$(itens).filter(function(){
                $(this).toggle()
            });*/

            //RE-ADICIONA APENAS OS QUE SÃO DO FILTRO
            for(let k = 0; k < itens.length; k++){
                if($(itens[k]).attr('data-item') == dataFilter || dataFilter == 'todos'){
                    $(itens[k]).show();
                }
            }
        })
    }
})