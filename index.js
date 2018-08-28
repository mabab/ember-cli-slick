/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
    name: 'ember-cli-slick',
    options: {
        nodeAssets: {
            'slick-carousel': {
                srcDir: 'slick',
                vendor: {
                    include: ['slick.js', 'slick.css', 'slick-theme.css'],
                    processTree(input) {
                        return fastbootTransform(input);
                    }
                },
                public: {
                    include: ['ajax-loader.gif', 'fonts/*']
                }
            }
        }
    }
};