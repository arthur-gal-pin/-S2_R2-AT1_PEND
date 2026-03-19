/ Selecionando os elementos do DOM
// Peguei o botão de adicionar pelo ID para monitorar o clique
let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let mensagem = document.querySelector("#mensagem");

// Lógica Principal
// Evento de Clique 
btnAdicionar.addEventListener('click', () => {
    let texto = inputTarefa.value;

    // Validação para não aceitar um input vazio ou só com espaços
    if (texto.trim() !== '') {
        
        // Passo 1. Criando um container 'row' para organizar a linha com Bootstrap
        const unidade = document.createElement('div');
        unidade.className = 'row'; // Define a classe para o sistema de colunas

        // Passo 2. Criando o item da lista
        const novaTarefa = document.createElement('li');
        novaTarefa.id = 'tarefa'; // Atribuindo um ID (cuidado: IDs devem ser únicos, mas deixei aqui conforme o requisito)
        novaTarefa.textContent = texto;
        // Aplicando classes de estilo: item de lista + ocupando 8 colunas da row
        novaTarefa.className = 'list-group-item col-8';

        // Passo 3: Montagem da Estrutura (Append)
        // Primeiro coloco o <li> dentro da <div> (unidade)
        unidade.appendChild(novaTarefa);
        
        // Depois coloco a <div> inteira dentro da nossa lista principal no HTML
        listaTarefas.appendChild(unidade);

        // Limpando o campo de texto para a próxima tarefa
        inputTarefa.value = '';

        // Feedback de Sucesso 
        mensagem.innerText = 'Tarefa adicionada com sucesso!'
        mensagem.className = 'fw-bold text-success';
        
    } else {
        // Feedback de Erro 
        mensagem.innerText = 'Por favor, digite algum texto!'
        mensagem.className = 'fw-bold text-danger';
    }
})
