/*https://api.whatsapp.com/send?phone=(codigo pais)(codigo de area)(numero sin el 15)&text=*/
/* Espacio : %20  ``*/


/* Traer los inputs */
/* Crear funcion añadiendo el valor correspondiente a la variable mensaje */


const Nombre = document.querySelector('#Nombre');
const Celular = document.querySelector('#Celular');
const Email = document.querySelector('#Email');
const Departamento = document.querySelector('#Departamento');
const Ciudad = document.querySelector('#Ciudad');
const Municipio = document.querySelector('#Municipio');
const Localidad = document.querySelector('#Localidad');
const Barrio = document.querySelector('#Barrio');
const Dirección = document.querySelector('#Dirección');
const Código = document.querySelector('#Código');
const Observaciones = document.querySelector('#Observaciones');
const btnEnviar = document.querySelector('#btnEnviar');


var mensaje;

function enviar (){
    mensaje = `https://api.whatsapp.com/send?phone=573197660129&text=
    *NOMBRE*%20
    ${Nombre.value}%20
    *CELULAR*%20
    ${Celular.value}%20
    *CORREO*%20
    ${Email.value}%20
    *DEPARTAMENTO*%20
    ${Departamento.value}%20
    *CIUDAD*%20
    ${Ciudad.value}%20
    *MUNICIPIO*%20
    ${Municipio.value}%20
    *LOCALIDAD*%20
    ${Localidad.value}%20
    *BARRIO*%20
    ${Barrio.value}%20
    *DIRECCIÓN*%20
    ${Dirección.value}%20
    *CÓDIGO*%20
    ${Código.value}%20
    *OBSERVACIONES*%20
    ${Observaciones.value}`;
    btnEnviar.href= mensaje;
}
