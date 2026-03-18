//Crie uma função que encontre o elemento que aparece com maior frequência em um array. Se houver empate, retorne qualquer um deles.

//Dicas:
//Use um objeto para contar as ocorrências de cada elemento.
//Atualize o elemento com maior frequência durante a iteração.
//Retorne o elemento que tem a frequência máxima.

function elementoMaisFrequente(arr) {
    const contagem = {}
    for(const v of arr){
        if(contagem[v] === undefined){
            contagem[v] = 1
        }else{
            contagem[v] = contagem[v] + 1
        }
    }
    let maxFreq = 0
    let maisFrequente = null
    const arreyObj = Object.entries(contagem)
    for(const [valor, freq] of arreyObj){
        if(freq > maxFreq){
            maxFreq = freq
            maisFrequente = valor
        }
    }
    return Number(maisFrequente)

}

// Teste sua solução:
console.log(elementoMaisFrequente([1,2,2,3,3,3,4]));