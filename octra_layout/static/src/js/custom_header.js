$(document).ready(function(){ 
	//Scroll up 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollup-div').fadeIn();
		} else {
			$('.scrollup-div').fadeOut();
		}
	}); 
	
	$('.scrollup-div').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});
	
	// category_wise_search_js
	$("a.categ").click(function(){
		var name = $(this).attr("data-name")
		var id = $(this).attr("data-id")
		$(".js_categ").html(name)
		$(".js_categ_id").val(id)
		$("input.oe_search_box").attr("placeholder","Search in "+ name)
	})
	
	$('.show-more').on("click", function(e){
		$(this).next('ul.expand-div').toggle();
		$(this).next('ul.dropdown-menu').toggle();
		e.stopPropagation();
		e.preventDefault();
		
		$(this).css("outline","0");
		
		var clicks = $(this).data('clicks');
		  if (clicks) {
			 $(this).removeClass("fa-chevron-down").addClass("fa-chevron-right");
		  } else {
			 $(this).removeClass("fa-chevron-right").addClass("fa-chevron-down");
		  }
		  $(this).data("clicks", !clicks);
	});
	
	//Static Menu
	$("#top_menu li div div.oe_structure").each(function(){
		var curr_menu = $(this)
			curr_menu.parent().addClass("dropdown-menu dyn_menu");
			curr_menu.parent().closest("li").removeClass("active").addClass("static-menu-li ");
			curr_menu.parent().closest("li").find("a").first().addClass("dropdown-toggle");
			curr_menu.parent().closest("li").find("a").first().attr("data-toggle", "dropdown");
			var carettag = curr_menu.parent().closest("li").find("a").first().find("span");
			carettag.addClass("caret-menu")
	})
	
	$("span.caret-menu").after("<span class='caret'></span>");
	$(".static-menu-div-maxw").parent(".static-menu-div").addClass("dropdown-menu");
	$(".static-menu-div-maxw").closest("li").removeClass("active").addClass("static-menu-li");
	$(".static-menu-div-maxw").closest("li").find("a").first().addClass("dropdown-toggle");
	$(".static-menu-div-maxw").closest("li").find("a").first().attr({"data-toggle":"dropdown","href":"#"});
	
	$(".dynamic_active_inactive").closest("li").removeClass("active").addClass("all-categ-li");
	$(".dynamic_active_inactive").closest("li").find("a").first().addClass("dropdown-toggle");
	$(".dynamic_active_inactive").closest("li").find("a").first().attr({"data-toggle":"dropdown","href":"#"});
	
	$(".static-menu-div-maxw").closest("li").find("a").first().find("span").after("<span class='caret'></span>");
	$(".dynamic_active_inactive").closest("li").find("a").first().first().find("span").after("<span class='caret'></span>");
	
	if ($(window).width() > 1200) {
	// Header Stick
		var login_class = $('#oe_main_menu_navbar');
		var navbarheight = $('#oe_main_menu_navbar').height();
		var rightBox = $('.navbar-static-top');
		if(rightBox.length > 0)
		{
			var x = rightBox.offset();
			var navPos = x.top;
			if(login_class)
			{
				$(window).scroll(function() {
					var scrollPosition = $(this).scrollTop();
					if (scrollPosition >= navPos) {
						rightBox.addClass("header-stick");
						rightBox.css("top", + navbarheight);
						rightBox.css({"margin-top":"0px"});
					} else {
						rightBox.removeClass("header-stick");
						rightBox.css({"margin-top":"0px","top":"0"});
					}
				});
			}else{
				rightBox.css({"top": "0"});
			}
		}
		
		// Adjust Menu (dropdown open left or right depending on window size)
		$(".category-ul li").mouseover(function(){
			var parent = $(this);
			var child_menu = $(this).children("ul");
			var sub_child_menu = $(child_menu).find("li").children("ul");
			if( $(parent).offset().left + $(parent).width() + $(child_menu).width() + $(sub_child_menu).width() > $(window).innerWidth() ){
				$(child_menu).css("left", "-" + $(parent).width() + "px");
				$(sub_child_menu).css("left", "-" + $(parent).width() + "px");
			}else{
				
			}
		});
	}
	
	$('.srch_icon').click(function(){
		
			$('.header-search-div').css({"width":"200px","opacity":"1"});
			$('.header-search-div .oe_search_button').css({"display":"block"});
			$('.srch_icon').css("display","none");
			$('.close_icon').css("display","inline-block");
		})
	$('.close_icon').click(function(){
			$('.header-search-div').css({"width":"0","opacity":"0"});
			$('.header-search-div .oe_search_button').css({"display":"none"});
			$('.srch_icon').css("display","inline-block");
			$('.close_icon').css("display","none");
	})
	
});
