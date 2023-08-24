/**
 * Escreve um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
 * Calcular e escrever o valor do novo salário.
 */

var salario = 5000;
var reajuste = 0.08;
var salarioReajustado = salario * reajuste + salario;

console.log(`O salário de R$${salario},00 reajustado é: R$${salarioReajustado},00`);