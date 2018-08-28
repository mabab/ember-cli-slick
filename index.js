/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
  name: 'ember-cli-slick',

  options: {
      nodeAssets: {
        'slick-carousel': {
          vendor: {
            srcDir: 'slick',
            destDir: 'slick-carousel',
            include: ['slick.js', 'slick.css', 'slick-theme.css'],
            processTree(input) {
              return fastbootTransform(input);
            }
          },
          public: {
            srcDir: 'slick',
            destDir: 'slick-carousel',
            include: ['ajax-loader.gif', 'fonts/*']
          }
        }
      }
  }
};