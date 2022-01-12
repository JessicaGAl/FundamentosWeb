/*
Case Sensitive
Pode ter acesso por Tag, Id, Nome, Classe e Seletor */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '98%'
email.style.width = '98%'

function validationName() {
    let txtN = document.querySelector('#txtNome')
if (nome.value.length < 3) {
    txtN.innerHTML= "Incorrect Typing"
    txtN.style.color= "red"
    txtN.style.display = 'block'
    
} else {
    txtN.style.display = 'none'
    nomeOk = true
}
}

function validationEmail() {
    let txtE = document.querySelector('#txtEmail')
if (email.value.indexOf ('@') == -1 || email.value.indexOf ('.') == -1) {
    txtE.innerHTML= "Incorrect Typing"
    txtE.style.color= "red"
    txtE.style.display = 'block'
  
} else {
    txtE.style.display = 'none'
    emailOk = true
}
}
function validationAssunto() {
    let txtA = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtA.innerHTML= 'Text too large, writes a brief summary with up to 100 characters'
        txtA.style.color= "red"
        txtA.style.display = 'block'
    
    } else {
        txtA.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assunto == true) {
        alert ('Form submitted successfully. Congratulations!!!')
    } else {
        alert ('Fill out the form correctly...')
    }
}
 function mapZoom() {
 mapa.style.width ='800px'
 mapa.style.heigth = '600px'
 }
 function mapNormal() {
 mapa.style.width ='400px'
 mapa.style.heigth = '250px'
 }