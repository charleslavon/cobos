/**
  @author:
  @description: User Auth - Supports events requesting user Authentication (access) or Authorization (persmissions)

  @required Data:
  @optional Data:

  @Additional Info:

 **/

define(function(require) {

    'use strict';

    /**
     * Module dependencies
     */

    var defineComponent = require('flight/lib/component');
    var withTemplate = require('component/with_template');
    var breadcrumb = {
        "page": "Login"
    };


    /**
     * Private functions
     */
    function handleLogin(object) {

        return function(user, textStatus, jxXHR) {
           
            try{
            	 var loginSuccess = user.username.length > 0,
                      userRoles = user.roles;
                  

                 console.log(user);
                 console.log(userRoles[0]);
                if (loginSuccess) {
                    object.trigger(document,'UiNeedsPortalSelectionPage',{
                        "page": "Services",
                        "username":user
                        });

                } 
            }
            
            catch(e){
            	if(e instanceof TypeError){
            		  // object.trigger(document, 'UiNeedsAuthentication');
            		 $("#login_Warn").html('There was an error logging in. Please try again.').addClass('error');
            		 $('.inputs input').addClass('input-error').focus(function(){
            			 $(this).removeClass('input-error');
            		 });
            		 
            	}
            }

        };
    }
	

    /**
     * Module exports
     */

    return defineComponent(withTemplate, userAuth);


    /**
     * Module function
     */

    function userAuth() {


        this.defaultAttrs({
            loginSelector: "#tpl-login",
            breadcrumbSelector: "#user_details",
            logoutBtnSelector:"#logout",
            loginBtnSelector:"#Login_Btn",
            loginFormSelector:"#userLogin_Form"

        });

        // This method should make an AJAX GET request the controller endpoint of "/userRole". The response will be a string
        // that identifies the user's permissions.
        this.handleUiNeedsUserRole = function(event) {

        };

        // This method should render the login UI
        this.handleUiNeedsAuthentication = function(event) {
            this.renderView('login',null,'loginSelector');
        };

  

      
        this.handleLogout=function(){
        	this.select('logoutBtnSelector').click(function(e){
        		document.location.reload(true);
        		
        	});
        	 
        };
        
        this.handleLoginPage=function(e){
        	this.renderView('login',null,'loginSelector');
        	
        };

        this.after('handleLoginPage',function(){
        	var me=this;
    
                 me.select('loginFormSelector').submit(function(e){
                	 e.preventDefault();
                	  var un, pwd;
                      un = $("input[name='j_username']").val();
                      pwd = $("input[name='j_password']").val();
                     $.post('login', "j_username=" +un+"&j_password=" +pwd, handleLogin(me) );
                 });
        });
        
        this.after('initialize', function() {
            this.renderView('header',breadcrumb,'breadcrumbSelector');
            this.on('UiNeedsUserRole', this.handleUiNeedsUserRole);
            this.on('UiNeedsAuthentication', this.handleUiNeedsAuthentication);
            this.on('UiNeedsLoginInfo',this.handleLogout);
            this.on('UiNeedsLoginPage', this.handleLoginPage);
        });
        


    }

});