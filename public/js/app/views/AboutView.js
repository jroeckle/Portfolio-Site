define( [ 'App', 'marionette', 'text!templates/about.html'],
    function( App, Marionette, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {

            className : "columns about details",

            //Template HTML string
            template: _.template(template),

            // View Event Handlers
            events: {

            }
        });
    });