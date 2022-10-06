$(document).ready(function () {
    chooseTab();
});

//Add yellow border to the selected difficulty level
function chooseTab() {
  $("#a").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).toggleClass("active");
      $("#r").removeClass("active");
      $("#p").removeClass("active");
    }
  });

  $("#r").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).toggleClass("active");
      $("#a").removeClass("active");
      $("#p").removeClass("active");
    }
  });
  
  $("#p").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).toggleClass("active");
      $("#r").removeClass("active");
      $("#a").removeClass("active");
    }
  });
}


