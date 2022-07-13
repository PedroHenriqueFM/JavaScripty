const pessoa={
    saudacao:'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar1=pessoa.falar
falar1()//conflito

const falarDePessoa=pessoa.falar.bind(pessoa)
falarDePessoa()