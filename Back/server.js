const express = require("express");
const cors = require("cors");
const Stocks = require("./Object/classeObject")

const app = express();

app.use(cors());
app.use(express.json());

const historicoDividendos = [
    {
        ano: 2024,
        dividendos: {
            jan: [],
            fev: [],
            mar: [],
            abr: [
                {
                    categoria: "Ações",
                    ativo: "BBDC4",
                    quantidade: 1,
                    tipo: "JSCP",
                    dataCom: "01/03/2024",
                    dataPagamento: "01/04/2024",
                    valorDoDividendo: 0.019,
                    total: 0.019,
                    totalLiquido: 0.019
                },
                {
                    categoria: "FIIs",
                    ativo: "RZAK11",
                    quantidade: 2,
                    tipo: "Dividendos",
                    dataCom: "12/04/2024",
                    dataPagamento: "19/04/2024",
                    valorDoDividendo: 1.11,
                    total: 2.22,
                    totalLiquido: 2.22
                }
            ],
            mai: [
                {
                    categoria: "Ações",
                    ativo: "BBDC4",
                    quantidade: 1,
                    tipo: "JSCP",
                    dataCom: "01/04/2024",
                    dataPagamento: "02/05/2024",
                    valorDoDividendo: 0.019,
                    total: 0.019,
                    totalLiquido: 0.019
                },
                {
                    categoria: "FIIs",
                    ativo: "RBVO11",
                    quantidade: 5,
                    tipo: "Dividendos",
                    dataCom: "30/04/2024",
                    dataPagamento: "09/05/2024",
                    valorDoDividendo: 0.35,
                    total: 1.75,
                    totalLiquido: 1.75
                }
            ]
        }
    },
    /*
    {
        ano: 2025,
        dividendos: {
            jan: [],
            fev: [],
            mar: []
        }
    }
    */
]

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