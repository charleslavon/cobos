'use strict';

requirejs.config({
  baseUrl: 'bower_components',
  paths: {
    'component': '../js/component',
    'page': '../js/page',
    'configs': '../js/configs',
    'templates':'../templates',   
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger',
    'flight/lib/debug',
    'hogan/lib/template',
    'hogan/lib/compiler'
 
  ],

  function(compose, registry, advice, withLogging, debug) {
    debug.enable(true);
    debug.events.logAll();
    compose.mixin(registry, [advice.withAdvice]);

    
    require(['page/default'], function(initializeDefault) {
      initializeDefault();
    });
  }
);
