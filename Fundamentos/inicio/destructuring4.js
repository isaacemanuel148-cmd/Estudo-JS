function rand([min = 0, max = 1000]){
    if(max > min){
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // nao precisa colocar o nome max e min, pq nao e mas uma arrey
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
