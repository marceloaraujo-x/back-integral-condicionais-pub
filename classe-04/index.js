const ladoA = 6;
const ladoB = 6;

if(ladoA === ladoB){
    if(ladoA === 0){
        console.log("Branco");
    } else if(ladoA === 1){
        console.log("Ás");
    } else if(ladoA === 2){
        console.log("Duque");
    } else if (ladoA === 3){
        console.log("Terno");
    } else if(ladoA === 4){
        console.log("Quadra");
    } else if(ladoA === 5){
        console.log("Quina");
    } else{
        console.log("Sena");
    }

} else{
    console.log("NÃO");
}