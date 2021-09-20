/*
Case Sensitive = reconhece letras maiúsculas e minúsculas

por Tag: getElementyByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML = 'Nome Aceito'
        txtNome.style.color = 'green'
        nome = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inexistente'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Aceito'
        txtEmail.style.color = 'green'
        email = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 200) {
        txtAssunto.innerHTML = 'SUA MENSAGEM É MUITO EXTENSA, DIGITE NO MÁXIMO 200 CARACTERES'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assunto = true
    }
}

function enviar() {
    if (nome == true && email == true && assunto == true) {
        alert('ENVIO DO FORMULÁRIO FEITO COM SUCESSO!')
    } else {
        alert('PREENCHA O FORMULÁRIO COM TODOS OS DADOS CORRETOS ANTES DE ENVIAR')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}