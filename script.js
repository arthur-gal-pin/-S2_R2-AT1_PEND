// Selecionando os elementos do DOM
// Peguei o botão de adicionar pelo ID para monitorar o clique
let btnAdicionar = document.querySelector('#btnAdicionar');
// Selecionei o input onde o usuário digita o nome da tarefa
let inputTarefa = document.querySelector('#inputTarefa');
// Aqui é o container onde as tarefas vão aparecer na tela
let listaTarefas = document.querySelector('#listaTarefas');
// Selecionei o elemento de feedback para mostrar mensagens de sucesso ou erro
let mensagem = document.querySelector("#mensagem");


// --- Lógica principal ---
// Adicionando um "ouvinte" para quando o usuário clicar no botão
btnAdicionar.addEventListener('click', () => {
    // Pegando o valor atual do input
    let texto = inputTarefa.value;

    // Verificação de segurança: checa se o texto não está vazio ou só com espaços
    if (texto.trim() !== '') {
        // Passo 1: Cria um novo elemento de lista (li) na memória
        const novaTarefa = document.createElement('li');
        
        // Passo 2: Coloca o texto que o usuário digitou dentro desse <li>
        novaTarefa.textContent = texto;
        
        // Passo 3: Adiciona esse novo <li> dentro da nossa lista principal no HTML
        listaTarefas.appendChild(novaTarefa);
        
        // Passo 4: Limpa o campo de texto para a próxima tarefa
        inputTarefa.value = '';

        // --- Feedback Visual Positivo ---
        mensagem.innerText = 'Tarefa adicionada com sucesso!'
        // Usei classes do Bootstrap para deixar o texto verde e em negrito
        mensagem.className = 'fw-bold text-success';
        
    } else {
        // --- Feedback Visual Negativo ---
        // Se o input estiver vazio, avisa o usuário
        mensagem.innerText = 'Por favor, digite algum texto!'
        // Classe de erro (vermelho) do Bootstrap
        mensagem.className ='fw-bold text-danger';
    }
})
