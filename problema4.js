/**
 * Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final desse aluno.
 * Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. 
 * Fórmula para o cálculo da média final é: mediafinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10
 */

var n1 = 9;
var n2 = 8;
var n3 = 10;
var mediafinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10

console.log(`As notas do aluno são: ${n1}, ${n2} e ${n3}.`)
console.log(`Portanto, a média final do aluno é ${mediafinal}.`)
