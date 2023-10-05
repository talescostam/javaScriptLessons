const shoppingCart = ['açúcar', 'tempero', 'tudo que há de bom', 'elemento X'];

function adicionaItem(item) {
    shoppingCart.push(item)
}

function removeItem(item) {
    shoppingCart.splice(shoppingCart.indexOf(item), 1)
}

function listaItensDoCarrinhoDeCompras() {
    if(shoppingCart.length === 0){
        console.log('Seu carrinho está vazio. \n')
    } 
    else {
        console.log('Itens do carrinho de compras:')
        for(let i=0; i < shoppingCart.length; i++) {
            console.log(`${i+1}- ${shoppingCart[i]}`)
        }
        console.log("")
    }
}

function apagarTudoDoCarrinhoDeCompras() {
    shoppingCart.splice(0, shoppingCart.length)
    console.log('Seu carrinho foi esvaziado. \n')
}

adicionaItem("feijão")
adicionaItem("maçã")
adicionaItem("sabão")

listaItensDoCarrinhoDeCompras()

removeItem("elemento X")

listaItensDoCarrinhoDeCompras()

apagarTudoDoCarrinhoDeCompras()

listaItensDoCarrinhoDeCompras()
