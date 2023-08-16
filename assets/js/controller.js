function moverImagen(event) {
    var contenedor = document.getElementById('contenedor');
    var imagen = document.getElementById('imagen');
    
    var contenedorRect = contenedor.getBoundingClientRect();
    var mouseX = event.clientX - contenedorRect.left;
    var mouseY = event.clientY - contenedorRect.top;
    
    var imagenX = (mouseX / contenedorRect.width - 0.5) * 20;
    var imagenY = (mouseY / contenedorRect.height - 0.5) * 20;
    
    imagen.style.transform = 'translate(' + imagenX + 'px, ' + imagenY + 'px)';
  }


let mainNav = document.querySelector('.main-nav');
let centerNav = document.querySelector('.center-nav');
let finalNav = document.querySelector('.final-nav');

mainNav.innerHTML += `<div id="bot-nav" class="row d-none">
${centerNav.innerHTML}    
<div class="col d-flex justify-content-center ">
${finalNav.innerHTML} 
</div>  
 
</div>`



//RESIZE FUNCTION

window.addEventListener('resize', function() {
  let openNav = document.getElementById('bot-nav');
  var screenWidth = window.innerWidth;

  if (screenWidth > 992) {
    // Si el ancho de la pantalla es mayor a 545px
    document.getElementById('bot-nav').classList.add('d-none');
  } else{
    // Si el ancho de la pantalla es menor o igual a 545px
    document.getElementById('bot-nav').classList.remove('d-none');
    openNav.style.backgroundColor = '#2d2e32'
    openNav.classList.add('d-none');
  }
});

var open = false;

//BUTTON HAMBURGUER FUNCTION
function openNav(){
  let openNav = document.getElementById('bot-nav');
    //OPEN HAMBURGUER
    if (this.open === false){
      openNav.style.backgroundColor = 'rgb(37, 37, 37)'
      
      openNav.classList.remove('d-none');
      
      open = true;
     
  this.open = true;
  }else {
    //CLOSE HAMBURGUER
      open = false;

      async function esperar() {
        await new Promise(resolve => setTimeout(resolve, 220)); // Esperar 0.3 segundos
        openNav.style.backgroundColor = '#2d2e32'
        openNav.classList.add('d-none');
      }
      
      esperar();
      
  }
  async function esperar() {
    await new Promise(resolve => setTimeout(resolve, 0.5)); // Esperar 0.3 segundos
    openNav.classList.toggle('mostrar');
  }
  esperar();
}

//NAVBAR FIXED
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.main-nav');
  var sectionHero = document.querySelector('.contact-me');
  
  if (window.pageYOffset >= sectionHero.offsetTop + sectionHero.offsetHeight) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
});


function home(){
  let openNav = document.getElementById('bot-nav');
  window.location.href = "#";
  if (openNav.classList.contains('mostrar')) {
    this.closef();
  }
  
}

//Carrousel
// Obtener elementos del DOM
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.querySelector('.arrow-prev');
const nextBtn = document.querySelector('.arrow-next');

// Configuración inicial
let slideIndex = 0;
const slideWidth = sliderContainer.offsetWidth;

// Ajustar el ancho de los slides
slides.forEach((slide) => {
  slide.style.width = `${slideWidth}px`;
});

// Ajustar el ancho del slider
slider.style.width = `${slideWidth * slides.length}px`;

// Event listeners para las flechas
prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Función para mostrar el slide anterior
function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSliderPosition();
}

// Función para mostrar el siguiente slide
function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSliderPosition();
}

// Función para actualizar la posición del slider
function updateSliderPosition() {
  const offsetX = -slideIndex * slideWidth;
  slider.style.transform = `translateX(${offsetX}px)`;
}



function closef(){
  // Obtener el ancho de la ventana del navegador
        var anchoVentana = window.innerWidth;

        // Verificar si el ancho es mayor o igual a 992 píxeles
        if (anchoVentana >= 992) {
            // Acciones a realizar si el ancho es mayor o igual a 992 píxeles
            console.log("El ancho de la ventana es mayor o igual a 992 píxeles.");
        } else {
            this.openNav();
        }
        
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

//Send Email
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_jnz0vha';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});