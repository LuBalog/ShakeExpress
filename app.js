const body = document.querySelector('body')
document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();


})


function iniciarApp() {
    desplegarNav();
    quitarSpin();
    blurElementos();
    allLinks();


    controlarForm();

}

function controlarForm() {

    const formSubmit = document.querySelector('.form__submit');
    if (formSubmit) {
        formSubmit.addEventListener('click', (e) => {

            e.preventDefault();
            const alerta = document.querySelector('.alerta')
            const form = document.querySelector('.form')
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const pass = document.querySelector('#password').value;
            if (name === '' || email === '' || pass == '') {

                alerta.textContent = 'DEBES RELLENAR TODOS LOS CAMPOS'
                alerta.classList.add('error')
                setTimeout(() => {
                    alerta.textContent = ''
                    alerta.classList.remove('error')
                }, 3000)
                return;
            }
            alerta.classList.add('exito')
            alerta.textContent = 'EXITOSO'

            location.href = "index.html";


        })
    }


}

function allLinks() {
    const links = document.querySelectorAll('.smooth');

    if (links != []) {
        links.forEach((link) => {
            navegacionSmooth(link)
        })
    }


}
function navegacionSmooth(link) {

    link.addEventListener('click', (e) => {
        e.preventDefault();

        const seccion = document.querySelector(e.target.attributes.href.value ? e.target.attributes.href.value : null);
        if (seccion !== null) {
            seccion.scrollIntoView({ behavior: 'smooth' });
        }

    })
}

function blurElementos() {
    const heroText = document.querySelector('.hero-text');
    const heroImg = document.querySelector('.hero-img');
    aparecerElementos(heroText, 2300)


}


function aparecerElementos(container, time) {

    if (container) {
        setTimeout(() => {
            container.classList.add('aparecer')
        }, time)
        return
    }



}





function quitarSpin() {
    const spin = document.querySelector('.spin')
    if (spin) {
        setTimeout(() => {
            spin.classList.add('remover')
            body.style.overflowY = "scroll"
        }, 2000)
    }

}

function desplegarNav() {
    const menu = document.querySelector('.menu');
    if (menu) {
        const containerHeader = document.querySelector('.container-header');
        const nav = document.querySelector('.navegacion')
        menu.addEventListener('click', () => {
            nav.classList.toggle('visible')
            containerHeader.classList.toggle('width-100')

        })
    }

}