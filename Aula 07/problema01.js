function Multiplicar (a, b){
    return a * b;
}

var x = Multiplicar(4,3);
console.log(x);


function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2);

const conta = (...args) => {
    console.log(args);
};

conta('+', 1, 20, 30, 40, 50);

var contato = function(nome){
    console.log("Olá, " + nome + "!");
};

setTimeout(contato, 2000, "Marcelo");