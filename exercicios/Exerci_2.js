//Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;  
console.log("A soma é: " + soma);
console.log("A subtração é: " + subtracao);
console.log("A multiplicação é: " + multiplicacao);
console.log("A divisão é: " + divisao);