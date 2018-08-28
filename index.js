/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
    name: 'ember-cli-slick',
    options: {
        nodeAssets: {
            'slick-carousel': {
                import: {
                    include: ['slick/slick.js', 'slick/slick.css', 'slick/slick-theme.css'],
                    processTree(input) {
                        return fastbootTransform(input);
                    }
                },
                public: ['slick/ajax-loader.gif', 'slick/fonts/*']
            }
        }
    },

    included(app, parentAddon) {
        this._super.included.apply(this, arguments);
    }

};