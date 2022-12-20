"use strict";
(function () {
  // init controller
  const controller = new ScrollMagic.Controller();
  const vw = window.innerWidth;
  const offset = vw > 767 ? 150 : 150;

  if (vw > 1023) {
    initAnimationsDesktop();
  }


  function initAnimationsDesktop() {
    const commonOptions = {
      reverse: false,
      offset,
      triggerHook: "onEnter",
    };

    //header
    const header = document.getElementById('header');
    const nav = header.querySelector('.js-nav').classList.add('fromTop');
    const logo = header.querySelector('.js-logo').classList.add('fromBottom');
    const announce = header.querySelector('.js-announce').classList.add('fadeIn');
    const items = header.querySelectorAll('.js-item');
    items.forEach((item)=>{
      item.classList.add('fromBottom');
    })


    // about
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: "#about",
    })
      .setClassToggle("#about .js-anim-title", "fromBottom")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: "#about .js-anim-content",
    })
      .setClassToggle("#about .js-anim-content", "fromLeft")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 0,
      triggerElement: "#about .js-anim-plank",
    })
      .setClassToggle("#about .js-anim-plank", "fadeIn")
      .addTo(controller);

    const parallaxEase = 'slow'

    // Info appearence
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: "#info",
    })
      .setClassToggle("#info .js-anim", "fromBottom")
      .addTo(controller);

    // Info parallax
    const infoHeight = document.getElementById('info').clientHeight;
    console.log('infoHeight', infoHeight*1.4);
    const infoParallaxDuration = infoHeight*1.5;
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
    new ScrollMagic.Scene({triggerElement: "#info", triggerHook: "onEnter", duration: infoParallaxDuration, offset: 450})
      .setTween(infoParallaxTween)
      .addTo(controller);

    // Location appearence
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: "#location",
    })
      .setClassToggle("#location .js-title", "fromBottom")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 300,
      triggerElement: "#location",
    })
      .setClassToggle("#location .js-nav", "fadeIn")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 200,
      triggerElement: "#location .js-slider" ,
    })
      .setClassToggle("#location .js-slide", "fromLeft")
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
      .addTo(controller);

    // artzone appearence
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 200,
      triggerElement: "#artzone",
    })
      .setClassToggle("#artzone .js-anim-bottom", "fromBottom")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 200,
      triggerElement: "#artzone .artzone__create",
    })
      .setClassToggle("#artzone .js-anim-scale", "fromScale")
      .addTo(controller);

    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 250,
      triggerElement: "#artzone .artzone__visit",
    })
      .setClassToggle("#artzone .js-anim-scale-visit", "fromScale")
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
      .addTo(controller);

    // Map appearence
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: 250,
      triggerElement: "#map",
    })
      .setClassToggle("#map .js-anim-bottom", "fromBottom")
      .addTo(controller);

      // partners parallax
      const footerHeight = document.getElementById('contacts').clientHeight;
      const partnersHeight = document.getElementById('partners').clientHeight;
      const parallaxDuration = footerHeight + partnersHeight - 100;

      const snowflakesParallaxTween = new TimelineMax ()
        .add([
          TweenMax.to("#partners .js-anim-snowflake", 1, { rotation: 180,  ease: 'power1'}),
        ]);
        // build scene
        new ScrollMagic.Scene({triggerElement: "#partners", triggerHook: "onEnter", duration: parallaxDuration, offset: 0})
        .setTween(snowflakesParallaxTween)
        .addTo(controller);

      // Footer appearence
      new ScrollMagic.Scene({
        ...commonOptions,
        triggerElement: "#contacts",
      })
        .setClassToggle("#contacts .js-anim-bottom", "wholeFromBottom")

        .addTo(controller);


          // partners appearence
      // new ScrollMagic.Scene({
      //   ...commonOptions,
      //   triggerElement: "#partners",
      // })
      //   .setClassToggle("#partners .js-anim-bottom", "fromBottom")

      //   .addTo(controller);

      // new ScrollMagic.Scene({
      //   ...commonOptions,
      //   triggerElement: "#partners .js-anim-right",
      // })
      //   .setClassToggle("#partners .js-anim-right", "fromRight")

      //   .addTo(controller);

      // new ScrollMagic.Scene({
      //   ...commonOptions,
      //   triggerElement: "#partners .js-anim-left",
      // })
      //   .setClassToggle("#partners .js-anim-left", "fromLeft")

      //   .addTo(controller);



        // // Calendar appearence
    // new ScrollMagic.Scene({
    //   ...commonOptions,
    //   offset: 500,
    //   triggerElement: "#calendar",
    // })
    //   .setClassToggle("#calendar .js-anim-bottom", "fromBottom")
    //   .addTo(controller);

    // new ScrollMagic.Scene({
    //   ...commonOptions,
    //   offset: 500,
    //   triggerElement: "#calendar",
    // })
    //   .setClassToggle("#calendar .js-calendar", "fromDeepRight")
    //   .addTo(controller);

    // Faq appearence
    // new ScrollMagic.Scene({
    //   ...commonOptions,
    //   offset: 500,
    //   triggerElement: "#faq",
    // })
    //   .setClassToggle("#faq .js-anim-bottom", "fromBottom")
    //   .addTo(controller);

    // new ScrollMagic.Scene({
    //   ...commonOptions,
    //   triggerElement: "#faq .js-anim-right",
    // })
    //   .setClassToggle("#faq .js-anim-right", "fromRight")
    //   .addTo(controller);


  }




})();
