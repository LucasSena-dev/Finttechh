document.addEventListener('DOMContentLoaded', function() {
    var actualPageElement = document.getElementById('actual-page');
    if (actualPageElement) {
        actualPageElement.textContent = 'Visão Geral';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Criar gradiente para o preenchimento
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.6)'); // Cor inicial do gradiente (azul claro)
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0)');   // Cor final do gradiente (transparente)

    const myChart = new Chart(ctx, {
        type: 'line', // Alterado de 'bar' para 'line'
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Vendas (em milhares)',
                data: [12, 19, 3, 5, 2, 3], // Exemplo de dados
                fill: true,                 // Preencher abaixo da linha
                backgroundColor: gradient,  // Gradiente como preenchimento
                borderColor: 'rgba(54, 162, 235, 1)', // Cor da linha
                borderWidth: 2,             // Espessura da linha
                tension: 0.4                // Suavizar a curva da linha
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false // Remove linhas de grade do eixo x
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false // Remove linhas de grade do eixo y
                    },
                    min: 0,          // Ajusta o valor mínimo conforme necessário
                    max: 20          // Ajusta o valor máximo conforme necessário
                }
            },
            plugins: {
                legend: {
                    display: true, // Mostra a legenda
                    labels: {
                        color: 'black' // Cor do texto da legenda
                    }
                }
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Dados dinâmicos, que podem vir de uma API ou outra fonte
    const dados = [
        { titulo: "Saldo", valor: 5000 },
        { titulo: "Investimentos", valor: 1500 },
        { titulo: "Gastos", valor: 1200 },
        { titulo: "Despesas", valor: 700 }
    ];

    // Container onde os cartões serão adicionados
    const cardContainer = document.getElementById("card-container");

    // Função para criar e adicionar cada cartão
    dados.forEach(item => {
        // Criar o elemento do cartão
        const card = document.createElement("div");
        card.classList.add("cardValor", "col", "p-3", "m-2", "bg-light", "text-center");

        // Conteúdo do cartão
        card.innerHTML = `
            <h5>${item.titulo}</h5>
            <p>${item.valor}</p>
        `;

        // Adicionar o cartão ao container
        cardContainer.appendChild(card);
    });
});