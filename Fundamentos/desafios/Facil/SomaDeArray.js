//Escreva uma função chamada `somaArray` que recebe um array de números e retorna a soma de todos os elementos.

function somaArray(arr) {
  let soma = 0
  for(let i = 0; i < arr.length; i++){
    soma = arr[i] + arr[i++]
  }
  return soma
  
}

console.log(somaArray([1, 2, 3]));