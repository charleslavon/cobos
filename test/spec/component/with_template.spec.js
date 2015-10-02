'use strict';
define(['templates/templates'], function(templates) {
describeMixin('component/with_template', function () {
	
	
	
  // Initialize the component and attach it to the DOM
  beforeEach(function () {
	
	     
	  
    this.setupComponent();
  });
  
  it('should be defined', function () {
	    expect(this.component).toBeDefined();
	  });
  
 it('verify the expected initial state of the default attributes', function() {
	  
      expect(this.component.attr.cssLink).toBe("bower_components/bootcards/css/bootcards-android.min.css");
      expect(this.component.attr.cssLinkSelector).toBe(".swapStyles");
     
  });
 
xit('should render the specific page',function(){
	 var tplName={};
	     tplName['mock'];
	 var tplData={test:"tester"};
     var tplSelector="appContainer";
	 var tplContent="<div> tester</div>"
     
	 this.component.renderView(tplName, tplData, tplSelector);
	 
	  expect(tplContent).toHaveText('<div>tester</div>');
 });
 
 it('should have only the expected attributes', function() {
	  	expect(hasUnexpectedAttributes(this.component.attr)).toBe(false);
});
 
 


  it('should exist',function(){
	  expect(this.component).toExist();
  });



  function hasUnexpectedAttributes(attrObj) {
     var expectedAttrs = {
    		cssLink: 1,
    		cssLinkSelector: 1,
  	 
     };

     var containsUnexpected = false;

     Object.getOwnPropertyNames(attrObj).forEach(function(attr) {
         containsUnexpected = expectedAttrs[attr] == undefined ? true : false;
     });

     return containsUnexpected;
    }
  });
});

