//learnmore button jump-to directions and actions
$(document).ready(function(){
  $(".learnmore-button").click(function(){
    $path=$("#whatwedo").offset().top;
    $('body').animate({scrollTop:$path},1000);
  });
});