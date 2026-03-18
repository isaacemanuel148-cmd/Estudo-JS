//Escreva uma função chamada `contarVogais` que recebe uma string e retorna a quantidade de vogais (a, e, i, o, u).

 //Dica:
 //Converta para minúsculas primeiro
 //Use includes() para verificar se é vogal
 //Ou use uma expressão regular

function contarVogais(str) {
    let A = 0, E = 0, I = 0, O = 0, U = 0
    let resultTotal = 0
    const minuscula = str.toLowerCase()
    let vogais = minuscula.includes('a', 'e', 'i', 'o', 'u')
    if(vogais == true){
        for(let i = 0; i < minuscula.length; i++){
            if(minuscula[i] == 'a'){
                A++
            }if(minuscula[i] == 'e'){
                E++
            }if(minuscula[i] == 'i'){
                I++
            }if(minuscula[i] == 'o'){
                O++
            }if(minuscula[i] == 'u'){
                U++
            }
        }
        resultTotal = A + E + I + O + U
        return resultTotal
    }else{
        return 0
    }
    
}

console.log(contarVogais("javascript")); 