odoo.define('octra_gallery.static_snippets_animation_portfolio', function (require)
{
'use strict';
var ajax = require('web.ajax');
var core = require('web.core');
var base = require('web_editor.base');
var animation = require('website.content.snippets.animation');
var no_of_product;
var qweb = core.qweb;

animation.registry.js_get_gallery = animation.Class.extend
({
    selector : ".js_get_gallery",
    start: function()
    {
      this.redrow();
    },
    stop: function(){
      this.clean();
    },

    redrow: function(debug)
    {
      this.clean(debug);
      this.build(debug);
    },

    clean:function(debug){
      this.$target.empty();
    },
    	
    
    build: function(debug)
    {
    	var self = this;
    	function load_imgs()
   	 	{
	       	 $(".ctg_img_a").click(function()
	       	 {
	       		 $('.cus_theme_loader_layout').removeClass('hidden');
	    			 var curr_click=$(this);
	    			 var curr_click_id=curr_click.attr("data-id");
	    			 ajax.jsonRpc('/project_images', 'call', {'image_id':curr_click_id}).then(function(data) 
	    	    			{		
	    				 		var script=document.createElement('script');
	    				 		script.type='text/javascript';
	    				 		script.src="/octra_gallery/static/src/js/simple-lightbox.js";
	    				 		$("script[src='/octra_gallery/static/src/js/simple-lightbox.js']").remove()
	    			   	   		$("head").append(script);	    
	    	    				$('.cus_theme_loader_layout').addClass('hidden');
	    	    				$(".gallery").html(data)
	    	    				var $lightbox = $('.gallery a').simpleLightbox();
	    	    				$lightbox.open($('.gallery a'));
	    	    				$(document).on( 'keydown', function(e)
	    	    				{
        				    		if(e.keyCode === 27) 
        				    		{
        				    			if(data)
        				    			{
        				    				$("script[src='/octra_gallery/static/src/js/simple-lightbox.js']").remove()
        				    			}
        				    		}
	    	    				})
	    	    				$(".sl-close").click(function(){
									$("script[src='/octra_gallery/static/src/js/simple-lightbox.js']").remove()
	    	    				})
	    	    				$(".sl-overlay").click(function(){
								   $("script[src='/octra_gallery/static/src/js/simple-lightbox.js']").remove()
	    	    				})
	    	    		})
	       	 });
   	 	}
        ajax.jsonRpc('/gallery/catg/render', 'call', {}).then(function(objects) 
        {
        	$(objects).appendTo(self.$target);
        	var id=self.$target.find(".filter_static_title:first").attr("data-id")
			ajax.jsonRpc('/gallery/data/render', 'call', {'id':id}).then(function(data) 
			{		
					 $(".gallery_data").html(data)
					 $(".headline_tab a.active_tab").removeClass("active_tab"); 
					 $(this).addClass("active_tab");
					 load_imgs()
					 
			})
			 $(".filter_gallery_title").click(function()
			 {
				$('.cus_theme_loader_layout').removeClass('hidden');
    			var curr_tag=$(this);
    			var curr_tag_id=curr_tag.attr("data-id");
    			$(".filter_gallery_title").removeClass("active_tab")
    			curr_tag.addClass("active_tab")
    			ajax.jsonRpc('/gallery/data/render', 'call', {'id':curr_tag_id}).then(function(data) 
    			{		
    				$('.cus_theme_loader_layout').addClass('hidden');
    				$(".gallery_data").html(data)	
    				load_imgs()
    				
    				 $(".common_class_to_show").addClass("zoom-animation");
    			 setTimeout(function(){
    					$(".common_class_to_show").removeClass("zoom-animation");
    				},500);
    			})
    			
			 });
        	 
        });
    }    
	});
});
