var slideIndex = 0;
var slideTimer;

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = $(".mySlides");
  var dots = $(".dot");  // Add this line to select the dots

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

    // Start of new code
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex-1].className += " active";
    // End of new code

    slides[slideIndex - 1].style.display = "block";
  }
  
  slideTimer = setTimeout(function () {
    plusSlides(1);
  }, 10000); // Change slide every 10 seconds
}

$(document).ready(function() {
  showSlides(1);

  $(".prev").on("click", function() {
    plusSlides(-1);
  });

  $(".next").on("click", function() {
    plusSlides(1);
  });

  // New code to bind click events on dots
  $(".dot").on("click", function() {
    var dotIndex = $(".dot").index(this);
    showSlides(dotIndex + 1);
  });
});

// New code to bind click events on dots
$(".dot").on("click", function() {
  clearTimeout(slideTimer);
  var dotIndex = $(".dot").index(this);
  showSlides(dotIndex + 1);
});