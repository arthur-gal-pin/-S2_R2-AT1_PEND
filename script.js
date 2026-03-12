let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let mensagem = document.querySelector("#mensagem");


btnAdicionar.addEventListener('click', () => {
    let texto = inputTarefa.value;

    if (texto.trim() !== '') {
        const unidade = document.createElement('div');
        unidade.className = 'row';

        const novaTarefa = document.createElement('li');
        novaTarefa.id = 'tarefa';
        novaTarefa.textContent = texto;
        novaTarefa.className = 'list-group-item col-8'

        unidade.appendChild(novaTarefa);
        listaTarefas.appendChild(unidade);

        inputTarefa.value = '';

        mensagem.innerText = 'Tarefa adicionada com sucesso!'
        mensagem.className = 'fw-bold text-success';
    } else {
        mensagem.innerText = 'Por favor, digite algum texto!'
        mensagem.className = 'fw-bold text-danger';
    }
})


