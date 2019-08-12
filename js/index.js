$(".cardLink").click(function(){
  alert("Project update coming soon!");
});

$(document).ready(function() {
  $('.caseStudy').click(function(event) {
    $('body, html').animate({
      scrollTop: $("#case").offset().top
    }, 600);

  });
});
