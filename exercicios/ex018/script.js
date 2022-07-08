function clicar(){
    var txtinpt = window.document.querySelector('#txtinpt')
    if(txtinpt.value.length == 0){
        alert('error')
    } else {
        var tab = document.querySelector('#tab')
        var inpt = Number(txtinpt.value)
        tab.innerHTML =''
        for(var i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.innerHTML += `${inpt} x ${i} = ${inpt*i}`
            tab.appendChild(item)
        }
    }
}