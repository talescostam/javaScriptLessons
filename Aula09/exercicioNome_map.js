const pessoas = [
    {nome: "Tales", idade: 31, sobrenome: "Costa"},
    {nome: "Selat", idade: 13, sobrenome: "Atsoc"}
]

var novasPessoas = pessoas.map( (valor, indice) =>{
    let item = {}
    item.nomeCompleto = valor.nome + ' ' + valor.sobrenome;
    item.id = indice;
    return item
})

console.log(novasPessoas)