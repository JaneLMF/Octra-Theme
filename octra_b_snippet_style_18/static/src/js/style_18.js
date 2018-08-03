$( window ).load(function() {
	 if ($(window).width() > 1000) {
		 $(".text_area_div").fadeTo("slow",1.0).css("transform","translate(-3em,0)");	 
		 $(".slide1_img1_div").fadeTo("slow",1.0).css("transform","translate(0,-3em)");
	 }
	 else
		 {
		 $(".text_area_div").fadeTo("slow",1.0).css({"transform":"unset","padding-left":"0"});
		 $(".slide1_img1_div").fadeTo("slow",1.0).css("transform","unset");
		 }
});
