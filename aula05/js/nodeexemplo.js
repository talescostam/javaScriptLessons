const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var bebidaPreco = 0

rl.question("Qual a bebida você deseja? (café, chá ou chocolate)",(bebidaEscolhida) =>{
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
            console.log("Essa opção não temos.")
            rl.close();
            return;
    }
})