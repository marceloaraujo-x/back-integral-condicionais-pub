//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if(valorPago != valorDoProduto){
    let numParcela = quantidadeDoParcelamento - valorPago / (valorDoProduto / quantidadeDoParcelamento);
    let parcelas = valorDoProduto / quantidadeDoParcelamento;
    console.log(`Restam ${numParcela} de R$ ${(parcelas / 100).toFixed(2)}`);
}
