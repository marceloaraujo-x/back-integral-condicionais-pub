//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if(mesesDecorridos > 60){
    console.log("O aluno não deve mais nada pois o tempo decorrido é superior a 60 meses");
} else if(totalJaPagoPeloAluno === 1800000){
    console.log("A parcela desse mês é R$ 0 reais. Pois o aluno já quitou a dívida.");
} else if (rendaMensalEmCentavos < 200000){
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if(rendaMensalEmCentavos > 200000){
    let parcela = (0.18 * rendaMensalEmCentavos) / 100;
    console.log(`O valor da parcela desse mês é de ${parcela} reais`);
}