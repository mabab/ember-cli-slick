/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
    name: 'ember-cli-slick',
    options: {
        nodeAssets: {
            'slick-carousel': {
                import: {
                    include: ['slick/slick.js', 'slick/slick.css', 'slick/slick-theme.css',
                        'slick/ajax-loader.gif',
                        'slick/slick.eot',
                        'slick/slick.svg',
                        'slick/slick.ttf',
                        'slick/slick.woff'
                    ],
                    processTree(input) {
                        return fastbootTransform(input);
                    }
                }
            }
        }
    },

    included(app, parentAddon) {
        this._super.included.apply(this, arguments);
    }

};