const scrollAnimacao = document.querySelector('#scroll-animacao')

const metadeWindow = window.innerHeight

function animarScroll() {
    const topoIcon = scrollAnimacao.getBoundingClientRect().top

    const iconeVisivel = metadeWindow <= (-topoIcon)

    if (iconeVisivel) {
        scrollAnimacao.classList.add('mostrar-icone-topo')
    }  else {
        scrollAnimacao.classList.remove('mostrar-icone-topo')
    }
}

window.addEventListener('scroll', animarScroll)