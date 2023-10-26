/**
 * faça uma lista de coisas em minusculo e faça uma função que retorne tudo com Pascal Case
 */
var listProdutos = ["geladeira", "fogão", "coifa"]

function primeiraLetraMaiuscula(valor){
    return valor.charAt(0).toUpperCase() + valor.slice(1)
}

var listaEmMaiusculo = listProdutos.map(primeiraLetraMaiuscula);
console.log(listaEmMaiusculo)