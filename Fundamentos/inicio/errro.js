const prompt = require('prompt-sync')()

function tratarErroELanacar(erro){
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimiNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + "!!!")
        console.log(typeof obj.nome)
        
    }
    catch(e){
        tratarErroELanacar(e)     
    }
    finally{
        console.log("Sucesso!!")
    }
}

const nome = prompt('Digite seu nome:')

const obj = {
    nome: nome
}
imprimiNomeGritado(obj)

