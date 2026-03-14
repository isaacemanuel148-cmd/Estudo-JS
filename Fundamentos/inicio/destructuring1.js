const pessoa = {
    nome: 'Vitoria',
    idade: 24,
    endereco: {
        logradouro: 'Rua CT America',
        numero_casa: 604
    }

}

const {nome, idade} = pessoa
const {logradouro, numero_casa} = pessoa.endereco // acessando atributos de um objeto dentro de outro objeto
console.log(nome, idade, logradouro, numero_casa)
// outra forma de acessar
//const { endereco: {logradouro, numero_casa}} = pessoa
