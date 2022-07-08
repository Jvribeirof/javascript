function clicar(){

    var rest = document.querySelector('#res')


    var p = document.querySelector('#passo')
    var f = document.querySelector('#fim')
    var i = document.querySelector('#inicio')

    if(p.value.length == 0 || f.value.length == 0 || i.value.length == 0){
        window.alert('error 301')
    } else {

        var p2 = Number(p.value)
        var f2 = Number(f.value)
        var i2 = Number(i.value)
        var cont = ''
    
        if(i2<=f2){//positivo
            for(var n = i2;n <= f2;n += p2){
                cont += " " + n
            }
        } else {//negativo
            for(var n = i2;n >= f2;n -= p2){
                cont += " " + n
            }
        }

        rest.innerHTML = cont + ' Fim!'
    }
}
