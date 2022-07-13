let dobro=function(a)
{
    return 2*a
}
dobro=(a)=>{
    return 2*a
}

dobro=a=>2*a//return implicito

console.log(dobro(2))
let ola=function()
{
    return 'ola'
}
ola=()=>
{
    return 'ola'
}
ola=()=>'ola'

console.log(ola())