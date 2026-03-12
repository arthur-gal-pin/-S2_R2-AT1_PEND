let nomeUsuario = document.getElementById('inputNome');
let btnLogar = document.querySelector('#btnLogar');

let mensagem = document.querySelector('#mensagem');

btnLogar.addEventListener('click', ()=>{
    mensagem.innerText = `Bem vindo ao sistema, ${nomeUsuario.value}!`
})
