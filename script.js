let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let mensagem = document.querySelector("#mensagem");


btnAdicionar.addEventListener('click', () => {
    let texto = inputTarefa.value;

    if (texto.trim() !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = texto;
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = '';

        mensagem.innerText = 'Tarefa adicionada com sucesso!'
        mensagem.className = 'fw-bold text-success';
    } else {
        mensagem.innerText = 'Por favor, digite algum texto!'
        mensagem.className ='fw-bold text-danger';
    }
})
