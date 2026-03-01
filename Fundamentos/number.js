const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // a função isInteger diz se o valor e um numero
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.456

const total =  avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // essa funcao toFixed ela tranforma o numero com varias casas desimas e deixa com com duas casas desimais
console.log(media.toString(2)) // a funcao toString ela tranforma qualquer dado em binario
console.log(typeof media)
console.log(typeof Number)
