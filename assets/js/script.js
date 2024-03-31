//Script ToolTip Bootstrap 5.0

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//Agregar propiedades de Smoth Scroll

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//Boton submit del formulario

const formulario = document.getElementById('formulario1');

formulario.addEventListener('submit', function(event){
  event.preventDefault();

  const nombre = document.getElementById('inputNombre').value.trim();
  const asunto = document.getElementById('inputAsunto').value.trim();
  const mensaje = document.getElementById('inputMensaje').value.trim();

    if(nombre ==='' || asunto ==='' || mensaje ===''){
      alert('Por favor, complete todos los campos del formulario.');
      formulario.reset();
    } else {
      formulario.submit();
      alert('¡' + nombre.toUpperCase() + ', El mensaje se ha enviado exitosamente!');
      formulario.reset();
    }
});