function Carro(velocidadeMaxima=200,delta=5)
{
    let velocidadeAtual=0//privado

    //metodoPublico
    this.acelerar=function()
    {
        if (velocidadeAtual+delta<=velocidadeMaxima)
        {
            velocidadeAtual+=delta
        }
        else
        {
            velocidadeAtua=velocidadeMaxima
        }
    }
    this.getVelocidadeAtual=function()
    {
        return velocidadeAtual
    }
}
const uno=new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const ferrarim=new Carro(300,20)
ferrarim.acelerar()
ferrarim.acelerar()
ferrarim.acelerar()
console.log(ferrarim.getVelocidadeAtual())