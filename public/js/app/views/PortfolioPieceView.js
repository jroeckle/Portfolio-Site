define( [ 'App', 'marionette', 'text!templates/portfoliopiece.html'],
    function( App, Marionette, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {

            className : "columns work-piece details",

            //Template HTML string
            template: _.template(template),

            // View Event Handlers
            events: {

            }
        });
    });