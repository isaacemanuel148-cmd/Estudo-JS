// Função em JS é First-Class Object (Citizens)
// Higher-order function

//criar de forma literal
function fun1(){

}

// Armazenar em um variavel
const fun2 = function(){

}

// Armazenar em uma arrey
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

// Passar função como parametro 
function run(fun){
    fun()
}
run(function () { console.log('Execultando...')})

// Uma função pode retorna/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)