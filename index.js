/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
  name: 'ember-cli-slick',

  options: {
      nodeAssets: {
          'slick-carousel': {
              import: {
                  include: ['slick/slick.js', 'slick/slick.css', 'slick/slick-theme.css', 'slick/fonts/slick.ttf', 'slick/fonts/slick.svg', 'slick/fonts/slick.eot', 'slick/fonts/slick.woff', 'slick/ajax-loader.gif'],
                  processTree(input) {
                      return fastbootTransform(input);
                  }
              }
          }
      }
  }
};