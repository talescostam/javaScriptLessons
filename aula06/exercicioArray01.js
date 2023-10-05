/**
 * Trabalho em uma concessionária de carros que possui em estoque os seguintes carros: 
 * Compass, Renegade, Outlander, Tracker e um Duster
 * Um dia desses, apareceu um cliente e resolveu comprar o Tracker. Com isso, o estoque diminuiu.
 * Apareceu um novo carro, Onix, adquirido pelo dono da loja para ficar disponível para ser vendido.
 * Mais um monte de texto que não cheguei nem na metade.
*/

concessionaria = ['Compass', 'Renegade', 'Outlander', 'Tracker', 'Duster']
console.log(concessionaria)

concessionaria.splice(concessionaria.indexOf('Tracker'), 1)

concessionaria.push("Onix")
console.log(concessionaria)

concessionaria.shift()
console.log(concessionaria)

concessionaria.splice(concessionaria.indexOf('Outlander'), 1, "Pajero TR4")
console.log(concessionaria)

concessionaria.push("Tiggo 7")
console.log(concessionaria)

concessionaria.splice(concessionaria.indexOf('Duster'), 1)
console.log(concessionaria)