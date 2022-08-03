$(document).ready(function(){
    let list = $('.filter');
    let itens = $('.item');
    let cont = 0
    let vet = []
    let vet2 = []

    function verificar(x){
        let retorno = $(x).attr('class') == 'filter active'
        return retorno
    }

    //SELECINAR
    for(let i = 0; i < list.length; i++){
        $(list[i]).click(function(){
            if(i == 0){
                $(list).removeClass('active');
                $(list[0]).addClass('active');
            } else {
                $(list[0]).removeClass('active');
                $(list[i]).toggleClass('active');
                vet[i] = $(list[i]).attr('data-filter');
            }

            console.log(vet)

            //SELECIONAR ITENS
            let dataFilter = $(list[i])
            if($(dataFilter).attr('data-filter') == 'todos'){
                $(itens).show();
                vet = []
            } else{
                //if($(itens).css('display') == 'none'){
                    $(itens).toggle();
                    //$(itens).css('display') == 'none'
                //}
                for(let j = 0; j < vet.length; j++){
                    $(itens).filter('.f-'+vet[j]).toggle();
                }
                for(let k = 1; k < list.length; k++){
                   vet2[k] = verificar(list[k])
                }
                console.log(vet2)
            }
        })
    }
})