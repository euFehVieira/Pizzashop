let show = true;
const menuContent = document.querySelector('.header-conteudo');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
    const elementsToReveal = document.querySelectorAll(
        '.home .conteudo-principal, .sobrenos .contentsobre, .sobrenos .img-fundo2, ' +
        '.cardapio > h2, .cardapio > h3, .cardapio [class^="itens-cardapio"] > div, ' +
        '.contatos h3, .contatos-secao > div'
    );

    elementsToReveal.forEach((element, index) => {
        element.classList.add('reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 8, 5) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px'
    });

    elementsToReveal.forEach((element) => revealObserver.observe(element));
}
