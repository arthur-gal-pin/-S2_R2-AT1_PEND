let btnAdicionar = document.querySelector('#btnAdicionar');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefas = document.querySelector('#listaTarefas');


btnAdicionar.addEventListener('click', () => {
    const texto = inputTarefa.value;
    if (texto.trim() !== '' || texto.trim() !== undefined) {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = texto;
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.innerText = "";
        inputTarefa.value = '';
    } else {
        alert('Por favor, digite algum texto!')
    }
})
