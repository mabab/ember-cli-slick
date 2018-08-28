/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
    name: 'ember-cli-slick',

    nodeAssets: {
        'slick-carousel': {
            vendor: {
                include: ['slick/slick.js', 'slick/slick.css', 'slick/slick-theme.css'],
                processTree(input) {
                    return fastbootTransform(input);
                }
            },
            public: {
                include: ['slick/ajax-loader.gif', 'slick/fonts/*']
            }
        }
    }
};