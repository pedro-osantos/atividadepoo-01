//Declaro uma Classe e determino seus atriutos em modo default
class Carro {
    constructor(modelo, cor, placa, ano, combustível, apelido){
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
        this.combustível = combustível;
        this.apelido = apelido;
    };

        //estabeleço métodos
    descricao(){
        console.log(`Meu carro é um(a) ${this.modelo}, do ano ${this.ano}, da cor ${this.cor}, minha placa é ${this.placa} e meu carro bebe ${this.combustível}`);
    };
    buzinar(){
        console.log(`O meu(a) ${this.apelido} está buzinando... BEEP-BEEP`);
    };
};

//declaro um objeto, defino sua classe e seus atributos próprios
const carro1 = new Carro(`brasilia`, `amarela`, `FLM-4824`, `1985`, `gasolina`, `brasilia amarela`);
const carro2 = new Carro(`fusca`, `azul`, `AAA-0000`, `1977`, `alcool`, `fusqueta`);
const carro3 = new Carro(`ferrari`, `vermelha`, `aaa-0a00`, `2015`, `gasolina`, `ferrarinha`);
const carro4 = new Carro(`corsa`, `amarela`, `bbb-1b11`, `1994`, `gasolina`, `corsinha amareluuuu`);
const carro5 = new Carro(`uno`, `roxo`, `ddd-0000`, `2006`, `gasolina`, `uninho rebaixado`);

//Exibo uma saída que tem por resposta o meu objeto sob ação dos métodos
carro1.descricao();
carro1.buzinar(); 

carro2.descricao();
carro2.buzinar(); 

carro3.descricao();
carro3.buzinar(); 

carro4.descricao();
carro4.buzinar(); 

carro5.descricao();
carro5.buzinar(); 