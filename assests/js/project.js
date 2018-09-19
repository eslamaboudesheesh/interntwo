



/* start active links   in nav bar */
$('.links li').click(function(){

$(this).addClass('active').siblings().removeClass('active');
	
});

/*
$('.sliders  .item2 i').mouseover(function(){

$('.slider img').addClass('hvr-bounce-in').siblings().removeClass('hvr-bounce-in');
	
});
*/

/* make  animation in toggale buttton */ 
$(function() {
    mobileNav();
});

function mobileNav() {
  $('.navbar-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ 
        $('.navbar-toggle').removeClass('is-open');
     }
    else {
         $('.navbar-toggle').addClass('is-open');
         }
  });
}