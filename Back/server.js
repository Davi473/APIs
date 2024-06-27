const express = require("express");
const cors = require("cors");
const Stocks = require("./Object/classeObject")
const acoesClient = require("./ValoreBancoFiquitisios/acoesCliente")
const historicoDividendos = require("./ValoreBancoFiquitisios/historicoDividendos")

const app = express();

/*
console.log(acoesClient)
console.log(historicoDividendos)
*/
app.use(cors());
app.use(express.json());

app.get("/acoes", function (req, res) 
{
    let array = []
    for (const ativo in acoesClient)
    {
        const temp = new Stocks(acoesClient[ativo].nome, acoesClient[ativo].ativos)
        temp.organizar();
        array.push(temp);
    } 
    res.json(array);
});

app.get("/dividendos", function (req, res) 
{
    res.json(historicoDividendos);
});

/*
app.post("/adicionar", function (req, res) {
    const lancamento = (req.body);
    console.log(lancamento)
    clientesAdicionados.push(lancamento);  
    res.json({value: `Cliente Novo Adicionado`})
});

app.post("/trocarStats", function (req, res) {
    const valor = (req.body).valor;
    const stats = (req.body).stat;  
    clientesAdicionados[valor].stats = stats

});
*/

app.listen(3005, () => {
    console.log('Servidor iniciado em http://localhost:3005');
});