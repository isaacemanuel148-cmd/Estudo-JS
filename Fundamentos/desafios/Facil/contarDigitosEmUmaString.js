//Crie uma função que receba uma string e retorne a quantidade de caracteres que são dígitos numéricos (0-9).

//Dica: 
//Use um loop para percorrer cada caractere da string.
//Verifique se o caractere atual está entre '0' e '9'.
//Mantenha um contador e incremente quando encontrar um dígito.


function contarDigitos(str) {
    let totalDigitos = 0
    
    for(let i = 0; i < str.length; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            totalDigitos++ 
        }
    } 
    
    return totalDigitos 
}

console.log(contarDigitos("abc"));