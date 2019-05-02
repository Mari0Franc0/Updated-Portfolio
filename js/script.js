$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false
  });
  var typed = new Typed(".typed", {
    strings: ["Full Stack Developer.", "Student."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 4,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    938: {
      items: 4
    }
  }
});

$(".chart").easyPieChart({
  easing: "easeInOut",
  barColor: "#fff",
  trackColor: false,
  scaleColor: false,
  lineWidth: 4,
  size: 152,
  onStep: function(from, to, percent) {
    $(this.el)
      .find(".percent")
      .text(Math.round(percent));
  }
});

$("[data-fancybox]").fancybox();

$(".items").isotope({
  filter: "*",
  animationOptions: {
    duration: 1500,
    easing: "linear",
    queue: false
  }
});

$("#filters a").click(function() {
  $("#filters .current").removeClass("current");
  $(this).addClass("current");

  var selector = $(this).attr("data-filter");

  $(".items").isotope({
    filter: selector,
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  return false;
});
