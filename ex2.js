const triangulo=(a,b,c)=>
{
    if (a==b&&b==c)
    {
      
        return 'equilatero'
    }
    else if (a!=b&&b!=c)
    {
      
        return 'escaleno'
    }
    else 
    {
        
        return 'isosceles'
    }
    
}

console.log(triangulo(3,2,2))
