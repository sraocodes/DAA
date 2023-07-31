var slideIndex = 0;
var slideTimer;

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = $(".mySlides");
  if (slides.length > 0) {
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    } else {
      slideIndex = n;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
  slideTimer = setTimeout(function () {
    plusSlides(1);
  }, 3000); // Change slide every 3 seconds
}

$(document).ready(function() {
  showSlides(1);

  $(".prev").on("click", function() {
    plusSlides(-1);
  });

  $(".next").on("click", function() {
    plusSlides(1);
  });
});
