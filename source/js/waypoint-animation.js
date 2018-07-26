/**
 * описание обьекта waypoint анимации
 */
var animateCss = () => {
    /**
     * виден ли элемент с учетом отступа windowMargin
    */
    var checkDistance = (elem) => {
        let
            offset = elem.getBoundingClientRect().top,
            windowMargin = Math.ceil(window.innerHeight / 2),
            topBorder = offset - windowMargin,
            bottomBorder = offset + elem.offsetHeight - windowMargin;

        return (topBorder <= 0 && bottomBorder >= 0);
    }

    /**
     * типы анимаций
    */
    var animationsActions = {
        toRight: function() {
            this.classList.add('toRight');
        },
        fadeIn: function() {
            this.classList.add('fadeIn');
        }
    }

    return {
        init: function() {
            window.addEventListener('scroll', () => {
                var collection = document.querySelectorAll('.animate'),
                    elems = [].slice.call(collection);
                /**
                 * перебор всех элементов с классом animate
                 * добавление класса с анимацией
                 */

                elems.forEach(element => {
                    if (checkDistance(element)) {
                        let animation = element.dataset.animate;

                        animationsActions[animation].call(element);
                    }
                });
            })
        }
    }
};

export function waypoint () {
    var way = new animateCss();

    way.init();
}