let slideIndex = 1;

$(document).ready(function () {
  scrollHandle();
  backTop();
  $(".nav-link").click(function () {
    $("#navbarToggler").collapse("hide");
  });
  $(".nav-link").on("click", function () {
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//Set active tab when scrolling through the web
function scrollHandle(){
    	$(window).scroll(function () {
        var Scroll = $(window).scrollTop(),
          SectionOneOffset = $("#about").offset().top,
          SectionTwoOffset = $("#resume").offset().top,
          SectionThreeOffset = $("#projects").offset().top;
        SectionFourOffset = $("#slideshow").offset().top;
        if (Scroll < SectionTwoOffset) {
          $("#backtop").css("display", "none");
        } else {
          $("#backtop").css("display", "block");
        }
        if (Scroll < SectionTwoOffset) {
          $(".navbar").find(".active").removeClass("active");
          $("#a").addClass("active");
        } else if (Scroll >= SectionTwoOffset && Scroll < SectionThreeOffset) {
          $(".navbar").find(".active").removeClass("active");
          $("#r").addClass("active");
        } else if (Scroll >= SectionThreeOffset && Scroll < SectionFourOffset) {
          $(".navbar").find(".active").removeClass("active");
          $("#p").addClass("active");
        }
        else {
            $(".navbar").find(".active").removeClass("active");
            $("#g").addClass("active");
        }
      });
}

//Navigate back to the top of the page
function backTop() {
  $("#backtop").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
