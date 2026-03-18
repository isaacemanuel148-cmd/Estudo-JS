//Escreva uma função chamada `parOuImpar` que recebe um número e retorna "par" se for par ou "ímpar" se for ímpar.

function parOuImpar(num) {
  if(num % 2 === 0){
    const par = 'Par'
    return par
  }else{
    const impar = 'Ímpar'
    return impar
  }
}
console.log(parOuImpar(4));