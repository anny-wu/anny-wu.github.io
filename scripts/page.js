$(document).ready(function () {
  chooseTab();
  scrollHandle();
});

//Set active tab when click on the link
function chooseTab() {
  $("#a").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#r").removeClass("active");
      $("#p").removeClass("active");
    }
  });

  $("#r").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#a").removeClass("active");
      $("#p").removeClass("active");
    }
  });
  
  $("#p").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#r").removeClass("active");
      $("#a").removeClass("active");
    }
  });
}

//Set active tab when scrolling through the web
function scrollHandle(){
    	$(window).scroll(function () {
        var Scroll = $(window).scrollTop(), 
          SectionOneOffset = $("#about").offset().top - 300,
          SectionTwoOffset = $("#resume").offset().top - 300,
          SectionThreeOffset = $("#projects").offset().top - 300; 

        if (Scroll >= SectionOneOffset && Scroll < SectionTwoOffset) {
          $("#a").addClass("active");
          $("#r").removeClass("active");
          $("#p").removeClass("active");
        }
        else if (Scroll >= SectionTwoOffset && Scroll < SectionThreeOffset) {
          $("#r").addClass("active");
          $("#a").removeClass("active");
          $("#p").removeClass("active");
        } else if (Scroll >= SectionThreeOffset) {
          $("#p").addClass("active");
          $("#r").removeClass("active");
          $("#a").removeClass("active");
        }

      });
}


