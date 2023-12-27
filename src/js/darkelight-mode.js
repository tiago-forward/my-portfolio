const trilho = document.querySelector('#trilho')
const header = document.querySelector('.header')
const sobre = document.querySelector('.sobre')
const habilidade = document.querySelector('.habilidades')
const projeto = document.querySelector('.projetos')
const body = document.querySelector('body')


trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    header.classList.toggle('dark')
    sobre.classList.toggle('dark')
    habilidade.classList.toggle('dark')
    projeto.classList.toggle('dark')
    body.classList.toggle('dark')
})