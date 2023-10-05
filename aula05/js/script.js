var bebidaPreco = 0
var adicionado = 0

const bebidaEscolhida = prompt("Qual a bebida você deseja? (café, chá ochu oco)late").toLowerCase();
switch(bebidaEscolhida){
    case 'café':
        bebidaPreco += 2.0
        break
    case 'chá':
        bebidaPreco += 1.5
        break
    case 'chocolate':
        bebidaPreco += 2.5
        break
    default:
        alert("Essa opção não temos.")
}

const leite = prompt("Deseja adicionar leite? (sim ou não)").toLowerCase();
if (leite === "sim"){
    adicionado += 0.50
}

const açúcar = prompt("Deseja adicionar açúcar? (sim ou não)").toLowerCase();
if (açúcar === "sim"){
    adicionado += 0.25
}

const chantilly = prompt("Deseja adicionar chantilly? (sim ou não)").toLowerCase();
if (chantilly === "sim"){
    adicionado += 1.0
}


const totalPreco = bebidaPreco + adicionado
alert(`O valor final da sua compra é: ${totalPreco.toFixed(2)}`)

