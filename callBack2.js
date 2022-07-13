const notas=[7.7,1.2,5.9,8.9]

const notasBaixas1=[]
for (let i in notas)
{
    if (notas[i]<7)
    {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

const notasBaixa2=notas.filter(function(nota)
{
    return nota<7
})

console.log(notasBaixa2)

const notasMenorQue7=nota=>nota<7
const notasBaixa3=notas.filter(notasMenorQue7)
console.log(notasBaixa3)

const notasBaixa4=notas.filter(nota=>nota<7)
console.log(notasBaixa4)