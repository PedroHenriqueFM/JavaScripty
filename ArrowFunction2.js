function Pessoa()
{
    this.idade=0

    setInterval(()=>//aqui ja nao varia a instancia
    {
        this.idade++
        console.log(this.idade)
    },1000)
}
new Pessoa