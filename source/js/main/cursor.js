"use strict";
(function () {
    const cursor = document.querySelector(".js-cursor");
    const a = document.querySelectorAll('a');
    const vw = window.innerWidth;
    const button = document.querySelectorAll('button');
    const modal = document.querySelector('.js-modal-wrapper');


    if (vw > 1023) {
        cursor.style.display = 'block';
    } else {
        return;
    }

    document.addEventListener('mousemove', () => {
      if (cursor.style.display === 'none') {
        cursor.style.display = 'block';
      }
    })

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

    // красим курсор в синий при наведении на модалку
    modal.addEventListener('mouseover', () => {
      cursor.classList.add('blue');
    });
    modal.addEventListener('mouseleave', () => {
        cursor.classList.remove('blue');
    });

    document.addEventListener('mousedown', function(){
        cursor.classList.add('click');
    });

    document.addEventListener('mouseup', function(){
        cursor.classList.remove('click');
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', moveCursor);

})();
