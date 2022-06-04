console.log(`Trabalhando com Condicionais`);


const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);
const idadeComprador = 16 ;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log ("Destinos Possíveis:");
console.log (listaDeDestinos);


if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {

    console.log("Boa viagem"); 
    listaDeDestinos.splice(2,1); //removendo item
}else{
    console.log("Você não pode embarcar");

} 
    


console.log(listaDeDestinos);




