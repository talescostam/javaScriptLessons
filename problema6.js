/**
 * Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem,
 * sabendo-se que o carro faz 12 Km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média.
 * Utilizar a seguinte fórmula: distância = tempo * velocidade e litros usados = distância / 12
 * O algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem, distância percorrida
 * e a quantidade de litros utilizados na viagem.
 */


var tempoGastoNaViagem = 6
var velocidadeMedia = 80
var distanciaPercorrida = tempoGastoNaViagem * velocidadeMedia
var quantidadeDeLitrosDeCombustivelGasto = distanciaPercorrida / 12

console.log(`A viagem demorou ${tempoGastoNaViagem} horas. A velocidade média foi ${velocidadeMedia} Km/h.`)
console.log(`Portanto, a distância percorrida foi de ${distanciaPercorrida} Km.`)
console.log(`E a quantidade de litros utilizados na viagem foi de ${quantidadeDeLitrosDeCombustivelGasto} Litros.`)
