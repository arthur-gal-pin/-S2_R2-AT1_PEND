/ Selecionando os elementos do DOM
// Pegando as referências do HTML para manipular via JS
let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let mensagem = document.querySelector("#mensagem");

// Lógica Principal
// Adicionando um evento "ouvinte" de clique
btnAdicionar.addEventListener('click', () => {
    //Pegando o valor atual do input 
    let texto = inputTarefa.value;

    //Verificando se o input estava vazio ou era apenas espaços
    if (texto.trim() !== '') {
        // Passo 1: Cria um elemento container para armazenar todas as criações
        const unidade = document.createElement('div');
        unidade.className = 'row';

        // Passo 2: Cria um novo elemento de lista (li) na memória e então coloca o texto digitado pelo usuário dentro do li
        const novaTarefa = document.createElement('li');
        novaTarefa.id = 'tarefa';
        novaTarefa.textContent = texto;
        novaTarefa.className = 'list-group-item col-8'

        //Passo 3: Cria um novo elementão botão para a exclusão das tarefas
        const botaoExclusao = document.createElement('button');
        botaoExclusao.innerText = 'Excluir';
        botaoExclusao.classList = 'btn btn-danger ms-3 col-3';

        // Passo 4: Adicionar um evento clique que remove o elemento pai do elemento pai do botão, que será unidade
        botaoExclusao.addEventListener('click', () => {
            botaoExclusao.parentElement.parentElemento.remove();
            mensagem.innerText = 'Tarefa excluída com sucesso!';
            mensagem.className = 'fw-bold text-warning';
        })

        //Passo 5: Apendicês - Adicionando o parentescos em todos os elementos
        novaTarefa.appendChild(botaoExclusao);
        unidade.appendChild(novaTarefa);
        listaTarefas.appendChild(unidade);

        // Passo 6: Limpa o campo de texto para a próxima tarefa
        inputTarefa.value = '';
        
        // Feedback Visual Positivo
        mensagem.innerText = 'Tarefa adicionada com sucesso!'
        mensagem.className = 'fw-bold text-success';
    } else {
        //  Feedback Visual Negativo 
        mensagem.innerText = 'Por favor, digite algum texto!'
        mensagem.className = 'fw-bold text-danger';
    }
})


