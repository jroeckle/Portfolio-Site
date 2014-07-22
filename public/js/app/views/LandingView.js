define( [ 'App', 'marionette', 'models/Model', 'text!templates/landing.html', 'views/PortfolioItemView'],
    function( App, Marionette, Model, template, PortfolioItemView) {
        //ItemView provides some default rendering logic
        return Marionette.CompositeView.extend( {

            className : "columns",

            childView : PortfolioItemView,

            childViewContainer : '.portfolio-list',

            //Template HTML string
            template: _.template(template),

            model: new Model({
                mobile: App.mobile
            }),

            // View Event Handlers
            events: {

            }
        });
    });