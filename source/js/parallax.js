/**
 * scroll parallax
 */

var ParallaxScroll = function() {
    var layers = document.querySelectorAll('.js-s-parallax');

    return {
        move: function(block, windowScroll, strafeAmount) {
            let style = block.style,
                strafe = windowScroll / -strafeAmount + '%',
                transformString = 'translate3d('+ 0 + 'px,' + strafe + ', 0)';

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function(wScroll) {
            [].slice.call(layers).forEach((layer, i) => {
                (i == 0) ? this.move(layer, wScroll, 45 ) : this.move(layer, wScroll, i*10 );
            });
        }
    }
};

export function scrollParallax() {
    var wScroll = window.pageYOffset;
    var parallax = new ParallaxScroll();

    parallax.init(wScroll);
}

/**
 * Mouse parallax
 */
var layers = document.querySelectorAll('.js-m-parallax');

var ParallaxMouse = function() {

    return {
        init: function(e) {
            let initialX = (window.innerWidth / 2) - e.pageX,
                initialY = (window.innerHeight / 2) - e.pageY;

            [].slice.call(layers).forEach((layer, i) => {

                let
                    divider = (i + 1) / 200,
                    positionX = initialX * divider,
                    positionY = initialY * divider,
                    topPosition = (window.innerHeight / 2) * divider,
                    leftPosition = (window.innerWidth / 2) * divider,
                    layerStyle = layer.style;

                let transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)';

                layerStyle.transform = transformString;
                layerStyle.top = '-' + topPosition + 'px';
                layerStyle.left = '-' + leftPosition + 'px';
            });
        }
    }
}

export function mouseParallax(e) {
    var parallax = new ParallaxMouse();

    parallax.init(e);
}