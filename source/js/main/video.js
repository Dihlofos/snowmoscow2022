"use strict";
(function () {
    const container = document.querySelector(".js-video");
    const button = container.querySelector(".js-video-play");
    const video = container.querySelector(".js-video-video");
    const bg = container.querySelector('.js-video-bg');
    let isVideoPlaying = false;

    button.addEventListener('click', ()=>{
        bg.style.opacity = 0;
        video.play()
        isVideoPlaying = true;
        setTimeout(()=>{
            bg.style.display="none"
        }, 400)
        console.log('video', video, bg);
    })

    video.addEventListener('click', ()=>{
        if (isVideoPlaying) {
            bg.style.display="flex"
            setTimeout(()=>{
                bg.style.opacity = 1;
            }, 400)

            video.pause()
        } else {
            bg.style.opacity = 1;
            video.play()
            setTimeout(()=>{
                bg.style.display="none"
            }, 400)
        }

    })
})();
