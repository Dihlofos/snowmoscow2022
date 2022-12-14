"use strict";
(function () {
    const cursor = document.querySelector(".js-cursor");



    const moveCursor = (e)=> {
        const mouseY = e.clientY - 30;
        const mouseX = e.clientX - 30;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;


    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('scroll', moveCursor)

})();
