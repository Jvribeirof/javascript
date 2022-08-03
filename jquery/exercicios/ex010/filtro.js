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
            let dataFilter = $(list[i])

            var id = $(dataFilter).attr('id');
            if(id == 'todos'){
                $(itens).show();
            } else{
                //if(SE ALGUM FILTRO ESTIVER SELECIONADO, PULAR O IF){
                    $(itens).hide();
                    //$(itens).css('display') == 'none'
                //}
                $(itens).filter('.f-'+id).toggle();
            }
        })
    }
})