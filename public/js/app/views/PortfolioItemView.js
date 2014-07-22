define( [ 'App', 'marionette', 'text!templates/portfolioitem.html'],
    function( App, Marionette, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {

            tagName : "li",

            //Template HTML string
            template: _.template(template),

            // View Event Handlers
            events: {

            }
        });
    });