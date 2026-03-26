//Crie uma função que receba dois strings representando nomes e retorne um único string com os dois nomes concatenados, separados por um espaço.

//Dica: 
//Use o operador + para concatenar strings.
//Inclua um espaço entre os dois nomes.
//Não esqueça de retornar o resultado final.



function concatenarNomes(nome1, nome2) {
    return nome1 + " " + nome2
}

module.exports = concatenarNomes

// Teste sua solução:
console.log(concatenarNomes("João", "Silva"));