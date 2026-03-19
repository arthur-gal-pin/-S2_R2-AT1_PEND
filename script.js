// Selecionando os elementos do DOM
let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let mensagem = document.querySelector("#mensagem");

// Evento principal: Adicionar Tarefa
btnAdicionar.addEventListener('click', () => {
    let texto = inputTarefa.value;

    // Validação: impede que o usuário adicione algo vazio
    if (texto.trim() !== '') {
        
        // Passo 1: Criação do container da linha (Bootstrap row)
        const unidade = document.createElement('div');
        unidade.className = 'row mb-2'; // mb-2 adiciona um espaçamento inferior legal
        listaTarefas.appendChild(unidade);

        // Passo 2: Criação do item da lista (li) com Flexbox para alinhar os itens internos
        const novaTarefa = document.createElement('li');
        // d-flex e justify-content-between fazem o texto e o botão ficarem nas pontas
        novaTarefa.className = 'list-group-item col-8 d-flex align-items-center justify-content-between';

        // Passo 3: Componente Checkbox (para marcar como concluído)
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2"; 

        // Passo 4: Elemento de texto (span) para podermos estilizar só o texto depois
        const spanTexto = document.createElement('span');
        spanTexto.innerText = texto;

        // Passo 5: Botão de Exclusão (estilo perigo/vermelho)
        const botaoExclusao = document.createElement('button');
        botaoExclusao.innerText = 'Excluir';
        botaoExclusao.className = 'btn btn-danger btn-sm ms-3';

        // --- Montagem da Hierarquia ---
        novaTarefa.appendChild(checkbox);     // Checkbox entra no li
        novaTarefa.appendChild(spanTexto);    // Texto entra no li
        novaTarefa.appendChild(botaoExclusao); // Botão entra no li
        unidade.appendChild(novaTarefa);      // O li entra na div row

        // --- Lógica do Checkbox (Tarefa Concluída) ---
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                // Se marcado: risca o texto e deixa "apagadinho" (itálico e mudo)
                spanTexto.style.textDecoration = 'line-through italic';
                spanTexto.classList.add('text-muted');
            } else {
                // Se desmarcado: volta ao estilo normal
                spanTexto.style.textDecoration = 'none';
                spanTexto.classList.remove('text-muted');
            }
        });

        // --- Lógica de Exclusão ---
        botaoExclusao.addEventListener('click', () => {
            // Sobe dois níveis no DOM (li -> div) para remover a linha inteira
            botaoExclusao.parentElement.parentElement.remove(); 
            
            // Feedback visual de que foi removido
            mensagem.innerText = 'Tarefa excluída com sucesso!';
            mensagem.className = 'fw-bold text-warning';
        });

        // Limpeza do input e feedback de sucesso
        inputTarefa.value = '';
        mensagem.innerText = 'Tarefa adicionada com sucesso!';
