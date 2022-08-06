$(document).ready(function(){
let aux = $('div.filter')
let filtro = []

function del(){
    delete filtro[i-1]

}

for(let i = 0; i < aux.length; i++){
    $('div.filter').eq(i).click(function(){
        $('div.filter').eq(0).removeClass('active');

        if($(this).attr('class') == 'filter active'){
            console.log('foi')
            $(this).toggleClass('active');
            delete filtro[i-1]
            //auxFiltro = filtro.join(',')
            console.log(filtro);
            //console.log(auxFiltro);
        } else {
            $(this).toggleClass('active');
            filtro[i-1] = '.f-' + $(this).attr('id');
            auxFiltro = filtro.toString
            console.log(filtro);
            //console.log(auxFiltro);
            $('.item').hide();
        }
    })


    $('div.filter').eq(0).click(function(){
        $('div.filter').removeClass('active');
        $(this).toggleClass('active');
        $('.item').show();
        filtro = []
    })
}
})