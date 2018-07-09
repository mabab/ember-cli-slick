/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
  name: 'ember-cli-slick',

  options: {
      nodeAssets: {
          'slick-carousel': {
              import: {
                  include: ['slick/slick.js', 'slick.css', 'slick-theme.css', 'fonts/slick.ttf', 'fonts/slick.svg', 'fonts/slick.eot', 'fonts/slick.woff', 'ajax-loader.gif'],
                  processTree(input) {
                      return fastbootTransform(input);
                  }
              }
          }
      }
  }
};