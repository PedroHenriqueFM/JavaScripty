// estrategia 1 para gerar valor Padrao
function soma1(a,b,c)
{
    a=a||1
    b=b||1
    c=c||1
    return a+b+c
}
console.log(soma1())
console.log(soma1(2))
console.log(soma1(0,0,0))//0 é falso ou seja cai no ou

function soma2(a=1,b=1,c=1)
{
    return a+b+c
}
console.log(soma2(),soma2(''),soma2(1,2,4))// aspa sozinha da 11