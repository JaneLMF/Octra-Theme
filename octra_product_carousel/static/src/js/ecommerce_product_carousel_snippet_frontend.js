odoo.define('octra_product_carousel.snippets.animation', function (require) {
'use strict';
// First Execute
var ajax = require('web.ajax');
var core = require('web.core');
var base = require('web_editor.base');
var utils = require('web.utils');
var animation = require('website.content.snippets.animation');
var no_of_product;
var qweb = core.qweb;
/*-------------------------------------------------------------------------*/
animation.registry.js_get_objects = animation.Class.extend({
    selector : ".js_get_objects",

    start: function(){
      this.redrow();
    },
    stop: function(){
      this.clean();
    },

    redrow: function(debug){
      this.clean(debug);
      this.build(debug);
    },

    clean:function(debug){
      this.$target.empty();
    },
    
    
    apply_bxslider:function(debug,objects_in_slide){
    	var self = this;
    	var bxsliderCount = 0;
    	
    	$(".product_carousel_slider").each(function () {
    		
			create_slider(objects_in_slide)
			bxsliderCount++;
    	});
    },
    
    build: function(debug)
    {
      var self = this,
      limit    = self.$target.data("objects_limit"),
      filter_id  = self.$target.data("filter_by_filter_id"),
      objects_in_slide = self.$target.data("objects_in_slide"),
      c_type = self.$target.data("c_type"),
      style = self.$target.data("style"),
      object_name = self.$target.data("object_name"),
      custom_controller = self.$target.data("custom_controller"),
      template = self.$target.data("template");
      $("#wait").css("display", "block");
      self.$target.attr("contenteditable","False");
      if(!objects_in_slide)objects_in_slide = 4;
      if(!c_type)c_type = 0;	
      if(!limit)limit = 10;
      if(!filter_id)filter_id = false;
      if(!template) template = 'octra_product_carousel.product_carousel_snippet_heading';
	  var rpc_end_point = '/ecommerce_product_carousel_snippets/render';
	  
      
      ajax.jsonRpc(rpc_end_point, 'call', {
        'template': template,
        'filter_id': filter_id,
        'objects_in_slide' : objects_in_slide,
        'limit': limit,
        'object_name':object_name,
      }).then(function(objects) { //dispcompare()
    	  $(objects).appendTo(self.$target);	
    	  self.apply_bxslider(objects,objects_in_slide); 
    	  
    	  $("script[src='/octra_rating/static/src/js/rating_script.js']").remove()	
		  if($( "div" ).hasClass("shop_rating" ))
		  {	 
		  		var rating_script=document.createElement('script');	    
		  		rating_script.type='text/javascript';	    
		  		rating_script.src="/octra_rating/static/src/js/rating_script.js";
		  		$("head").append(rating_script);
		  }
    	  
      }).then(function(){
    	  self.loading(debug);
      }).fail(function(e) {
        return;
      });
    },
    
    loading: function(debug){
    	//function to hook things up after build    	
    }
});
	
});
