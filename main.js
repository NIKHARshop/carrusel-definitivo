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
    *NOMBRE*%0A${Nombre.value}*%0A*CELULAR**%0A${Celular.value}*%0A*CORREO**%0A${Email.value}*%0A*DEPARTAMENTO**%0A${Departamento.value}*%0A*CIUDAD**%0A${Ciudad.value}*%0A*MUNICIPIO**%0A${Municipio.value}*%0A*LOCALIDAD**%0A${Localidad.value}*%0A*BARRIO**%0A${Barrio.value}*%0A*DIRECCIÓN**%0A${Dirección.value}*%0A*CÓDIGO**%0A${Código.value}*%0A*OBSERVACIONES**%0A${Observaciones.value}`;
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
