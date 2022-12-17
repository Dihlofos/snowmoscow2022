"use strict";
(function () {
    const cursor = document.querySelector(".js-cursor");
    var a = document.querySelectorAll('a');
    var button = document.querySelectorAll('button');
    if (!isTouchDevice()) {
        cursor.style.display = 'block';
    } else {
        return;
    }

    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    const moveCursor = (e)=> {
        const mouseY = e.clientY - 30;
        const mouseX = e.clientX - 30;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    }


    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })

    button.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })

    document.addEventListener('mousedown', function(){
        cursor.classList.add('click');
    });

    document.addEventListener('mouseup', function(){
        cursor.classList.remove('click');
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', moveCursor);

})();
