const carro={
    velAtual:0,
    velMax:200,
    acelerarMais(delta)
    {
        if (this.velAtual+delta<=this.velMax)
        {
            this.velAtual+=delta
        }
        else{
            this.velAtual=this.velMax
        }
    },
    status()
    {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}
const volvo={
    modelo: 'V40',
    status()
    {
        return `${this.modelo}:${super.status()}`
    }
}
const ferrari={
    modelo:'F40',
    velMax:324
}
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(100)
console.log(ferrari.status())