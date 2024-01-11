ScrollReveal({ reset: true })

ScrollReveal().reveal('.efeito-rolagem-perfil', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'left',
});

ScrollReveal().reveal('.efeito-rolagem-borda', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'top',
});

ScrollReveal().reveal('.efeito-rolagem-left', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'left',
});

ScrollReveal().reveal('.efeito-rolagem-titulo', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'right'
});

ScrollReveal().reveal('.efeito-rolagem-conteudo', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'right'
});

ScrollReveal().reveal('.efeito-rolagem-conteudo-sobre', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'right'
});

if (window.matchMedia("(max-width: 1340px)").matches) {
    ScrollReveal().reveal('.efeito-rolagem-perfil', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-borda', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-left', {
        distance: '50px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-titulo', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-conteudo', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-conteudo-sobre', {
        distance: '50px',
        origin: 'bottom'
    });
    
} if (window.matchMedia("(max-width: 1024px)").matches) {
    ScrollReveal().reveal('.efeito-rolagem-perfil', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-borda', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-left', {
        distance: '50px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-conteudo-titulo', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-conteudo', {
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.efeito-rolagem-conteudo-sobre', {
        distance: '50px',
        origin: 'bottom'
    });
    
} if (window.matchMedia("(max-width: 768px)").matches) {
    ScrollReveal().reveal('.efeito-rolagem-perfil', {
        distance: '50px',
        origin: 'top'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-borda', {
        distance: '50px',
        origin: 'top'
    });

    ScrollReveal().reveal('.efeito-rolagem-left', {
        distance: '50px',
        origin: 'top'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-titulo', {
        distance: '50px',
        origin: 'top'
    });

    ScrollReveal().reveal('.efeito-rolagem-conteudo', {
        distance: '50px',
        origin: 'top'
    });

    ScrollReveal().reveal('.efeito-rolagem-conteudo-sobre', {
        distance: '50px',
        origin: 'top'
    });
}