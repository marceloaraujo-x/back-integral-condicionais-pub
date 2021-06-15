const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855971; //emCentavos

if(aposentada || portadoraDeDoenca){
    console.log("ISENTA");
} else if(totalDeRendimentos > 2855970){
    console.log("PEGA LEÃO")
} else{
    console.log("VAZA LEÃO! JA TA DIFÍCIL SEM VOCÊ");
}