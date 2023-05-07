const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son requeridos.', 'error');
        return;
    }

    mostrarAlerta('El formulario fue enviado con éxito.');
    console.log('Enviando formulario');
    
});

function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');

    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout( () => {
        alerta.remove();
    }, 5000);
}