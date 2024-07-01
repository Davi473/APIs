const express = require("express");
const cors = require("cors");
//const Stocks = require("./Object/daughter/stocks")
const active = require("./ValoreBancoFiquitisios/active")
const historicoDividendos = require("./ValoreBancoFiquitisios/historicoDividendos")

const app = express();

app.use(cors());
app.use(express.json());

let agora = "stocks"
let data = {
    id: 1234,
    name: "davi",
    email: "davi@gmail.com"
}
app.get("/activeCurrent", function (req, res) 
{
    /*
    let arrayActive = []
    for(let atual in active)
    {
        let activeAtual = new Stocks(active[atual].nome, active[atual].ativos);
        activeAtual.calcularMedia();
        arrayActive.push(activeAtual.getMediaDaAcao());
    }

    res.json(arrayActive);
    */
   res.json(active[agora]);
});

/*
app.get("/dividendos", function (req, res) 
{
    res.json(historicoDividendos);
});

*/

app.get("/dividendos", function (req, res) 
{
    
    agora = "fiis";
    //res.json(historicoDividendos);
});

app.listen(3005, () => {
    console.log('Servidor iniciado em http://localhost:3005');
});