class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    };
    calculaCategoria(){
        if(this.idade > 8 && this.idade < 12)
        return "Categoria:" + " " +  "Infantil";
        else if(this.idade === 12, 13)
        return "Categoria:" + " " +  "Juvenil";
        else if(this.idade === 14, 15)
        return "Categoria:" + " " +  "Intermediário";
        else if(this.idade > 15 && this.idade < 31 )
        return "Categoria:" + " " + "Adulto";
        else
        return "Categoria:" + " " + "Sem categoria";   
    };
    calculaIMC(){
        return this.peso/(this.altura*this.altura)
    };
    
    calculaMediaValida(){
        let notasCertas = this.notas.sort((a, b) => a - b);
        let notasValidas = notasCertas.slice(1, 4)  
        let soma = notasValidas.reduce(function(total, atual){
        return total + atual
        })
        let media = soma / notasValidas.length
        return media
    };
    obtemNomeAtleta(){
        return "Nome:" + " " + this.nome
    };
    obtemIdade(){
        return "Idade:" + " " + this.idade
    };
    obtemPeso(){
        return "Peso:" + " " + this.peso
    };
    obtemAltura(){
        return "Altura" + " " + this.altura
    };
    obtemIMC(){
        return "IMC:" + " " + atleta.calculaIMC()
    };   
    obtemMediaValida(){
        return "Média:" + " " + atleta.calculaMediaValida()
    };
    obtemNotas(){
        return "Notas:" + " " + this.notas
    };
    obtemCategoria(){
        return atleta.calculaCategoria()
    };

};
     const atleta = new Atleta("Cesar Abascal",
         30, 80, 1.70,
        [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdade());
console.log(atleta.obtemPeso());
console.log(atleta.obtemAltura());
console.log(atleta.obtemNotas());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());