let teste = [0,1,2,3,4,5,6,7]
let aux = []

delete teste[4]
delete teste[3]

teste.sort();
for(let i = teste.length-1; i >= 0; i--){
    if(teste[i] == null){
        teste.pop();
    }
}
console.log(teste);