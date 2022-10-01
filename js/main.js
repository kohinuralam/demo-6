
jQuery(document).ready(function() {

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
	});

 	//collapse the sidebar
     $('.menu-btn').click(function(){
       $('.sidebar-menu').addClass('active');
       
     });

     $('.close-btn').click(function(){
       $('.sidebar-menu').removeClass('active');
     });







//main
});