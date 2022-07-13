const pai={nome:'pedro',
corCabelo:'preto',
}
const filha1=Object.create(pai)//aqui pego todos os atributos do pai e copio para filha 1 h
{
    filha1.nome='marlene'
}
console.log(filha1.corCabelo)

console.log(filha1.nome)

const filha2=Object.create(pai,{
    nome:{value:'bia',writable:false,enumerable:true}//writable valor n pd ser mudado posteriormente, enumrable existe sim ou nao
    
})
{
    filha2.corCabelo='loiro'
    filha2.nome='pedro'
}
console.log(filha2.corCabelo)
console.log(filha2.nome)