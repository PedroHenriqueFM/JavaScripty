const produto=new Object
produto.nome='cadeira'
produto.marcaDeProduto='generica'
produto.preco=220

console.log(produto)
delete produto.preco// nao posso deletar o objeto
console.log(produto)

const carro={
    modelo:'A4',
    valor:89000,
    proprietario:{
        nome:Raul,
        idade:56,
        endereco:{
            logradouro:'ABC',
            numero:123
        }
    },  
    condutores:[{
        nome:'junior',
        idade:19
    }],
    calcularValorSeguro:function()
    {

    }
}
carro.proprietario.endereco.numero=1000
