define(["jquery","backbone","models/PortfolioItemModel", "collections/Collection"],
  function($, Backbone, PortfolioItemModel, Collection) {
    

    // Creates a new Backbone Collection class object
    var PortfolioCollection = Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: PortfolioItemModel
    });

    return PortfolioCollection;
  });