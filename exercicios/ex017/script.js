function clicar(){

    var rest = document.querySelector('#res')

    var p = document.querySelector('#passo')
    var f = document.querySelector('#fim')
    var i = document.querySelector('#inicio')

    var p2 = p.value
    var f2 = f.value
    var i2 = i.value
    var n = ''

    for(n=i2;n<=f2;n=n+p2){
        rest.innerHTML = `Vez ${n}`
    }

}
