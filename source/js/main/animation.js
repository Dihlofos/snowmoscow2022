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
  const infoParallaxTween = new TimelineMax ()
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
    .setTween(infoParallaxTween)
    .addIndicators()
    .addTo(controller);

  // Location appearence
  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: "#location",
  })
    .setClassToggle("#location .js-title", "fromBottom")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: "#location",
  })
    .setClassToggle("#location .js-nav", "fadeIn")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 400,
    triggerElement: "#location .js-slider" ,
  })
    .setClassToggle("#location .swiper-slide", "fromLeft")
    .addIndicators()
    .addTo(controller);

  // location parallax
  const locationParallaxTween = new TimelineMax ()
      .add([
        TweenMax.to("#location .js-blue", 1, {y: -200, rotation: 10, ease: parallaxEase}),
        TweenMax.to("#location .js-white", 1, {y: 200, rotation: 10, ease: parallaxEase}),
      ]);
    // build scene
  new ScrollMagic.Scene({triggerElement: "#location", triggerHook: "onEnter", duration: 1700, offset: 450})
    .setTween(locationParallaxTween)
    .addIndicators()
    .addTo(controller);

  // Artzone parallax
  const artzoneParallaxTween = new TimelineMax ()
      .add([
        TweenMax.to("#artzone .js-anim-flakes", 1, {y: 50, rotation: 10,  ease: 'bounce'}),
        TweenMax.to("#artzone .js-anim-dots", 1, {y: -50, rotation: -10,  ease: 'bounce'}),
        TweenMax.to("#artzone .js-anim-dots2", 1, {y: -50, rotation: 5,  ease: 'bounce'}),
      ]);
    // build scene
  new ScrollMagic.Scene({triggerElement: "#artzone", triggerHook: "onEnter", duration: 1700, offset: 600})
    .setTween(artzoneParallaxTween)
    .addIndicators()
    .addTo(controller);

  // artzone appearence
  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 400,
    triggerElement: "#artzone",
  })
    .setClassToggle("#artzone .js-anim-bottom", "fromBottom")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 400,
    triggerElement: "#artzone .artzone__create",
  })
    .setClassToggle("#artzone .js-anim-scale", "fromScale")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: "#artzone .artzone__visit",
  })
    .setClassToggle("#artzone .js-anim-scale-visit", "fromScale")
    .addIndicators()
    .addTo(controller);



  // Map parallax
  const mapParallaxTween = new TimelineMax ()
      .add([
        TweenMax.to("#map .js-anim-white", 1, {y: -200, rotation: 10, ease: parallaxEase}),
        TweenMax.to("#map .js-anim-blue", 1, {y: 200, rotation: 10, ease: parallaxEase}),
      ]);
    // build scene
  new ScrollMagic.Scene({triggerElement: "#map", triggerHook: "onEnter", duration: 1700, offset: 600})
    .setTween(mapParallaxTween)
    .addIndicators()
    .addTo(controller);

  // Map appearence
  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: "#map",
  })
    .setClassToggle("#map .js-anim-bottom", "fromBottom")
    .addIndicators()
    .addTo(controller);

  // Calendar appearence
  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: "#calendar",
  })
    .setClassToggle("#calendar .js-anim-bottom", "fromBottom")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: "#calendar",
  })
    .setClassToggle("#calendar .js-calendar", "fromDeepRight")
    .addIndicators()
    .addTo(controller);

  // Faq appearence
  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: "#faq",
  })
    .setClassToggle("#faq .js-anim-bottom", "fromBottom")
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: "#faq .js-anim-right",
  })
    .setClassToggle("#faq .js-anim-right", "fromRight")
    .addIndicators()
    .addTo(controller);

    // partners parallax
    const footerHeight = document.getElementById('contacts').clientHeight;
    const partnersHeight = document.getElementById('partners').clientHeight;
    const parallaxDuration = footerHeight + partnersHeight - 100;

    const snowflakesParallaxTween = new TimelineMax ()
      .add([
        TweenMax.to("#partners .js-anim-snowflake", 1, { rotation: 360,  ease: 'power1'}),
      ]);
      // build scene
      new ScrollMagic.Scene({triggerElement: "#partners", triggerHook: "onEnter", duration: parallaxDuration, offset: 0})
      .setTween(snowflakesParallaxTween)
      .addIndicators('partners parallax')
      .addTo(controller);


    // partners appearence
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: "#partners",
    })
      .setClassToggle("#partners .js-anim-bottom", "fromBottom")
      .addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: "#partners .js-anim-right",
    })
      .setClassToggle("#partners .js-anim-right", "fromRight")
      .addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: "#partners .js-anim-left",
    })
      .setClassToggle("#partners .js-anim-left", "fromLeft")
      .addIndicators()
      .addTo(controller);


    // Footer appearence
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: "#contacts",
    })
      .setClassToggle("#contacts .js-anim-bottom", "wholeFromBottom")
      .addIndicators()
      .addTo(controller);



})();
