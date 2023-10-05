/**
 * Você está escrevendo um programa para uma cafeteria que calcula o custo total do pedido de um cliente com base na bebida e quaisquer complementos que escolherem.
 * Cada bebida tem um preço base e cada complemento tem um custo adicional. 
 * O programa deve solicitar ao cliente que informe sua escolha de bebida e complementos e, em seguida, exibir o custo total do pedido.
 * 
 * Aqui estão os preços base para cada bebida:
 * Café: R$2,00
 * Chá: R$1,50
 * Chocolate Quente: R$2,50
 * 
 * Aqui estão as opções de complementos e seus custos adicionais:
 * Leite: R$0,50
 * Açúcar: R$0,25
 * Chantilly: R$1,00
 */

bebida = 'Chocolate Quente'
complemento = 'Chantilly'
pedido = 0
switch(bebida){
    case 'Café':
        pedido += 2.0
        break
    case 'Chá':
        pedido += 1.5
        break
    case 'Chocolate Quente':
        pedido += 2.5
        break    
}

switch(complemento){
    case 'Leite':
        pedido += 0.5
        break
    case 'Açúcar':
        pedido += 0.25
        break
    case 'Chantilly':
        pedido += 1.0
        break
}

console.log(`O valor total é de R$${pedido}.`)

