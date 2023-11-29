document.addEventListener('DOMContentLoaded', function () {
    // Array simulando dados de profissionais
    const profissionais = [
        { nome: 'João', categoria: 'encanador', contato: '123-456-7890', avaliacao: 4.5 },
        { nome: 'Maria', categoria: 'eletricista', contato: '987-654-3210', avaliacao: 4.2 },
        { nome: 'Carlos', categoria: 'limpeza', contato: '555-123-4567', avaliacao: 4.8 },
        // Adicione mais profissionais conforme necessário
    ];

    const form = document.querySelector('form');
    const resultadosSection = document.getElementById('resultados');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const categoriaSelecionada = document.getElementById('categoria').value;

        // Simulação de busca por profissionais na categoria selecionada
        const resultadosFiltrados = profissionais.filter(profissional => profissional.categoria === categoriaSelecionada);

        exibirResultados(resultadosFiltrados);
    });

    function exibirResultados(resultados) {
        resultadosSection.innerHTML = '<h2>Resultados da Busca</h2>';

        if (resultados.length === 0) {
            resultadosSection.innerHTML += '<p>Nenhum profissional encontrado.</p>';
        } else {
            resultados.forEach(profissional => {
                resultadosSection.innerHTML += `
                    <div>
                        <h3>${profissional.nome}</h3>
                        <p>Categoria: ${profissional.categoria}</p>
                        <p>Contato: ${profissional.contato}</p>
                        <p>Avaliação: ${profissional.avaliacao}</p>
                    </div>
                `;
            });
        }
    }
});
