// modules for use in multiple locations
define(function(require) {
  return {
    speak : function() {
      $('.rjs-container').prepend('<h1>Welcome to the main script logic</h1>');
      console.log('welcome to the main script logic for lemanz');
    }
  };
});