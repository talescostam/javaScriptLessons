const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Qual o seu nome? ', (nome) => {
    console.log('Seu nome é: ' + nome);
    rl.question('Qual a sua idade? ', (idade) => {
        console.log('Sua idade é: ' + idade);
        rl.close()
    })
});