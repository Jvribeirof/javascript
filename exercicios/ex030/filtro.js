function selecionarFiltro(id){
    let btn = document.getElementById(id)
    let classe = btn.getAttribute('class')

    if(classe == 'filter'){
        btn.classList.add('active')
    }else{
        btn.classList.remove('active')
    }

    let teste = document.querySelectorAll('.item.f-video-games');


    teste.innerHTML = ""

}