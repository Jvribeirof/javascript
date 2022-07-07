function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#inpt')
    var res = document.querySelector('#res')
    
    if(fano.value <= 0 || fano.value > ano) {
        window.alert('error301')
    } else {
        var idade = ano - fano.value
        var fsex = document.getElementsByName('radsex')

        if(fsex[0].checked) {
            var genero = 'Homem'
        } else {
            var genero = 'Mulher'
        }

        if(idade >= 0 && idade < 10){
            var epoca = 'criança'
        } else if(idade <= 22){
            var epoca = 'jovem'
        } else if(idade <= 55){
            var epoca = 'adulto(a)'
        } else {
            var epoca = 'idoso(a)'
        }

        res.style.padding = 
        res.innerHTML = `Detectei: ${genero} ${epoca} de ${idade} anos`
    } 
}