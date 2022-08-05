$(document).ready(function(){
    let perguntasFeitas = [];

    //PERGUNTAS DO JOGO
    const perguntas = [

        //PERGUNTA 0
        {pergunta: 'Qual dessas linguagens não é considerado uma lingugaem de programação?',
        respostas: ["PHP","JavaScript","C++","HTML"],
        correta: ''
        },

        //PERGUNTA 1
        {pergunta: 'Em que ano o Brasil foi descoberto?',
        respostas: ["1500","2000","1501","1789"],
        correta: ''
        },

        //PERGUNTA 2
        {pergunta: 'Em que ano foi Brasil venceu a Copa do Mundo?',
        respostas: ["2002","1400","1700","1900"],
        correta: ''
        },
    ]

    let qtdPerguntas = perguntas.length -1;

    function gerarPergunta(x){
        //GERAR UM NUM ALEATÓRIO
        let aleatorio = (Math.random() * x).toFixed();
        aleatorio = Number(aleatorio);
        console.log(aleatorio);

        if(!perguntasFeitas.includes(aleatorio)){
            perguntasFeitas.push(aleatorio);

            var pSelect = perguntas[aleatorio].pergunta;
            console.log(pSelect);

            $('h1').html(pSelect)
            for(let i = 0;i < 4;i++){
                $('#resp'+[i]).html(perguntas[aleatorio].respostas[i])
            }

            let pai = $('#respostas');
            let btn = pai.children();
        
            for(let j = 0; j < btn.length; j++){
                 pai.append(btn.eq(Math.floor(Math.random() * btn.length)))
            }
        } else{
            if(perguntasFeitas - 1 < qtdPerguntas){
                return gerarPergunta(x)
            } else{
                alert('acabaram as perguntas')
            }
        }
    }

    gerarPergunta(qtdPerguntas);

    $('.resposta').click(function(){
        $('.resposta').each(function(){
            if($(this).hasClass('selecionada')){
                $(this).removeClass('selecionada')
            }
        })
        $('.resposta')
        $(this).addClass('selecionada')
    })
})