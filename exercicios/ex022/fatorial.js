function fatorial(n=1){
    let fat =1
    for(let c =n; n>1;n--){
        fat *= n
    }
    return fat
}

console.log(fatorial(7))