/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
    name: 'ember-cli-slick',
    options: {
        nodeAssets: {
            'slick-carousel': {
                srcDir: 'slick',
                import: {
                    include: ['slick/slick.js', 'slick/slick.css', 'slick/slick-theme.css', 'slick/ajax-loader.gif', 'slick/fonts/*'],
                    processTree(input) {
                        return fastbootTransform(input);
                    }
                }
            }
        }
    }
};