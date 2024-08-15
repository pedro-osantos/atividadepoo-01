//Estabeleço um objeto
const pessoa = {
    primeiroNome: "Pedro",
    sobrenome: "Santos",
    idade: "17",
    corOlhos: "Castanho",
    altura: "190 cm",
    dataNascimento: "12/07/2007",
    usaOculos: false,
    corPele: "Branco",
    sexo: "Masculino"
};

//Primeira saída
console.log("O " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem " + pessoa.idade + " anos!");

//Altero algum atributo desse objto
pessoa.sobrenome = "Oliveira";

//Segunda saída
console.log("O sobrenome do " + pessoa.primeiroNome + " é " + pessoa.sobrenome + ".");