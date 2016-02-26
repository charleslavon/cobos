define(function(require) {

    'use strict';

    /**
     * Module dependencies
     */

    var UserAuth = require('component/user_auth');


    /**
     * Module exports
     */

    return initialize;

    /**
     * Module function
     */

    function initialize() {

        UserAuth.attachTo(document); // these should be attached to the document then we can attach specific functions to  the respective classes
    }
    


});
