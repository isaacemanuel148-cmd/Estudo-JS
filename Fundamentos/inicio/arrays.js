const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) //vai da undefine pq nao tem o índice 4 no array

valores[4] = 10
console.log(valores)
console.log(valores.length) //essa função diz quantos elementos tem na array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // essa funçao tira o ultimo valor da array
delete valores[0] // delaeta o valor que vc desejat de acordo com índice
console.log(valores)

console.log(typeof valores)

