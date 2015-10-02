/**
  @author: modigie
  @description: The mixin is responsible for making ajax calls to search, update and delete each specific service the user 
     is interacting  with.

  @required Data:url payload, method and request signature
  @optional Data:

  @Additional Info:

 **/
define(function(require) {

    'use strict';

    /**
     * Module dependencies
     */

  /**
   * Private functions
   * 
   */
   var targetBtns= $('#search_Btn,#j_addUser,#j_addPartnerId,#j_addVin,.portalBtn');
    
    function requestPending() {
     
        $('#ajaxLoader').removeClass('deactivate');
         targetBtns.addClass('disableBtns');
         targetBtns.attr('disabled',true);
        

    }

    function requestComplete() {
    	   $('#ajaxLoader').addClass('deactivate');
    	    targetBtns.removeClass('disableBtns');
    	    targetBtns.attr('disabled',false);
    	  
    }
    return withAjaxHandler;

    /**
     * Module exports
     */

   

    /**
     * Module function
     */

    function withAjaxHandler() {
        this.defaultAttrs({
        	searchInfoErrorSelector:".Search-info-error",
        	searchResultErrorText:"No results found.",
        	operationFailureText:"An error has occurred while trying to process your request. Please, try again later.",
        	spinnerSelector:'#ajaxLoader'
        });
    	
        
        this.handleSpinner=function(){
        	$.ajaxSetup({
      		   beforeSend:requestPending
      		});
        };
        
    	this.handleStatusMessage=function(validationCondition,DomMessageSelector,successMessageText,ErrorObjData){
    		if(validationCondition){
    			this.select(DomMessageSelector).html(successMessageText).removeClass('error').addClass('success');
    			
    		}
    		else{
    			this.select(DomMessageSelector).html(ErrorObjData.responseData.data).removeClass('success').addClass('error');
    		
    		}
    		// error messages from the server
    		 if((ErrorObjData.responseData.data == null || ErrorObjData.responseData == "") && !validationCondition ){
    			this.select(DomMessageSelector).html(this.attr.operationFailureText);
    		}  
    	};
    	
    	// processes the selected form 
    	this.handleFormData=function(clickedBtnSelector,selectedFormSelector,customEventName){
    	    var self=this;
    		this.select(clickedBtnSelector).click(function(e){
    			self.select(selectedFormSelector).submit(function(e){
    				 e.preventDefault();
    				 var formSignature=self.select(clickedBtnSelector).data('key');
        			 var  selectedFormData={};
                     selectedFormData.payload=self.select(selectedFormSelector).serialize();
                     selectedFormData.signature=formSignature;
                     
                     self.trigger(document,customEventName,selectedFormData);
    				
    			});
             	    
        	});
    	};
    	
    	//informs the user when there is no search result
    	this.handleNoSearchResult=function(){
    		return this.select('searchInfoErrorSelector').html(this.attr.searchResultErrorText);
    	};

      this.handleRestCall=function(requestURL,httpMethod,payloadData,reqSignature){
    	  
    	
    	  /**
    	   * the reqSignature will be the identifier to know which component is making the request such as the
    	     components responsible for the search operation or the CRU(D) operation of either the VIN, Partner ID or Subscriber
    	   * 
    	   */
    	  var reqSigObj={};
    	    reqSigObj.signature=reqSignature;
    	  var modifyRole=$('#login_details').text();
    	
    	  var that=this;
          $.ajax({
              beforeSend:function(e) {
                           requestPending();
              },
              url: requestURL,
              type: httpMethod,
              data: payloadData
          }).done(function(response){
        	  if(typeof response == 'object'){
        		  response.modifyEnabled=false;
            	  if(modifyRole.toLowerCase().indexOf("admin") >= 0){
            		  response.modifyEnabled=true;
               	  }
            	 
        	  }
        	  requestComplete();
        	  reqSigObj.responseData=response;
        	  that.trigger(document,'UiNeedsResponseData',reqSigObj);
        	  
          });
    	  
      };
       
    }


});
