console.log(`\n Trabalhando com Condicionais`);


const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);
const idadeComprador = 16 ;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
console.log ("\nDestinos Possíveis:");
console.log (listaDeDestinos);


let contador= 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador]==destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador +=1
}
    


console.log("Destino esxiste: " , destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}
for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}