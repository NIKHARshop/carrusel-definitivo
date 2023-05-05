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
    *NOMBRE*${Nombre.value}*CELULAR*${Celular.value}*CORREO*${Email.value}*DEPARTAMENTO*${Departamento.value}*CIUDAD*${Ciudad.value}*MUNICIPIO*${Municipio.value}*LOCALIDAD*${Localidad.value}*BARRIO*${Barrio.value}*DIRECCIÓN*${Dirección.value}*CÓDIGO*${Código.value}*OBSERVACIONES*${Observaciones.value}`;
    btnEnviar.href= mensaje;

    if (nombre === '' || celular === '' || correo === '' ) {
        resp.classList.add('fail');
        resp.innerHTML = `Faltan algunos datos, ${nombre} ${celular} ${correo} ${departamento} ${localidad} ${barrio}
        ${dirección}`;
        return false;
      }
      resp.classList.remove('fail');
      resp.classList.add('send');
      resp.innerHTML = `TUS DATOS SE ENVIARON CON ÉXITO, ${nombre}`;
    
      window.open(url);
      window.alert('TUS DATOS SE ENVIARON CON ÉXITO');
     
}
