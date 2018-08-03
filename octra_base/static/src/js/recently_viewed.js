$(document).ready(function(){
	$('.owl-carousel.recentbx').owlCarousel({
	 
		loop:false,
	    margin:10,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    
	    responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:2
	        },
	        800:{
	        	items:3
	        },
	        1000:{
	            items:4
	        }
	    }
  });
	/*$('.bx-pager').css("display","none");*/
	var $applyied_sldier = $(".owl-carousel");
	if($applyied_sldier){
	var a = $(".recently_viewed_for_products").find("img").width();
	$(".recently_viwed_details").css("width",a);
};

	var suggest_count = $('.suggest_count').html();
	if(suggest_count > 2){
		$('#suggested_item_product > .owl-carousel').owlCarousel({
			loop:false,
		    margin:10,
		    nav:true,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		  });
		/*  $('.bx-pager').css("display","none");*/
	}
});
	