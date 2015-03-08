// Load common code that includes config and globals
// then load the app logic for this view/template.
//
// require() function is used to run immediate
// functionalities, while define() is used to 
// define modules for use in multiple locations

// run immediate functionalities
require(['config', 'globals', 'script'], function(config, globals, script) {
  // This function is called when common, globals and script is loaded.
  // If script calls define(), then this function is not fired until
  // script's dependencies have loaded, and the script argument will hold
  // the module value for "script".
  script.speak();
});