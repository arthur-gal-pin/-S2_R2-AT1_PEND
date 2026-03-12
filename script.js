let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let mensagem = document.querySelector("#mensagem");


btnAdicionar.addEventListener('click', () => {
    let texto = inputTarefa.value;

    if (texto.trim() !== '') {
        const unidade = document.createElement('div');
        unidade.className = 'row';
        listaTarefas.appendChild(unidade);

        const novaTarefa = document.createElement('li');
        novaTarefa.id = 'tarefa';
        novaTarefa.textContent = texto;
        novaTarefa.className = 'list-group-item col-8'
        
        const botaoExclusao = document.createElement('button');
        botaoExclusao.innerText = 'Excluir';
        botaoExclusao.classList = 'btn btn-danger ms-3 col-3';
        novaTarefa.appendChild(botaoExclusao);

        unidade.appendChild(novaTarefa);
        
        botaoExclusao.addEventListener('click', () => {
            botaoExclusao.parentElement.remove();
            mensagem.innerText = 'Tarefa excluída com sucesso!';
            mensagem.className = 'fw-bold text-warning';
        })

        inputTarefa.value = '';

        mensagem.innerText = 'Tarefa adicionada com sucesso!'
        mensagem.className = 'fw-bold text-success';
    } else {
        mensagem.innerText = 'Por favor, digite algum texto!'
        mensagem.className = 'fw-bold text-danger';
    }
})


