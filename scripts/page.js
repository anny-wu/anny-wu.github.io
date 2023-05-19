let slideIndex = 1;

$(document).ready(function () {
  languageSwitch();
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

function languageSwitch() {
    $("[lang]").hide();
    $('[lang="en"]').show();
  $("#langSwitch").change(function () {
      if ($(this).prop("checked")) {
        $("[lang]").hide();
        $('[lang="en"]').show();
      } else {
        $("[lang]").hide();
        $('[lang="zh"]').show();
      }
    });
}

function vh(percent) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (percent * h) / 100;
}

//Set active tab when scrolling through the web
function scrollHandle(){
    	$(window).scroll(function () {
        var Scroll = $(window).scrollTop(),
          SectionOneOffset = $("#about").offset().top - vh(20),
          SectionTwoOffset = $("#resume").offset().top - vh(20),
          SectionThreeOffset = $("#projects").offset().top - vh(20);
        SectionFourOffset = $("#slideshow").offset().top - vh(20);
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
