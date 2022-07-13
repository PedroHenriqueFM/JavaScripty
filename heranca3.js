function MeuObjeto(){}
    console.log(MeuObjeto.prototype)

const obj1=new MeuObjeto
const obj2=new MeuObjeto
console.log(obj1.__proto__==obj2.__proto__)
MeuObjeto.prototype.nome='pedro'
MeuObjeto.prototype.falar=function()
{
    console.log(`meu nome é ${this.nome}`)
}
obj1.falar()
