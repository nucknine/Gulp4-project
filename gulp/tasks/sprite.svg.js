'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg', function() {
    return $.gulp.src('./source/sprite/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      // remove all fill, style and stroke declarations in out shapes
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      // build svg sprite
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg"
              /*,
            render: {
                scss: {
                  dest:'../../../../../sass/svgsprites.scss',
                  template: "app/sass/_sprite_template.scss"
                }
            }*/
          }
        }
      }))
      .pipe($.gulp.dest($.config.root + '/assets/img'))
  })
};
