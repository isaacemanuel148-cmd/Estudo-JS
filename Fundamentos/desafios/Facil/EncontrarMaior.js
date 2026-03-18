//Escreva uma função chamada `encontrarMaior` que recebe um array de números e retorna o maior valor.

function encontrarMaior(arr) {
    let numeroMaior = Math.max(...arr);  
    return numeroMaior;
}

console.log(encontrarMaior([3, 7, 2, 9, 1])); 
