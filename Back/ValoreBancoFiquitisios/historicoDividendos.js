
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
module.exports = historicoDividendos;
