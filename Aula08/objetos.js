const pessoa = {
    nome: "Tales",
    sobrenome: "Costa"
}

console.log(pessoa['nome'] + ' ' + pessoa['sobrenome'])

const pessoa1 = new Object();
pessoa1.nome = 'Louise'
pessoa1.sobrenome = 'Aguiar'

pessoa1.falarNome = function() {
    console.log(this.nome + ' ' + this.sobrenome)
}

pessoa1.falarNome()

function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criarPessoa('Flavio', 'Oliveira')

console.log(p1)

function novaPessoa(nome, sobrenome, i) {
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome
        }
    }
}

const novaP1 = novaPessoa('Marcelo', 'Struc', '35')
console.log(novaP1.nomeCompleto)