const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "Ribas";

if(apelido){
    console.log(apelido);
} else if(sobrenome){
    console.log(`${primeiroNome} ${sobrenome}`);
} else{
    console.log(primeiroNome);
}