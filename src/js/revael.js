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
    origin: 'left',
});

ScrollReveal().reveal('.efeito-rolagem-conteudo', {
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

ScrollReveal().reveal('.efeito-rolagem-conteudo-sobre', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'right'
});

ScrollReveal().reveal('.efeito-rolagem-projeto1', {
    duration: 1000,
    distance: '100px',
    delay: 100,
    origin: 'bottom'
});

ScrollReveal().reveal('.efeito-rolagem-projeto2', {
    duration: 1000,
    distance: '100px',
    delay: 400,
    origin: 'bottom'
});

ScrollReveal().reveal('.efeito-rolagem-projeto3', {
    duration: 1000,
    distance: '100px',
    delay: 700,
    origin: 'bottom'
});

ScrollReveal().reveal('.efeito-rolagem-projeto4', {
    duration: 1000,
    distance: '100px',
    delay: 1000,
    origin: 'bottom'
});


if (window.matchMedia("(max-width: 1340px)").matches) {
    ScrollReveal().reveal('.efeito-rolagem-perfil', {
        distance: '60px',
        origin: 'left'
    });

    ScrollReveal().reveal('.efeito-rolagem-borda', {
        distance: '60px',
        origin: 'left'
    });

    ScrollReveal().reveal('.efeito-rolagem-left', {
        distance: '60px',
        origin: 'left'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-conteudo-titulo', {
        distance: '60px',
        origin: 'right'
    });

    ScrollReveal().reveal('.efeito-rolagem-conteudo-sobre', {
        distance: '60px',
        origin: 'right'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto1', {
        distance: '60px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto2', {
        distance: '60px',
        origin: 'bottom'    
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto3', {
        distance: '60px',
        origin: 'bottom'    
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto4', {
        distance: '60px',
        origin: 'bottom'    
    });
} if (window.matchMedia("(max-width: 768px)").matches) {
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

    ScrollReveal().reveal('.efeito-rolagem-conteudo-sobre', {
        distance: '50px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto1', {
        distance: '50px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto2', {
        distance: '50px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto3', {
        distance: '50px',
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.efeito-rolagem-projeto4', {
        distance: '50px',
        origin: 'bottom'
    });
}