function Area(largura,altura)
{
    const a=largura*altura
    if (a>20)
    {
        console.log(`valor acima do permitido:${a}m2.`)
    }
    else {
      
        return a;
    }
}
Area(12,4)
console.log(Area(2,2))
console.log(Area(2))
console.log(Area())
console.log(Area(2,3))
console.log(Area(5,5))