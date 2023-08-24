/**
 * Para fazer uma promoção, os comerciantes estão procurando aumentar suas vendas oferecendo desconto.
 * Faça um algoritmo que possa receber um valor de um produto e que escreva o novo valor
 * tendo em vista que o desconto foi de 9%.
 */

var valorDoProduto = 12.99
var desconto = 0.09
var novoValor = valorDoProduto - (valorDoProduto * desconto) 

console.log(`***PROMOÇÃO!! DE R$${valorDoProduto.toFixed(2)} POR APENAS R$${novoValor.toFixed(2)}!! IMPERDÍVEL!!***`)