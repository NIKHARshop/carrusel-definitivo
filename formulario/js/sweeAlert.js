
function escucharEventos(){
 document.addEventListener('blur', validarInformacion)


btnreset.addEventListener('click', resetearFormulario)
formulario.addEventListener('submit', enviarFormulario)
}



swal.fire({
    
    title: 'ESTAS POR HACER UN PEDIDO DE ',
    text:' 4 CUBRE PERILLAS PARA ESTUFA Y HORNO DE GAS',
    imageUrl:'https://i.ibb.co/NLYCvV4/photo-2023-04-07-20-01-33.jpg',
    width: 600,
    padding:'3em',
    imageAlt: 'row',
    confirmButtonText:'CORRECTO',
    grow: 'row',
    buttons:'true'
})
Swal.bindClickHandler()

Swal.mixin({
  toast: true,
  title: 'GRACIAS POR PREFERIRNOS',
  text:'RECIIRAS UN MENSAJE POR WHATSAPP CONFIRMANDO TU PEDIDIDO',
  imageUrl:'https://i.ibb.co/LJZCL7B/leon-4-copia.png',
  width: 600,
  padding:'3em',
  imageAlt: 'row',
 // confirmButtonText:'CORRECTO',
  grow: 'row',
  buttons:'true'
}).bindClickHandler('data-swal-toast-template')