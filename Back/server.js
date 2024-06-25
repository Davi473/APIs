const express = require("express");
const cors = require("cors");
const Stocks = require("./Object/classeObject")

const app = express();

app.use(cors());
app.use(express.json());

const acoesClient = [
    { 
        nome: "VALE3",
        ativos: [
            {quantidade: 3, valorTotal: 120, valorCada: 59.99, valorDeTaxa: 0.02}
        ]
    },
    { 
        nome: "MXRF11",
        ativos: [
            {quantidade: 2, valorTotal: 20.26, valorCada: 10.13, valorDeTaxa: 0},
            {quantidade: 5, valorTotal: 51.25, valorCada: 10.24, valorDeTaxa: 0.05},
            {quantidade: 5, valorTotal: 52.20, valorCada: 10.44, valorDeTaxa: 0}
        ]  
    },
];

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
app.listen(3000, () => {
    console.log('Servidor iniciado em http://localhost:3000');
});