let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

if(window.screen.width >= 900){
  const slideContainer = document.getElementById('slideshow-container');

  slideContainer.addEventListener('click', (event) => {
    if(event.clientX < slideContainer.clientWidth / 2) {
      plusSlides(-1);
      console.log('left');
    } else {
      plusSlides(1);
      console.log('right');
    }
  });
}

document.addEventListener('keydown', (event) => {
    if(event.keyCode == 37) {
      plusSlides(-1);
    } else if(event.keyCode == 39) {
      plusSlides(1);
    }
  });