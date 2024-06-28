const express = require("express");
const cors = require("cors");
const Stocks = require("./Object/daughter/stocks")
const active = require("./ValoreBancoFiquitisios/active")
const historicoDividendos = require("./ValoreBancoFiquitisios/historicoDividendos")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/activeCurrent", function (req, res) 
{
    res.json(arrayTheAverageActive);
});

app.get("/dividendos", function (req, res) 
{
    res.json(historicoDividendos);
});

app.listen(3005, () => {
    console.log('Servidor iniciado em http://localhost:3005');
});