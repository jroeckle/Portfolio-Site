require.config({
    baseUrl:"./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "../libs/jquery/dist/jquery.min, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"../libs/jquery/dist/jquery-1.11.1.min",
        "underscore":"../libs/underscore/underscore-min",
        "backbone":"../libs/backbone/backbone",
        "marionette":"../libs/marionette/lib/core/backbone.marionette.min",
        "foundation" : "../libs/foundation/js/foundation.min",

        // Plugins
        "text":"../libs/text/text",
        "jquery.mmenu":"../libs/jQuery.mmenu/src/js/jquery.mmenu.min",
        "backbone.wreqr" : "../libs/backbone.wreqr/lib/backbone.wreqr",
        "backbone.eventbinder" : "../libs/backbone.eventbinder/lib/backbone.eventbinder",
        "backbone.babysitter" : "../libs/backbone.babysitter/lib/backbone.babysitter"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        "jquery" : {
            exports : "jQuery"
        },
        "underscore": {
            exports: "_"
        },
        "backbone":{
            "deps":["jquery", "underscore"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },

        "marionette":{
            "deps":["backbone"]
        },

        // Backbone.validateAll plugin (https://github.com/gfranko/Backbone.validateAll)
        "backbone.validateAll":["backbone"],
    
        "foundation" : {
            "deps" : ["jquery"]
        },

        "jquery.mmenu" : {
            "deps":["jquery"]
        }
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery","App", "routers/AppRouter", "controllers/Controller"],
    function ($, App, AppRouter, Controller) {

    $(function() {

        App.appRouter = new AppRouter({
            controller:new Controller()
        });

        App.start();

    });

});