let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let mensagem = document.querySelector("#mensagem");

btnAdicionar.addEventListener('click', () => {
    let texto = inputTarefa.value;

    if (texto.trim() !== '') {
        const unidade = document.createElement('div');
        unidade.className = 'row mb-2'; 
        listaTarefas.appendChild(unidade);

        const novaTarefa = document.createElement('li');
        novaTarefa.className = 'list-group-item col-8 d-flex align-items-center justify-content-between';

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2"; 

        const spanTexto = document.createElement('span');
        spanTexto.innerText = texto;

        const botaoExclusao = document.createElement('button');
        botaoExclusao.innerText = 'Excluir';
        botaoExclusao.className = 'btn btn-danger btn-sm ms-3';

        novaTarefa.appendChild(checkbox);
        novaTarefa.appendChild(spanTexto);
        novaTarefa.appendChild(botaoExclusao);
        unidade.appendChild(novaTarefa);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                spanTexto.style.textDecoration = 'line-through italic';
                spanTexto.classList.add('text-muted');
            } else {
                spanTexto.style.textDecoration = 'none';
                spanTexto.classList.remove('text-muted');
            }
        });

        botaoExclusao.addEventListener('click', () => {
            botaoExclusao.parentElement.parentElement.remove(); 
            mensagem.innerText = 'Tarefa excluída com sucesso!';
            mensagem.className = 'fw-bold text-warning';
        });

        inputTarefa.value = '';
        mensagem.innerText = 'Tarefa adicionada com sucesso!';
        mensagem.className = 'fw-bold text-success';

    } else {
        mensagem.innerText = 'Por favor, digite algum texto!';
        mensagem.className = 'fw-bold text-danger';
    }
});