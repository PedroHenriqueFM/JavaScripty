const sequencia={
    _valor:1,
    get valor()
    {
        return this._valorvalor++
    },
    set valor(valor)
    {
        if (valor>this._valorvalor)
        {
            this._valor=valor
        }
    }
    
}
console.log(sequencia._valor)