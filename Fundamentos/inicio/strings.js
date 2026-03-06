const escola = 'Cod3r'

console.log(escola.charAt(4)) // essa funçào vai da a lentra no indisse 4 da string
console.log(escola.charAt(5)) // nao vai da nada pq no indessi 5 nao tem nada na string
console.log(escola.charCodeAt(3)) // essa função vai pegar o valor da tabela ask da letra no indesse 3 
console.log(escola.indexOf('3')) // essa função faz o contrario ele vai pegar oq tem no indesse 3 na string

console.log(escola.substring(1)) // ele vai do indesse 1 ate o final da string
console.log(escola.substring(0, 3)) // esse ele vai do indesse 0 ate o indesse 3 da string

console.log('Escoalr'.concat(escola).concat('!'))
console.log(escola.replace(3, 'e')) // essa função serve para subustituir um elemento na string

console.log('Ana,maria,Pedro'.split(',')) //transforma uma string em uma arrey



