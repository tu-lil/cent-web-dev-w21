// IIFE = immedeately invoked function expression
(function() {

    function start () {
        console.log('App started...');
    }

    window.addEventListener("load", start);

})();