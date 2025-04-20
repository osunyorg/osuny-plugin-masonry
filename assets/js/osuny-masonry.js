window.osuny = window.osuny || {};

window.osuny.masonry = window.osuny.masonry || {};

window.osuny.masonry = {
    selectors: '.block-class-masonry',
    init: function () {
        'use strict';
        this.container = document.querySelector(this.selectors);
        if (!this.container) {
            return;
        }
        this.images = this.container.querySelectorAll('img');
        this.children = this.container.querySelectorAll('article');

        if (this.children.length < 4) {
            return;
        } else {
            this.container.classList.add('masonry-grid');
        }

        this.update();
        this.bind();
        this.resize();
    },
    bind: function () {
        'use strict';
        window.addEventListener('resize', this.throttleResize.bind(this));
        this.container.addEventListener('change', this.update.bind(this));
    },
    update: function () {
        'use strict';
        this.images = this.container.querySelectorAll('img');
        this.children = this.container.querySelectorAll('article');

        this.images.forEach(function (image) {
            image.addEventListener('load', this.resize.bind(this));
        }.bind(this));

        this.throttleResize();
    },
    resize: function () {
        'use strict';
        var maximumY = 0,
            offset = this.container.offsetTop - 10;
        this.container.style.height = 1000000 + 'px';
        this.children.forEach(function (child) {
            maximumY = Math.max(maximumY, child.offsetTop + child.offsetHeight - offset);
        });
        this.container.style.height = maximumY + 'px';
    },
    throttleResize: function () {
        'use strict';
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(this.resize.bind(this), 300);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    window.osuny.masonry.init();
});
