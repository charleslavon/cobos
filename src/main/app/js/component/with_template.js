/** 
  @author: 
  @description: Template rendering mixin - handles the rendering of all the templates in the app.

  @required param:html file name [templateName], Template hook selector
  @optional Data: Template Data [The content which is usually response data from the server]

  @Additional Info: 

 **/

define(function(require) {

    'use strict';

    /**
     * Module exports
     */

    /** global variables */
    var templates = require('templates/templates');


    /**
     * Module function
     */

 

    function withTemplate() {
    	
    	this.defaultAttrs({
    		cssLink:"bower_components/bootcards/css/bootcards-android.min.css",
    		cssLinkSelector:".swapStyles"
    	});


        this.renderView=function(templateName,tplData,tplSelector){
        	
        	var tplContents=templates[templateName].render(tplData);
        	this.select(tplSelector).html(tplContents);
        };

        
        // the link to the appropriate mobile theme is swapped before renderView is initiated
        this.before('renderView',function(){
    		var androidCssUrl,
    		    deviceAgent=navigator.userAgent.toLowerCase();
    	
    	    if(deviceAgent.match(/android/i)){
    			androidCssUrl=this.attr.cssLink;
    			this.select('cssLinkSelector').attr("href",androidCssUrl);
    		}
    			
        });
     


    }

    return withTemplate;

});
