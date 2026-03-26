//Crie uma função que recebe um array de números e retorna o maior número presente no array.

//Dica: 
//Inicialize uma variável com o primeiro número do array.
//Percorra o array comparando cada elemento.
//Atualize a variável se encontrar número maior.


function maiorNumero(numeros) {
  let contro = numeros[0]
  for(let i = 1; i < numeros.length; i++){
    if(numeros[i] >= numeros[i++]){
        contro = numeros[i]
    }
  }
  return contro
}

// Teste sua solução:
console.log(maiorNumero([]));