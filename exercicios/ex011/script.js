var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são exatamente ${hora} h e ${min} min`)

if(hora < 12){
    var aux = 'Dia'
} else {
    if(hora < 18){
        var aux = 'Tarde'
    } else{
        var aux = 'Noite'
    }
}

console.log(`Está de ${aux}`)