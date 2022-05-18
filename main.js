
/* ABRIR E FECHAR O MENU */
function openMenu(){
    const nav = document.getElementById('nav');
    
    nav.classList.toggle('active');


    /*Acessibilidade - avisa quando o botão está ou nao aberto*/
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded',active);

    if(active){
        event.currentTarget.setAttribute('aria-label','Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label','Abrir Menu');
    }
    
}

function closeMenu(){
    openMenu()
}


/* Scroll informações */
ScrollReveal({
    origin:'left',
    distance:'30px',
    duration:2000
}).reveal(`#info h1,
#info h2,
#info p,
#info-redes,
#be-one h2,
#be-one img,
#be-one p,
#be-one a`);


/*CARROUSEL MEMBROS*/ 
const carousel = document.querySelector('.carrocel-cards')

new Glider(carousel,{
    slidesToShow: 1,
    slidesToScroll:2,
    draggable:true,
    dots:'.dots',
    dragVelocity:3.3,
    scrollLock:true
})

