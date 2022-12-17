"use strict";
(function () {
  // init controller
  const controller = new ScrollMagic.Controller();
  const vw = window.innerWidth;
  const offset = vw > 767 ? 300 : 150;



  const commonOptions = {
    reverse: false,
    offset,
    triggerHook: "onEnter",
  };

  // about
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: "#about",
  })
    .setClassToggle("#about .js-anim-title", "fromBottom")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: "#about .js-anim-content",
  })
    .setClassToggle("#about .js-anim-content", "fromLeft")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 0,
    triggerElement: "#about .js-anim-plank",
  })
    .setClassToggle("#about .js-anim-plank", "fadeIn")
    .addIndicators()
    .addTo(controller);

  const parallaxEase = 'slow'

  // Info appearence
  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 600,
    triggerElement: "#info",
  })
    .setClassToggle("#info .js-anim", "fromBottom")
    .addIndicators()
    .addTo(controller);

  // Info parallax
  const parallaxTween = new TimelineMax ()
      .add([
        TweenMax.to("#info .js-blue-right-top", 1, {y: -100, x: -150, rotation: 35, ease: parallaxEase}),
        TweenMax.to("#info .js-blue-right-bottom", 1, {y: 200, x: -250, rotation: 10, ease: parallaxEase}),
        TweenMax.to("#info .js-blue-left-bottom", 1, {y: 400, x: -150, rotation: 10, ease: parallaxEase}),

        TweenMax.to("#info .js-color-bottom", 1, {y: -50, x: -130, rotation: 35, ease: parallaxEase}),
        TweenMax.to("#info .js-color-top", 1, {y: 200, x: -50, rotation: 35, ease: parallaxEase}),
        TweenMax.to("#info .js-color-left", 1, {y: 200, x: 250, rotation: 35, ease: parallaxEase}),

        TweenMax.to("#info .js-whites", 1, {y: -100, x: 150, rotation: 35, ease: parallaxEase})
      ]);


  // build scene
  new ScrollMagic.Scene({triggerElement: "#info", triggerHook: "onEnter", duration: 1700, offset: 450})
          .setTween(parallaxTween)
          .addIndicators()
          .addTo(controller);
})();
