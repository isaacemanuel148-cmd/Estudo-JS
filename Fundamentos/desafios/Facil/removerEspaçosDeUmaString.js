//Crie uma função que receba uma string e retorne a mesma string sem espaços em branco.

//Dica:  
//Use um loop para percorrer todos os caracteres.
//Adicione ao resultado apenas os caracteres que não forem espaços.
//Retorne a nova string construida.

function removerEspacos(str) {
    const objtString  = {}
    for(let i = 0; i < str.length; i++){
        objtString['string' + i] = str[i]
    }
    for(let v in objtString){
        if(objtString[v] == ' '){
            delete objtString[v]
        }
    }
    const objtArray = Object.entries(objtString)
    let stringFinal = ''
    for(let i = 0; i < objtArray.length; i++){
        const [undefined, valor] = objtArray[i]
        stringFinal += valor
    }
    return stringFinal
     
}
// Teste sua solução:
console.log(removerEspacos("ab co"))
