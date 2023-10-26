var produtos = [
    {id : 1, descricao: "Smartphone", categoria: 'Eletronico'},
    {id : 2, descricao: "Notebook", categoria: 'Eletronico'},
    {id : 3, descricao: "Geladeira", categoria: 'Eletronico'},
    {id : 4, descricao: "Liquidificador", categoria: 'Eletrodomestico'},
    {id : 5, descricao: "Air Fryer", categoria: 'Eletrodomestico'}
]

function retornarEletronico(value){
    if(value.categoria == 'Eletronico'){
        return value
    }
}


