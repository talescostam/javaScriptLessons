var frutas = ['Manga', 'Banana', 'Laranja', 'Uva']
console.log(frutas)

frutas[4] = 'Jambo'
console.log(frutas)

//colocando elemento no final do array
frutas.push("Abacaxi")
console.log(frutas)

//retirando o ultimo elemento dentro do array
frutas.pop()
console.log(frutas)

//retirando o primeiro elemento do array
frutas.shift()
console.log(frutas)

//colocando elemento no inicio do array
frutas.unshift("Morango")
console.log(frutas)

//retirar elemento de posicao especifica
//primeiro parametro: posição indice para tirar
//segundo parametro: quantidade de elementos a ser tirados a partir do indice escolhido(contando com ele mesmo)
frutas.splice(1, 0, 'Melancia', 'Tangerina')
console.log(frutas)

//descobrir a posição de um elemento
var posicao = frutas.indexOf('Tangerina')
console.log(posicao)

for(var i=0; i < frutas.length; i++) {
    console.log(frutas[i])
}

frutas.forEach(function(value) {
    console.log(value)
})