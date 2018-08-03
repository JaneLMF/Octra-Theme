odoo.define('gallery.snippets_editor', function (require) {
'use strict';
var ajax = require('web.ajax');
var core = require('web.core');
var base = require('web_editor.base');
var widget = require('web_editor.widget');
var animation = require('website.content.snippets.animation');
var options = require('web_editor.snippets.options');
var snippet_editor = require('web_editor.snippet.editor');
var website = require('website.website');

var _t = core._t;
var qweb = core.qweb;

options.registry.js_get_gallery = options.Class.extend({
	drop_and_build_snippet: function(){
	      var self = this;
	      if (!self.$target.data('snippet-view')) {  	  
	        this.$target.data("snippet-view", new website.snippet.animationRegistry.js_get_gallery(this.$target));
	      }
	    },
	    clean_for_save:function(){
		      this.$target.empty();
	    }	
	});

});
