define(['App', 'jquery', 'backbone', 'marionette', 'views/LandingView', 'data/portfolioData'],
    function (App, $, Backbone, Marionette, LandingView, portfolioData) {

    var portfolio = portfolioData;

    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            var that = this;
            App.mainRegion.show(new LandingView({
                collection : portfolio
            }));
        },
        
        //gets mapped to in AppRouter's appRoutes
        index:function () {

            this.clearDetailsView();
            App.mainRegion.show(new LandingView({
                collection : portfolio
            }));
        },

        showWorkSection : function() {

            this.clearDetailsView();

            App.mainRegion.show(new LandingView({
                collection : portfolio
            }));

            this.scrollToSection("#main");

        },

        showPortfolioItem : function(_slug) {

            this.showDetailsView();
            window.scrollTo( 0, 0 );

            $('body')
                .addClass(_slug)
                .attr("detail-view-slug", _slug);

            requirejs(["views/PortfolioPieceView"], function(PortfolioPieceView) {
                App.mainRegion.show(new PortfolioPieceView({
                    model : portfolio.get(_slug)
                }));
            });
        },

        showAboutSection : function() {

            this.showDetailsView();
            window.scrollTo( 0, 0 );

            this.clearHeaderColor();
            
            requirejs(["views/AboutView"], function(AboutView) {
                App.mainRegion.show(new AboutView());
            });
        },

        clearDetailsView : function() {

            //cache Body jquery object;
            var $body = $('body');

            // remove the detailsview active flag and the previous view slug
            // this way we don't have to loop through the portfolio collection and
            // save a little performance

            $body.removeClass('details-view');

            this.clearHeaderColor();
        },

        clearHeaderColor : function() {
            var $body = $('body');

            $body.removeClass($body.attr("detail-view-slug"));
        },

        showDetailsView : function() {

            $('body').addClass('details-view');

        },

        scrollToSection : function(_anchor) {
            var $html       = $('html, body'),
                scrollValue = (_anchor) ? $(_anchor).offset().top : 0;

            $html.animate({
                scrollTop: scrollValue
            }, 400);
        }


    });
});