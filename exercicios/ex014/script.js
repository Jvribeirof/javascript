
    var agora = new Date()
    var hora = agora.getHours()
    var txth = window.document.querySelector('#horario')
    var img = window.document.querySelector('#imghtml')

    var hora = 23
    function load() {
        if(hora < 12){
            txth.innerHTML  = `Agora são <strong>${hora}h</strong>, bom dia!`
        } else {
            if(hora < 18){
                txth.innerHTML  = `Agora são <strong>${hora}h</strong>, boa tarde!`
                document.body.style.background = '#e2916c'
                img.src = 'imagens/tarde.jpg'
                
                
            } else{
                txth.innerHTML  = `Agora são <strong>${hora}h</strong>, boa noite!`
                document.body.style.background = '#0d0d44'
                img.src = 'imagens/noite.jpg'
            }
        }
    }

