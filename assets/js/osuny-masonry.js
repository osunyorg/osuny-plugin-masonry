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

        if (this.container.children.length < 4) {
            return;
        }

        this.images = this.container.querySelectorAll('img');

        this.setup();
        this.update();
        this.bind();
        this.resize();
    },
    setup: function () {
        this.children = Array.prototype.slice.call(this.container.children);
        this.container.classList.add('masonry-grid');
        this.children.forEach(function (child) {
            child.classList.add('masonry-grid-item');
        });
    },
    bind: function () {
        'use strict';
        window.addEventListener('resize', this.resize.bind(this, null));
        this.container.addEventListener('change', this.update.bind(this));
    },
    update: function () {
        'use strict';
        this.images = this.container.querySelectorAll('img');
        this.children = Array.prototype.slice.call(this.container.children);

        this.images.forEach(function (image) {
            this.checkImageState(image);
        }.bind(this));

        this.throttleResize();
    },
    resize: function (image) {
        'use strict';

        var maximumY = 0,
            offset = this.container.offsetTop - 10;

        this.container.style.height = 1000000 + 'px';

        this.children.forEach(function (child) {
            maximumY = Math.max(maximumY, child.offsetTop + child.offsetHeight - offset);
        });

        if (image) {
            this.onImageLoad(image);
        }

        this.container.style.height = maximumY + 'px';
    },
    checkImageState: function (image) {
        'use strict';
        if (image.complete) {
            this.onImageLoad(image);
        } else {
            image.addEventListener('load', this.resize.bind(this, image));
        }
    },
    onImageLoad: function (image) {
        'use strict';
        image.classList.add('is-loaded');
    },
    throttleResize: function () {
        'use strict';
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(this.resize.bind(this, null), 100);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    window.osuny.masonry.init();
});
