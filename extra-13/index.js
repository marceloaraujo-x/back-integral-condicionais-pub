//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro"){
    let valor = (valorDoProduto - valorDoProduto * 0.1) / 100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`);
} else if(tipoDePagamento === "cheque"){
    let valor = (valorDoProduto - valorDoProduto * 0.03) / 100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`);
} else if(tipoDePagamento === "credito"){
    let valor = (valorDoProduto - valorDoProduto * 0.05) / 100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`);
}
