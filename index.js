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
                }
            }
        }
    },

    included(app, parentAddon) {
        app.import('node_modules/slick-carousel/slick/ajax-loader.gif');
        app.import('node_modules/slick-carousel/slick/slick.eot');
        app.import('node_modules/slick-carousel/slick/slick.svg');
        app.import('node_modules/slick-carousel/slick/slick.ttf');
        app.import('node_modules/slick-carousel/slick/slick.woff');

        this._super.included.apply(this, arguments);
    }

};