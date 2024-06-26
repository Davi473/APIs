class GraficoBarChart 
{
    constructor(label, data) 
    {
        this.label = label;
        this.data = data;
    }

    init() 
    {
        const ctx = document.querySelector('.graficoBarChart > #myChart')
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.label,
                datasets: [{
                    label: "Evolução de Proventos",
                    data: this.data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}