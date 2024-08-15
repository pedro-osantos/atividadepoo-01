//Declaro um objeto e seus atributos
const animal = {
    nome: "Pantera cor de rosa",
    raca:"Vira-lata",
    porte: "Médio",
    cor: "Rosa",
    sexo: "Macho",
    agressivo: false
};

//Defino uma primeira saída
console.log(animal);

//Defino uma saída condicional
if(animal.agressivo == true){
    console.log("CUIDADO!!!!")
}else{
    console.log("cachorro manso")
};