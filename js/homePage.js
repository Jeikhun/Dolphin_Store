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
 $('.owl-carousel').owlCarousel({
    // loop: false,
//       margin: 0,
//       autoplay: false,
//       nav: true,
//       dots: true,
//       autoplayTimeout: 2000,
//       stagePadding: 0,
      loop: false,
      
      autoplay: false,
      margin: 90,
      nav: true,
      autoplayTimeout: 2000,
      navText: ["<div id='prev-arrowo' class='nav-button owl-prev'>‹</div>", "<div id='next-arrowo' class='nav-button owl-next'>›</div>"],
      stagePadding: 100,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 5
        }
      }
    });
    

