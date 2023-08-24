/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor
 * e dos impostos (aplicados ao custo de fábrica). Suponto que o percentual do distribuidor seja de 28% 
 * e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
 * calcular e escrever o custo final ao consumidor.
 */

custoFabrica = 50000;
porcentagemDistribuidor = 0.28 * custoFabrica;
impostos = 0.45 * custoFabrica;
custoFinal = custoFabrica + porcentagemDistribuidor + impostos;

console.log(`O custo final ao consumidor é de R$${custoFinal}`);