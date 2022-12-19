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
      .setClassToggle("#location .swiper-slide", "fromLeft")
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

"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };

    upButton.onclick = function () {
      window.scrollTo(0, 0);
    };
  }
})();

"use strict";
(function () {
  const data = {
    11: [
      {
        number: 29,
        disabled: true,
        otherMonth: true,
        link: "",
      },
      {
        number: 30,
        disabled: true,
        otherMonth: true,
        link: "",
      },
      {
        number: 31,
        disabled: true,
        otherMonth: true,
        link: "",
      },
      {
        number: 1,
        disabled: true,
        link: "",
      },
      {
        number: 2,
        disabled: true,
        link: "",
      },
      {
        number: 3,
        disabled: true,
        link: "",
      },
      {
        number: 4,
        disabled: true,
        link: "",
      },
      {
        number: 5,
        disabled: true,
        link: "",
      },
      {
        number: 6,
        disabled: true,
        link: "",
      },
      {
        number: 7,
        disabled: true,
        link: "",
      },
      {
        number: 8,
        disabled: true,
        link: "",
      },
      {
        number: 9,
        disabled: true,
        link: "",
      },
      {
        number: 10,
        disabled: true,
        link: "",
      },
      {
        number: 11,
        disabled: true,
        link: "",
      },
      {
        number: 12,
        disabled: true,
        link: "",
      },
      {
        number: 13,
        disabled: true,
        link: "",
      },
      {
        number: 14,
        disabled: true,
        link: "",
      },
      {
        number: 15,
        disabled: true,
        link: "",
      },
      {
        number: 16,
        disabled: true,
        link: "",
      },
      {
        number: 17,
        disabled: true,
        link: "",
      },
      {
        number: 18,
        disabled: true,
        link: "",
      },
      {
        number: 19,
        disabled: true,
        link: "",
      },
      {
        number: 20,
        disabled: true,
        link: "",
      },
      {
        number: 21,
        disabled: true,
        link: "",
      },
      {
        number: 22,
        disabled: true,
        link: "",
      },
      {
        number: 23,
        disabled: true,
        link: "",
      },
      {
        number: 24,
        disabled: true,
        link: "",
      },
      {
        number: 25,
        disabled: true,
        link: "",
      },
      {
        number: 26,
        disabled: true,
        link: "",
      },
      {
        number: 27,
        disabled: true,
        link: "",
      },
      {
        number: 28,
        link: "https://disk.yandex.ru/d/mFTdM6t1cRq6IQ",
      },
      {
        number: 29,
        link: "https://disk.yandex.ru/d/XJiEabII3lgoWg",
      },
      {
        number: 30,
        link: "https://disk.yandex.ru/d/ydkCcJeAMydsxQ",
      },
      {
        number: 31,
        link: "https://disk.yandex.ru/d/HUFSJ7e1JGyx6A",
      }
    ],
    0: [
      {
        number: 26,
        otherMonth: true,
        link: "",
      },
      {
        number: 27,
        otherMonth: true,
        link: "",
      },
      {
        number: 28,
        otherMonth: true,
        link: "",
      },
      {
        number: 29,
        otherMonth: true,
        link: "",
      },
      {
        number: 30,
        otherMonth: true,
        link: "",
      },
      {
        number: 31,
        otherMonth: true,
        link: "",
      },
      {
        number: 1,
        link: "https://disk.yandex.ru/d/EXjPjzAoNEVkYQ",
      },
      {
        number: 2,
        link: "https://disk.yandex.ru/d/a3yv5R8MY_mDyA",
      },
      {
        number: 3,
        link: "https://disk.yandex.ru/d/I2qE_-PktLihKw",
      },
      {
        number: 4,
        link: "https://disk.yandex.ru/d/w_vCTnzE0ph4oQ",
      },
      {
        number: 5,
        link: "https://disk.yandex.ru/d/nEW8mbJR8Mf8OQ",
      },
      {
        number: 6,
        link: "https://disk.yandex.ru/d/ZsTyzzN7GmQEJw",
      },
      {
        number: 7,
        link: "https://disk.yandex.ru/d/E9e_hgbKrEKNDA",
      },
      {
        number: 8,
        link: "https://disk.yandex.ru/d/g0n9CTrXuwinNw",
      },
      {
        number: 9,
        link: "https://disk.yandex.ru/d/RnMS9lQ0jTmeQA",
      },
      {
        number: 10,
        link: "https://disk.yandex.ru/d/exyBUktTUX6L2w",
      },
      {
        number: 11,
        link: "https://disk.yandex.ru/d/SjqUwPujXTVDtw",
      },
      {
        number: 12,
        link: "https://disk.yandex.ru/d/YXsc0L_qSWVWAg",
      },
      {
        number: 13,
        link: "https://disk.yandex.ru/d/0V7QJAuFDjNSRg",
      },
      {
        number: 14,
        link: "https://disk.yandex.ru/d/K0w6jVJDYsNk1A",
      },
      {
        number: 15,
        link: "https://disk.yandex.ru/d/lIVQPEXw_v0oAg",
      },
      {
        number: 16,
        link: "https://disk.yandex.ru/d/nnJ-vZaZkCXZrA",
      },
      {
        number: 17,
        link: "https://disk.yandex.ru/d/yxpKpXTaaAFE4g",
      },
      {
        number: 18,
        link: "https://disk.yandex.ru/d/XJwuBtGE8Hxa1w",
      },
      {
        number: 19,
        link: "https://disk.yandex.ru/d/tabkJ1opp-R3uQ",
      },
      {
        number: 20,
        link: "https://disk.yandex.ru/d/x5yHmHliaizuWw",
      },
      {
        number: 21,
        link: "https://disk.yandex.ru/d/MwSfCX_Pmnn1bg",
      },
      {
        number: 22,
        link: "https://disk.yandex.ru/d/hfdclLJd69ugZA",
      },
      {
        number: 23,
        link: "https://disk.yandex.ru/d/irijH0fQGC14SQ",
      },
      {
        number: 24,
        link: "https://disk.yandex.ru/d/_TXTTSP4VEbSWA",
      },
      {
        number: 25,
        link: "https://disk.yandex.ru/d/SlEIp2wUXZPAjA",
      },
      {
        number: 26,
        link: "https://disk.yandex.ru/d/G2rn-awEol21kA",
      },
      {
        number: 27,
        link: "https://disk.yandex.ru/d/I1nzAZ7S_61AqQ",
      },
      {
        number: 28,
        link: "https://disk.yandex.ru/d/-dNo45Wt4YX1eg",
      },
      {
        number: 29,
        disabled: true,
        link: "",
      },
      {
        number: 30,
        disabled: true,
        link: "",
      },
      {
        number: 31,
        disabled: true,
        link: "",
      }
    ],
    1: [
      {
        number: 30,
        otherMonth: true,
        link: "",
      },
      {
        number: 31,
        otherMonth: true,
        link: "",
      },
      {
        number: 1,
        link: "",
      },
      {
        number: 2,
        link: "",
      },
      {
        number: 3,
        link: "",
      },
      {
        number: 4,
        link: "",
      },
      {
        number: 5,
        link: "",
      },
      {
        number: 6,
        link: "",
      },
      {
        number: 7,
        link: "",
      },
      {
        number: 8,
        link: "",
      },
      {
        number: 9,
        link: "",
      },
      {
        number: 10,
        link: "",
      },
      {
        number: 11,
        link: "",
      },
      {
        number: 12,
        link: "",
      },
      {
        number: 13,
        link: "",
      },
      {
        number: 14,
        link: "",
      },
      {
        number: 15,
        link: "",
      },
      {
        number: 16,
        link: "",
      },
      {
        number: 17,
        link: "",
      },
      {
        number: 18,
        link: "",
      },
      {
        number: 19,
        link: "",
      },
      {
        number: 20,
        link: "",
      },
      {
        number: 21,
        link: "",
      },
      {
        number: 22,
        link: "",
      },
      {
        number: 23,
        link: "",
      },
      {
        number: 24,
        link: "",
      },
      {
        number: 25,
        link: "",
      },
      {
        number: 26,
        link: "",
      },
      {
        number: 27,
        link: "",
      },
      {
        number: 28,
        link: "",
      }
    ]
  };
  const container = document.querySelector(".js-calendar");
  const next = container.querySelector(".js-next");
  const prev = container.querySelector(".js-prev");
  const month = container.querySelector(".js-month");
  const content = container.querySelector(".js-content");

  const { todayDay, todayMonth } = getToday();

  let activeMonth = todayMonth;
  const firstMonth = 11;
  const lastMonth = 0;

  const months = {
    11: "Декабрь 2022",
    0: "Январь 2023",
    1: "Февраль 2023",
  };
  const monthsIndexes = [11,0];

  init();

  function getToday() {
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();

    return { todayDay, todayMonth };
  }

  function init() {
    const monthToInit = monthsIndexes.includes(todayMonth) ? todayMonth : lastMonth;
    setMonth(monthToInit);
    renderTable(data[monthToInit], monthToInit);

    if (monthToInit === firstMonth) {
      prev.classList.add("calendar__arrow--disabled");
    }
    if (monthToInit === lastMonth) {
      next.classList.add("calendar__arrow--disabled");
    }

    next.addEventListener("click", () => {
      const newMonth = activeMonth === firstMonth ? 0 : activeMonth + 1
      changeMonth(newMonth);
      next.classList.add("calendar__arrow--disabled");
      prev.classList.remove("calendar__arrow--disabled");
    });

    prev.addEventListener("click", () => {
      const newMonth = activeMonth === lastMonth ? firstMonth : activeMonth - 1;
      changeMonth(newMonth);
      prev.classList.add("calendar__arrow--disabled");
      next.classList.remove("calendar__arrow--disabled");
    });
  }

  function changeMonth(newIndex) {
    content.innerHTML = "";
    month.textContent = months[newIndex];
    activeMonth = newIndex;
    renderTable(data[newIndex], newIndex);
  }

  function setMonth(index) {
    activeMonth = index;
    month.textContent = months[index];
  }

  function renderTable(data, month) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("calendar__table");
    if (!data) {
      return;
    }
    data.forEach((item, index) => {
      const cursor = document.querySelector(".js-cursor");
      const innerCell = document.createElement("div");
      innerCell.classList.add("calendar__cell");

      if (item.disabled) {
        innerCell.classList.add("calendar__cell--disabled");
      }

      if (item.otherMonth) {
        innerCell.classList.add("calendar__cell--otherMonth");
      }

      if (item.number === todayDay && todayMonth === month) {
        innerCell.classList.add("calendar__cell--today");
      }

      const link = document.createElement("a");
      link.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
      });
      link.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
      });
      link.href = item.link;
      link.target = "_blank";
      link.textContent = item.number;
      innerCell.append(link);
      wrapper.append(innerCell);
    });

    content.append(wrapper);
  }
})();

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

"use strict";
(function () {
  const togglers = document.querySelectorAll(".js-faq-toggler");
  if (!togglers.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;
      const content = target.nextElementSibling;
      if (!content) return;
      target.classList.toggle("active");
      content.classList.toggle("active");
    });
  });
})();

(function () {
  const pins = document.querySelectorAll('.js-pin');
  const vw = window.innerWidth;

  pins.forEach((pin)=>{
    if (!isTouchDevice()) {
      pin.addEventListener('mouseover', () => {
        toggleOpen(pin);
      })

      pin.addEventListener('mouseout', () => {
        pin.classList.toggle('open');
      })
    } else {
      pin.addEventListener('click', () => {
        toggleOpen(pin);
      })
    }

  })

  function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
  }

  function toggleOpen(pin)  {
    pin.classList.toggle('open');

      if (pin.dataset.pin === '4' && vw < 768) {
        const pin6 = document.querySelector('[data-pin="6"]');
        if (pin6.classList.contains('open')) {
          pin6.classList.remove('open')
        }
      }
    }


})();

"use strict";
(function () {
  let burger = document.querySelector(".js-burger");
  let nav = document.querySelector(".js-nav");
  const { disableBodyScroll, enableBodyScroll } = bodyScrollLock;

  if (burger && nav) {
    // menu toggle
    burger.addEventListener("click", () => {
      if (nav.classList.contains("js-open")) {
        disableBodyScroll(burger);
        nav.classList.remove("js-open");
        burger.classList.add("js-open");
      } else {
        enableBodyScroll(burger);
        nav.classList.add("js-open");
        burger.classList.remove("js-open");
      }
    });

    // nav click
    nav.addEventListener("click", (e) => {
      const nav = e.currentTarget;
      if (nav.classList.contains("js-open")) {
        burger.click();
      }
    });
  }
})();

"use strict";
(function () {
  new Swiper(".js-slider", {
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },

      1025: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
    },
  });

  if (isTouchDevice()) {
    const slides = document.querySelectorAll('.js-slider .swiper-slide');
    slides.forEach((slide)=>{
      slide.addEventListener('click', ()=>{
        slide.classList.toggle('hover');
      })
    })

} else {
    return;
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}


})();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();

(function () {
  document.body.addEventListener("touchstart", function () {
    var video = document.querySelector('video');
    video.play();
  },{ once: true });
})();
