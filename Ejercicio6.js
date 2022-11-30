//Formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	celular: /^9[0-9]{8}$/, // inicia en 9 con 9 cifras
	usuario: /^[a-zA-Z0-9\_]{4,16}$/, // de 4 a 16 digitos-solo numero, letra y guion abajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // texto normal hasta 20 digitos
	password: /^.{6,20}$/, // 4 a 12 digitos---para ambas contraseñas
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //usuario texto normas mas simbolo @ 
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault();   //No limpiar secciones
});

//en funciones (validardatos y contraseñas)
const campos = {
	celular: false,
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validacionDatos(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validacionDatos(expresiones.nombre, e.target, 'nombre');
		break;
		case "password1":    //crear otra funcion
			validacionDatos(expresiones.password, e.target, 'password1');
			validacionContrass();
		break;
		case "password2":
			validacionContrass();
		break;
		case "correo":
			validacionDatos(expresiones.correo, e.target, 'correo');
		break;
		case "celular":
			validacionDatos(expresiones.celular, e.target, 'celular');
		break;
	}
}
//validar ---
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

const validacionDatos = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`seccion__${campo}`).classList.remove('seccionformulario-incorrecto');
		document.getElementById(`seccion__${campo}`).classList.add('seccionformulario-correcto');
		document.querySelector(`#seccion__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#seccion__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#seccion__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`seccion__${campo}`).classList.add('seccionformulario-incorrecto');
		document.getElementById(`seccion__${campo}`).classList.remove('seccionformulario-correcto');
		document.querySelector(`#seccion__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#seccion__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#seccion__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
//Funcion-acceder a datos html --agregar a la Funcion(ValidarFormulario)
const validacionContrass = () => {  
	const inputPassword1 = document.getElementById('password1');
	const inputPassword2 = document.getElementById('password2');
    //Validar condiciones iguales para ambas contraseñas
	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`seccion__password2`).classList.add('seccionformulario-incorrecto');
		document.getElementById(`seccion__password2`).classList.remove('seccionformulario-correcto');
		document.querySelector(`#seccion__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#seccion__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#seccion__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password1'] = false;
	} else {
		document.getElementById(`seccion__password2`).classList.remove('seccionformulario-incorrecto');
		document.getElementById(`seccion__password2`).classList.add('seccionformulario-correcto');
		document.querySelector(`#seccion__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#seccion__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#seccion__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password1'] = true;
	}
}




