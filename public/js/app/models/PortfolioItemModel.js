define(["jquery", "backbone", "models/Model"],
    function ($, Backbone, Model) {
        // Creates a new Backbone Model class object
        var AboutModel = Model.extend({
            initialize:function () {

            },

            idAttribute: "slug",

            // Default values for all of the Model attributes
            defaults:{
                title : "No Title",
                copy  : "<p>copy</p>"
            },

        });

        return AboutModel;
    }
);