/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');


module.exports = {
  name: 'ember-cli-slick',

  options: {
      nodeAssets: {
          'slick-carousel': {
              import: {
                  include: ['slick/slick.js'],
                  processTree(input) {
                      return fastbootTransform(input);
                  }
              }
          }
      }
  },


  included: function(app) {
    this._super.included(app);

    app.import(app.nodeAssets + '/slick-carousel/slick/slick.css');
    app.import(app.nodeAssets + '/slick-carousel/slick/slick-theme.css');
    app.import(app.nodeAssets + '/slick-carousel/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    app.import(app.nodeAssets + '/slick-carousel/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    app.import(app.nodeAssets + '/slick-carousel/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    app.import(app.nodeAssets + '/slick-carousel/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    app.import(app.nodeAssets + '/slick-carousel/slick/ajax-loader.gif', { destDir: 'assets' });
  }
};