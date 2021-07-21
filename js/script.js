$(".with-effect").change(function(){
  if($(this).val() != ""){
    $(this).addClass("has-content");
  }else{
    $(this).removeClass("has-content");
  }
});


$(document).ready(function(){
	if ($(window).width() <= 997){
        $('#nav-icon').click(function(){
			$(this).toggleClass('open');
			$('.nav-menu').toggle();
			$('.menu-block').toggleClass('p-3');
		});

		$('.search-input-block').click(function(){
			$('#search-sm-input').toggleClass('search-open');
			$('#search-input-block').toggleClass('sm');
		});

		$('.back-menu').click(function(){
			$(this).addClass('opened');
			$('.back').removeClass('d-none');
		});

		$('.back-sub-menu').click(function(){
			$(this).addClass('opened');
			$('.sub-back').removeClass('d-none');
		});

		$(document).on( "click", ".back", function() {
		    $('.back-menu').removeClass('opened');
			$(this).addClass('d-none');
		});

		$(document).on( "click", ".sub-back", function() {
		    $('.back-menu').removeClass('opened');
		    $('.back-sub-menu').removeClass('opened');
			$(this).addClass('d-none');
		});
    }


	$('.has-submenu').click(function(){
		$('.has-submenu').removeClass('opened');
		$('.left-sub-menu').removeClass('d-block');
		$(this).toggleClass('opened');
		$('.opened .left-sub-menu').addClass('d-block');
	});


});

function eventHandler() {
    var scroll = $(window).scrollTop();

    if (scroll > 90) {
        $("header").addClass("position-fixed");
    }
    else{
        $("header").removeClass("position-fixed");
    }
}

$(document).ready(eventHandler);
$(window).on("scroll", eventHandler);