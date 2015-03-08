// Only execute the factory function once all the dependencies 
// have been loaded and executed.
define(function(require) {

  var jq          = require('jquery'),
      jqplugins   = require('jqplugins'),
      hoverscroll = require('disablehover');

  // Disable Hover on Scroll
  window.addEventListener('scroll', hoverscroll, false);

});
