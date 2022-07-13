//criando objeto
const obj1={}
console.log(obj1)



//criando objeto
function Produto(nome,preco,desc)
{
    this.nome=nome
    this.getPrecoComDesconto=()=>{
        return preco*(1-desc)
    }
}
const p1=new Produto('caneta',7.99,0.15)
const p2=new Produto('notebook',2998.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

function criarFuncionario(nome,salarioBase,faltas)
{
    return {
        nome,
        salarioBase,
        faltas,
        getSalario()
        {
            return (salarioBase/30)*(30-faltas)
        }
    }
}
const f1=criarFuncionario('joao',6575,4)
const f2=criarFuncionario('maria',2314,30)
console.log(f1.getSalario(),f2.getSalario())

//outra forma
const filha=Object.create(null)
filha.nome='ana'
console.log(filha)