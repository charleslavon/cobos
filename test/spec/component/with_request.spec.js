'use strict';

describeMixin('component/with_request', function () {

	
  // Initialize the component and attach it to the DOM
  beforeEach(function () {
	  
    var request;
        request = null;
        
  
     jasmine.Ajax.install();
     
 
     
     this.setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });


  it('should make a REST call ', function() {

	  var url ='http://localhost:9876/context.html';
	  var responseData={
	     		username:'admin',
	     		roles:[{authority:"ROLE_ADMIN"}]
	     		
	       };
      var spyEvent = spyOnEvent(document, 'UiNeedsResponseData');
     
      //launch the test
      this.component.handleRestCall();

      //setup ajax mock
      expect(jasmine.Ajax.requests.mostRecent().url).toBe(url);

      jasmine.Ajax.requests.mostRecent().respondWith({
          "status": '200',
          "contentType": 'text/json',
          "responseText": responseData
      });
      
      this.component.trigger(document, 'UiNeedsResponseData',responseData);
      
      expect(responseData.username).toBe('admin');
      expect(spyEvent).toHaveBeenTriggered();

  });
  

 
 
 afterEach(function() {
     jasmine.Ajax.uninstall();
 });
  

});