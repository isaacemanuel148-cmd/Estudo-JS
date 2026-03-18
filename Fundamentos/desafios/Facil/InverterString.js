//Escreva uma função chamada `inverterString` que recebe uma string e retorna ela invertida.

//Dica:
//Use split() para converter em array
//Use reverse() para inverter
//Use join() para voltar a ser string

function inverterString(str) {
  const strArrey = str.split("")
  const strInvert = strArrey.reverse();
  const strArreyJunto = strInvert.join("")

    return strArreyJunto
}

console.log(inverterString("hello"));