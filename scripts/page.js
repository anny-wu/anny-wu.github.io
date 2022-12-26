let slideIndex = 1;

$(document).ready(function () {
  scrollHandle();
  backTop();
  
  showSlides(slideIndex);

  $("#prev").click(plusSlides(-1));
  $("#next").click(plusSlides(1));
});

//Set active tab when scrolling through the web
function scrollHandle(){
    	$(window).scroll(function () {
        var Scroll = $(window).scrollTop(), 
          SectionOneOffset = $("#about").offset().top - 320,
          SectionTwoOffset = $("#resume").offset().top - 320,
          SectionThreeOffset = $("#projects").offset().top - 320; 
          SectionFourOffset = $("#slideshow").offset().top - 320; 
        if (Scroll < SectionTwoOffset) {
            $("#a").addClass("active");
            $("#r").removeClass("active");
            $("#p").removeClass("active");
            $("#g").removeClass("active");
            $("#backtop").css("display", "none");
        } else if (Scroll >= SectionTwoOffset && Scroll < SectionThreeOffset) {
            $("#r").addClass("active");
            $("#a").removeClass("active");
            $("#p").removeClass("active");
            $("#g").removeClass("active");
            $("#backtop").css("display", "block");
        } else if (Scroll >= SectionThreeOffset && Scroll < SectionFourOffset) {
            $("#p").addClass("active");
            $("#r").removeClass("active");
            $("#a").removeClass("active");
            $("#g").removeClass("active");
            $("#backtop").css("display", "block");
        }
        else {
            $("#g").addClass("active");
            $("#r").removeClass("active");
            $("#a").removeClass("active");
            $("#p").removeClass("active");
            $("#backtop").css("display", "block");
        }

      });
}

//Show next or previous slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Navigate to slide
function showSlides(n) {
  let slides = $(".mySlides");
  let dots = $(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  $(slides).each(function () {
    $(this).css("display", "none");
  });
  
  $(dots).each(function () {
    $(this).removeClass("active");
  });

  $(slides[slideIndex - 1]).css("display", "block");
  $(dots[slideIndex - 1]).addClass(" active");
}

//Navigate back to the top of the page
function backTop() {
  $("#backtop").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}